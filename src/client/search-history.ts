/**
 * Browser-local search history management.
 *
 * Persists recent search queries in localStorage so users can quickly re-execute
 * searches when the palette opens with an empty query (similar to ZCode).
 */

import type { SearchScope } from './search-scope.ts'

export interface SearchHistoryEntry {
  readonly query: string
  readonly scope: SearchScope
  readonly timestamp: number
}

const STORAGE_KEY = 'dsh-universal-palette:search-history'
const MAX_HISTORY_ITEMS = 15

function getStorage(): Storage | null {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage
  } catch {
    return null
  }
}

export function readSearchHistory(): SearchHistoryEntry[] {
  const storage = getStorage()
  if (!storage) return []
  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((entry): entry is SearchHistoryEntry =>
        entry && typeof entry === 'object' &&
        typeof entry.query === 'string' &&
        typeof entry.timestamp === 'number')
      .slice(0, MAX_HISTORY_ITEMS)
  } catch {
    return []
  }
}

export function pushSearchHistory(query: string, scope: SearchScope = 'all'): SearchHistoryEntry[] {
  const trimmed = query.trim()
  if (!trimmed || trimmed === '>' || trimmed === '#' || trimmed === '@') {
    return readSearchHistory()
  }
  const storage = getStorage()
  const nextEntry: SearchHistoryEntry = {
    query: trimmed,
    scope,
    timestamp: Date.now(),
  }
  const current = readSearchHistory()
  const lowerQuery = trimmed.toLowerCase()
  const deduplicated = [
    nextEntry,
    ...current.filter(entry => entry.query.toLowerCase() !== lowerQuery),
  ].slice(0, MAX_HISTORY_ITEMS)

  if (storage) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(deduplicated))
    } catch {
      // Ignore quota errors
    }
  }
  return deduplicated
}

export function clearSearchHistory(): void {
  const storage = getStorage()
  if (!storage) return
  try {
    storage.removeItem(STORAGE_KEY)
  } catch {
    // Ignore
  }
}
