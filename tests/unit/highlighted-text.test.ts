import { test } from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { findTextMatchRanges, HighlightedText } from '../../src/client/HighlightedText.ts'

test('findTextMatchRanges returns empty for empty text or query', () => {
  assert.deepEqual(findTextMatchRanges('', 'search'), [])
  assert.deepEqual(findTextMatchRanges('text', ''), [])
  assert.deepEqual(findTextMatchRanges('text', '   '), [])
})

test('findTextMatchRanges finds single word case-insensitively', () => {
  const ranges = findTextMatchRanges('DeepSeek Harness Web', 'harness')
  assert.deepEqual(ranges, [{ start: 9, end: 16 }])
})

test('findTextMatchRanges finds multiple words and ignores scope prefix', () => {
  const ranges = findTextMatchRanges('DeepSeek Harness Web Search', '> harness search')
  assert.deepEqual(ranges, [
    { start: 9, end: 16 },
    { start: 21, end: 27 },
  ])
})

test('findTextMatchRanges merges overlapping and contiguous matches', () => {
  const ranges = findTextMatchRanges('banana', 'an nan')
  assert.deepEqual(ranges, [{ start: 1, end: 5 }])
})

test('HighlightedText renders mark tags around matched ranges', () => {
  const html = renderToString(
    React.createElement(HighlightedText, {
      text: 'Universal Palette Search',
      query: 'palette',
      highlightClassName: 'custom-mark',
    }),
  )
  assert.match(html, /<mark class="custom-mark">Palette<\/mark>/)
  assert.match(html, /Universal/)
  assert.match(html, /Search/)
})

test('HighlightedText renders plain text when no matches exist', () => {
  const html = renderToString(
    React.createElement(HighlightedText, {
      text: 'No match here',
      query: 'zzzz',
    }),
  )
  assert.doesNotMatch(html, /<mark/)
  assert.match(html, /No match here/)
})
