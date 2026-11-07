import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  readSearchHistory,
  pushSearchHistory,
  clearSearchHistory,
} from '../../src/client/search-history.ts'

function setupMockStorage() {
  const store = new Map<string, string>()
  const mockStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => { store.set(key, value) },
    removeItem: (key: string) => { store.delete(key) },
    clear: () => { store.clear() },
  }
  const originalWindow = (globalThis as any).window
  ;(globalThis as any).window = { localStorage: mockStorage }
  return () => {
    if (originalWindow !== undefined) (globalThis as any).window = originalWindow
    else delete (globalThis as any).window
  }
}

test('readSearchHistory returns empty when storage is empty', () => {
  const cleanup = setupMockStorage()
  try {
    clearSearchHistory()
    assert.deepEqual(readSearchHistory(), [])
  } finally {
    cleanup()
  }
})

test('pushSearchHistory adds, deduplicates case-insensitively, and limits entries', () => {
  const cleanup = setupMockStorage()
  try {
    clearSearchHistory()
    pushSearchHistory('first search', 'all')
    pushSearchHistory('SECOND SEARCH', 'commands')
    const list = pushSearchHistory('first search', 'sessions')

    // Most recent first, deduplicated
    assert.equal(list.length, 2)
    assert.equal(list[0]?.query, 'first search')
    assert.equal(list[0]?.scope, 'sessions')
    assert.equal(list[1]?.query, 'SECOND SEARCH')

    // Ignores empty or bare prefixes
    pushSearchHistory('   ')
    pushSearchHistory('>')
    pushSearchHistory('#')
    pushSearchHistory('@')
    assert.equal(readSearchHistory().length, 2)
  } finally {
    cleanup()
  }
})

test('clearSearchHistory empties stored history', () => {
  const cleanup = setupMockStorage()
  try {
    pushSearchHistory('to be cleared')
    assert.equal(readSearchHistory().length, 1)
    clearSearchHistory()
    assert.equal(readSearchHistory().length, 0)
  } finally {
    cleanup()
  }
})
