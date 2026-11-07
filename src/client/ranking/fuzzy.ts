/**
 * Deterministic, no-LLM fuzzy + subsequence + tokenized multi-field matcher.
 * Inspired by ZCode Quickpick & VS Code Command Palette.
 */

export interface MatchInput {
  readonly title: string
  readonly subtitle?: string
  readonly keywords?: readonly string[]
  readonly aliases?: readonly string[]
  readonly snippet?: string
}

export interface MatchResult {
  readonly score: number
  readonly ranges: readonly Range[]
}

export interface Range {
  readonly start: number
  readonly end: number
}

function lower(s: string): string {
  return s.toLowerCase()
}

function findRanges(haystack: string, needle: string): Range[] {
  if (needle.length === 0) return []
  const ranges: Range[] = []
  let from = 0
  while (from <= haystack.length - needle.length) {
    const idx = haystack.indexOf(needle, from)
    if (idx < 0) break
    ranges.push({ start: idx, end: idx + needle.length })
    from = idx + needle.length
  }
  return ranges
}

function subsequence(haystack: string, needle: string): Range[] | null {
  const h = lower(haystack)
  const n = lower(needle)
  if (n.length === 0) return []
  const ranges: Range[] = []
  let hi = 0
  for (let ni = 0; ni < n.length; ni++) {
    const ch = n.charCodeAt(ni)
    let found = -1
    for (let j = hi; j < h.length; j++) {
      if (h.charCodeAt(j) === ch) {
        found = j
        break
      }
    }
    if (found < 0) return null
    ranges.push({ start: found, end: found + 1 })
    hi = found + 1
  }
  return ranges
}

export function matchSingleWord(q: string, input: MatchInput): MatchResult {
  const title = input.title
  const lt = lower(title).replace(/^\//, '')
  const lq = lower(q).replace(/^\//, '')
  if (lq === '') return { score: title.startsWith('/') ? 0.92 : 0, ranges: [] }

  // 1. Exact match on title
  if (lt === lq) return { score: 1, ranges: [{ start: 0, end: title.length }] }

  // 2. Exact match on aliases
  if (input.aliases && input.aliases.length > 0) {
    for (const a of input.aliases) {
      if (lower(a) === lq) {
        return { score: 0.95, ranges: findRanges(lt, lq) }
      }
    }
  }

  // 3. Prefix match on title
  if (lt.startsWith(lq)) {
    const offset = title.startsWith('/') ? 1 : 0
    return { score: 0.92, ranges: [{ start: offset, end: offset + lq.length }] }
  }

  // 4. Word boundary match in title (e.g. "plugin" in "Fix this plugin")
  const wordBoundaryRegex = new RegExp(`\\b${escapeRegExp(lq)}`, 'i')
  const boundaryMatch = wordBoundaryRegex.exec(lt)
  if (boundaryMatch) {
    const offset = (title.startsWith('/') ? 1 : 0) + boundaryMatch.index
    return { score: 0.88, ranges: [{ start: offset, end: offset + lq.length }] }
  }

  // 5. Keyword exact, prefix, or path segment match
  if (input.keywords && input.keywords.length > 0) {
    for (const k of input.keywords) {
      const lk = lower(k)
      if (lk === lq) {
        return { score: 0.92, ranges: findRanges(lower(title), lq) }
      }
      if (lk.startsWith(lq)) {
        return { score: 0.86, ranges: findRanges(lower(title), lq) }
      }
      // If keyword is a path, match path segments (e.g. /study/workflow -> "workflow")
      if (lk.includes('/') || lk.includes('\\')) {
        const segments = lk.split(/[\\/]/).filter(Boolean)
        if (segments.some(seg => seg === lq)) {
          return { score: 0.85, ranges: findRanges(lower(title), lq) }
        }
        if (segments.some(seg => seg.startsWith(lq))) {
          return { score: 0.80, ranges: findRanges(lower(title), lq) }
        }
      }
    }
  }

  // 6. Title contains word
  if (lt.includes(lq)) {
    return { score: 0.84, ranges: findRanges(lower(title), lq) }
  }

  // 7. Alias prefix match
  for (const alias of input.aliases ?? []) {
    if (lower(alias).startsWith(lq)) return { score: 0.9, ranges: [] }
  }

  // 8. Snippet (full-text conversation hit)
  if (input.snippet && lower(input.snippet).includes(lq)) {
    return { score: 0.82, ranges: [] }
  }

  // 9. Subtitle path segment match (e.g. subtitle contains path /study/workflow)
  if (input.subtitle) {
    const lsub = lower(input.subtitle)
    if (lsub.includes('/') || lsub.includes('\\')) {
      const segments = lsub.split(/[\\/\s·]+/).filter(Boolean)
      if (segments.some(seg => seg === lq)) {
        return { score: 0.80, ranges: [] }
      }
    }
    // Bare prose substring in subtitle has low score (0.5) to avoid false positives
    if (lsub.includes(lq)) {
      return { score: 0.5, ranges: [] }
    }
  }

  // 10. Subsequence fuzzy match in title
  const sub = subsequence(title, q)
  if (sub) {
    const totalSpan = sub[sub.length - 1]!.end - sub[0]!.start
    const density = q.length / Math.max(totalSpan, 1)
    const early = 1 - sub[0]!.start / Math.max(lt.length, 1)
    const score = Math.min(0.78, 0.45 + 0.25 * density + 0.08 * early)
    if (q.length >= 3 && density >= 0.5) return { score, ranges: sub }
  }

  return { score: 0, ranges: [] }
}

export function matchItem(query: string, input: MatchInput): MatchResult {
  const q = query.trim()
  if (q.length === 0) return { score: 0, ranges: [] }

  const words = q.split(/\s+/).filter(Boolean)
  if (words.length > 1) {
    const results = words.map((w) => matchSingleWord(w, input))
    // Every query word must match with score >= 0.65
    if (results.every((r) => r.score >= 0.65)) {
      const avgScore = results.reduce((acc, r) => acc + r.score, 0) / results.length
      const allRanges = results.flatMap((r) => r.ranges).sort((a, b) => a.start - b.start)
      const titleLower = lower(input.title)
      const allInTitle = words.every((w) => titleLower.includes(lower(w)))
      const finalScore = Math.min(1.0, avgScore + (allInTitle ? 0.05 : 0))
      return { score: finalScore, ranges: allRanges }
    }
    return { score: 0, ranges: [] }
  }

  return matchSingleWord(q, input)
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
