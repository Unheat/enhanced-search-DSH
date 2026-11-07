/**
 * Presentation-agnostic palette surface adapter.
 *
 * Builds the visible/selectable item list for Floating and Morph from
 * the shared `SearchState` plus the SurfaceDriver's contextual data
 * (session id, workspace list, startup items). Cold is the controller's
 * verdict at snapshot read time, not a layout prop derived here.
 *
 * Both Floating and Morph call this with their own driver; they share
 * one `UniversalPalette` body and one shared SearchController state.
 */
import type { ReactNode } from 'react'
import type { WorkspaceId } from '@deepseek-ai/dsh-api-workspace-controller/client'
import type { PaletteItem } from '../shared/contract.ts'
import type { SearchState, SurfaceMode } from './search-controller.ts'
import type { RankedItem } from './ranking/rank.ts'
import { createStartupItems, contextualItems } from './startup.ts'
import { resolveQueryScope, type SearchScope } from './search-scope.ts'

export interface SurfaceDriver {
  readonly ctx: Pick<import('@deepseek-ai/cordis').Context, 'sessions' | 'workspaces' | 'uiWorkspace'>
  readonly hasSession: boolean
  readonly workspaces: ReadonlyArray<{ workspaceId: string; title: string; path: string }>
  readonly t: (key: string, params?: Record<string, unknown>) => string
  readonly setMode: (mode: SurfaceMode) => void
}

export interface PreparedView {
  readonly items: readonly { item: PaletteItem; score: number; matchRanges: readonly { start: number; end: number }[] }[]
  readonly guidance?: string
  readonly contextHint?: string
  readonly sections: boolean
  readonly emptyMessage: string
  readonly isEmpty: boolean
  readonly pendingQuery: boolean
  readonly activeScope: SearchScope
  readonly effectiveQuery: string
}

/**
 * Pure projection from `SearchState + driver` to the renderer-friendly
 * `PreparedView`. No I/O, no React, no surface-specific state.
 */
export function prepareView(state: SearchState, driver: SurfaceDriver): PreparedView {
  const draft = state.draft
  const resolved = resolveQueryScope(draft)
  const effectiveScope: SearchScope = resolved.explicit ? resolved.scope : (state.mode as SearchScope)
  const cleanQuery = resolved.query

  const pendingQuery = effectiveScope !== 'workspaces' && state.aggregator.query !== cleanQuery
  const queryItems = state.aggregator.items

  let visible: readonly { item: PaletteItem; score: number; matchRanges: readonly { start: number; end: number }[] }[]

  if (effectiveScope === 'sessions') {
    visible = queryItems
      .filter((row) => row.item.kind === 'session' || row.item.kind === 'conversation-hit')
      .map((row) => ({ item: row.item, score: row.score, matchRanges: row.match.ranges }))
  } else if (effectiveScope === 'commands') {
    visible = queryItems
      .filter((row) => row.item.kind === 'command' || row.item.kind === 'action')
      .map((row) => ({ item: row.item, score: row.score, matchRanges: row.match.ranges }))
  } else if (effectiveScope === 'workspaces') {
    const q = cleanQuery.toLowerCase()
    visible = driver.workspaces
      .filter((w) => !q || `${w.title} ${w.path}`.toLowerCase().includes(q))
      .map((w) => ({ item: workspaceItem(w, driver), score: 0, matchRanges: [] }))
  } else {
    // effectiveScope === 'all'
    if (!driver.hasSession && cleanQuery === '') {
      const startup = createStartupItems(
        driver.ctx,
        () => driver.setMode('workspaces'),
        () => driver.setMode('sessions'),
        driver.t,
      )
      const base = contextualItems(queryItems as readonly RankedItem[])
      visible = [...startup.map(asRanked), ...base.map(r => ({ item: r.item, score: r.score, matchRanges: r.match.ranges }))]
    } else if (cleanQuery === '') {
      const contextual = driver.hasSession ? contextualItems(queryItems as readonly RankedItem[]) : queryItems
      visible = contextual.map((row) => ({ item: row.item, score: row.score, matchRanges: row.match.ranges }))
    } else {
      visible = queryItems.map((r) => ({ item: r.item, score: r.score, matchRanges: r.match.ranges }))
    }
  }

  const guidance = effectiveScope === 'workspaces'
    ? driver.t('workspace')
    : effectiveScope === 'sessions'
    ? driver.t('recent')
    : effectiveScope === 'commands'
    ? driver.t('commands')
    : !driver.hasSession && cleanQuery === ''
    ? driver.workspaces.length === 0 ? driver.t('choose') : driver.t('create')
    : undefined

  const contextHint = !driver.hasSession && cleanQuery === ''
    ? driver.t('requires')
    : effectiveScope === 'sessions' && visible.length === 0 ? driver.t('noRecent') : undefined

  const emptyMessage = effectiveScope === 'sessions' ? driver.t('noRecent') : driver.t('empty')

  return {
    items: pendingQuery ? [] : visible,
    guidance,
    contextHint,
    sections: (driver.hasSession && effectiveScope === 'all' && cleanQuery === '') || (effectiveScope === 'all' && cleanQuery !== ''),
    emptyMessage,
    isEmpty: visible.length === 0,
    pendingQuery,
    activeScope: effectiveScope,
    effectiveQuery: cleanQuery,
  }
}

function asRanked(item: PaletteItem): { item: PaletteItem; score: number; matchRanges: readonly { start: number; end: number }[] } {
  return { item, score: 0, matchRanges: [] }
}

function workspaceItem(
  w: { workspaceId: string; title: string; path: string },
  driver: SurfaceDriver,
): PaletteItem {
  return {
    id: `workspace:${w.workspaceId}`,
    providerId: 'navigation',
    kind: 'workspace',
    title: w.title,
    subtitle: w.path,
    primary: {
      id: 'open-workspace',
      title: 'Open',
      run: async () => {
        const ui = (driver.ctx as any).uiWorkspace
        if (ui && typeof ui.connectWorkspace === 'function') {
          const sessionId = await ui.connectWorkspace(w.workspaceId as WorkspaceId)
          if (typeof ui.openSession === 'function') {
            ui.openSession(sessionId)
          } else if (typeof (driver.ctx.sessions as any)?.open === 'function') {
            (driver.ctx.sessions as any).open(sessionId)
          }
        } else if (ui && typeof ui.openWorkspace === 'function') {
          await ui.openWorkspace(w.workspaceId)
        } else if (typeof (driver.ctx.sessions as any)?.open === 'function') {
          (driver.ctx.sessions as any).open(w.workspaceId)
        }
      },
    },
  }
}

export function localizedError(
  reason: unknown,
  t: (key: string, params?: Record<string, unknown>) => string,
): string {
  const message = reason instanceof Error ? reason.message : String(reason)
  return message.startsWith('Feedback text is required') ? t('feedbackRequired') : message
}

export function noopNode(): ReactNode { return null }
