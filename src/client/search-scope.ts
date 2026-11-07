/**
 * Search scope definitions and prefix resolution.
 *
 * Inspired by ZCode Quickpick command center:
 * - `>` queries Commands
 * - `#` queries Conversations & Sessions
 * - `@` queries Workspaces
 * - no prefix queries All categories
 */

export type SearchScope = 'all' | 'commands' | 'sessions' | 'workspaces'

export interface ResolvedScopeQuery {
  readonly query: string
  readonly scope: SearchScope
  readonly prefix: string
  readonly explicit: boolean
}

export function resolveQueryScope(rawDraft: string): ResolvedScopeQuery {
  const trimmed = rawDraft.trimStart()
  if (trimmed.startsWith('>')) {
    return {
      query: trimmed.slice(1).trimStart(),
      scope: 'commands',
      prefix: '>',
      explicit: true,
    }
  }
  if (trimmed.startsWith('#')) {
    return {
      query: trimmed.slice(1).trimStart(),
      scope: 'sessions',
      prefix: '#',
      explicit: true,
    }
  }
  if (trimmed.startsWith('@')) {
    return {
      query: trimmed.slice(1).trimStart(),
      scope: 'workspaces',
      prefix: '@',
      explicit: true,
    }
  }
  return {
    query: rawDraft.trim(),
    scope: 'all',
    prefix: '',
    explicit: false,
  }
}

export function scopeToPrefix(scope: SearchScope): string {
  switch (scope) {
    case 'commands': return '>'
    case 'sessions': return '#'
    case 'workspaces': return '@'
    default: return ''
  }
}
