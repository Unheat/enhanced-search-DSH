/**
 * Unit tests: ranking + fuzzy match.
 *
 * Pure-Node tests; no DSH imports. The ranking module is
 * DSH-agnostic data flow and is tested with plain item inputs.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { matchItem } from '../../src/client/ranking/fuzzy.ts'

test('exact title match returns 1.0', () => {
  const r = matchItem('compact', { title: 'compact' })
  assert.equal(r.score, 1)
})

test('case-insensitive exact', () => {
  const r = matchItem('COMPACT', { title: 'compact' })
  assert.equal(r.score, 1)
})

test('prefix match scores higher than subsequence', () => {
  const prefix = matchItem('comp', { title: 'compact' })
  const subseq = matchItem('cmpt', { title: 'compact' })
  assert.ok(prefix.score > subseq.score)
})

test('empty query returns zero', () => {
  const r = matchItem('', { title: 'compact' })
  assert.equal(r.score, 0)
})

test('no match returns zero', () => {
  const r = matchItem('zzzzzz', { title: 'compact' })
  assert.equal(r.score, 0)
})

test('slash-only query is a command prefix, not an empty query matching every model', () => {
  assert.equal(matchItem('/',{title:'DeepSeek-V4-Pro'}).score,0)
  assert.ok(matchItem('/',{title:'/goal'}).score >= 0.9)
})

test('matches keyword and path in subtitle with score >= 0.75', () => {
  const r1 = matchItem('workflow', {
    title: 'Fix this plugin',
    subtitle: 'idle · /Users/dangtruongan/study/workflow',
    keywords: ['/Users/dangtruongan/study/workflow', 'workflow'],
  })
  assert.ok(r1.score >= 0.75, `Expected score >= 0.75, got ${r1.score}`)

  const r2 = matchItem('study', {
    title: 'Fix this plugin',
    subtitle: 'idle · /Users/dangtruongan/study/workflow',
  })
  assert.ok(r2.score >= 0.75, `Expected score >= 0.75, got ${r2.score}`)
})

test('multi-word search matches across title and path/keyword', () => {
  const r = matchItem('fix workflow', {
    title: 'Fix this plugin',
    subtitle: 'idle · /Users/dangtruongan/study/workflow',
    keywords: ['workflow'],
  })
  assert.ok(r.score >= 0.80, `Expected score >= 0.80, got ${r.score}`)
  assert.ok(r.ranges.length > 0, 'Match ranges should be populated')
})

test('word boundary in title matches strongly', () => {
  const r = matchItem('plugin', { title: 'Fix this plugin' })
  assert.ok(r.score >= 0.85, `Expected score >= 0.85, got ${r.score}`)
})
