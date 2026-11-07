import { createElement, type ReactNode } from 'react'

export interface TextMatchRange {
  readonly start: number
  readonly end: number
}

export function findTextMatchRanges(text: string, query: string): TextMatchRange[] {
  const normalizedText = text.toLowerCase()
  const rawParts = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (rawParts.length === 0 || text.length === 0) return []

  const seen = new Set<string>()
  const parts: string[] = []
  for (const part of rawParts) {
    const clean = part.replace(/^[>#@/]/, '')
    if (clean.length > 0 && !seen.has(clean)) {
      seen.add(clean)
      parts.push(clean)
    }
  }
  if (parts.length === 0) return []

  const ranges: TextMatchRange[] = []
  for (const part of parts) {
    let index = 0
    while (index <= normalizedText.length - part.length) {
      const matchIndex = normalizedText.indexOf(part, index)
      if (matchIndex === -1) break
      ranges.push({ start: matchIndex, end: matchIndex + part.length })
      index = matchIndex + part.length
    }
  }

  ranges.sort((a, b) => a.start - b.start || a.end - b.end)
  const merged: TextMatchRange[] = []
  for (const r of ranges) {
    const last = merged[merged.length - 1]
    if (!last || r.start > last.end) {
      merged.push({ start: r.start, end: r.end })
    } else {
      (last as { end: number }).end = Math.max(last.end, r.end)
    }
  }
  return merged
}

export interface HighlightedTextProps {
  readonly text: string
  readonly query: string
  readonly highlightClassName?: string
}

export function HighlightedText(props: HighlightedTextProps): ReactNode {
  const { text, query, highlightClassName } = props
  const ranges = findTextMatchRanges(text, query)
  if (ranges.length === 0) {
    return text
  }

  const nodes: ReactNode[] = []
  let cursor = 0

  ranges.forEach((range, idx) => {
    if (cursor < range.start) {
      nodes.push(createElement('span', { key: `p-${idx}` }, text.slice(cursor, range.start)))
    }
    nodes.push(
      createElement(
        'mark',
        { key: `m-${idx}`, className: highlightClassName },
        text.slice(range.start, range.end),
      ),
    )
    cursor = range.end
  })

  if (cursor < text.length) {
    nodes.push(createElement('span', { key: 'p-end' }, text.slice(cursor)))
  }

  return createElement('span', null, ...nodes)
}
