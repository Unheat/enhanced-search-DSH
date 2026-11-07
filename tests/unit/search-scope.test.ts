import { test } from 'node:test'
import assert from 'node:assert/strict'
import { resolveQueryScope, scopeToPrefix } from '../../src/client/search-scope.ts'

test('resolveQueryScope resolves commands prefix >', () => {
  const result = resolveQueryScope('> compact')
  assert.equal(result.scope, 'commands')
  assert.equal(result.query, 'compact')
  assert.equal(result.prefix, '>')
  assert.equal(result.explicit, true)
})

test('resolveQueryScope resolves sessions prefix #', () => {
  const result = resolveQueryScope('# ripgrep')
  assert.equal(result.scope, 'sessions')
  assert.equal(result.query, 'ripgrep')
  assert.equal(result.prefix, '#')
  assert.equal(result.explicit, true)
})

test('resolveQueryScope resolves workspaces prefix @', () => {
  const result = resolveQueryScope('@ workflow')
  assert.equal(result.scope, 'workspaces')
  assert.equal(result.query, 'workflow')
  assert.equal(result.prefix, '@')
  assert.equal(result.explicit, true)
})

test('resolveQueryScope resolves plain query without prefix', () => {
  const result = resolveQueryScope('some search query')
  assert.equal(result.scope, 'all')
  assert.equal(result.query, 'some search query')
  assert.equal(result.prefix, '')
  assert.equal(result.explicit, false)
})

test('resolveQueryScope handles empty and whitespace strings', () => {
  assert.equal(resolveQueryScope('').scope, 'all')
  assert.equal(resolveQueryScope('   ').scope, 'all')
  assert.equal(resolveQueryScope('>').scope, 'commands')
  assert.equal(resolveQueryScope('>').query, '')
})

test('scopeToPrefix maps scopes correctly', () => {
  assert.equal(scopeToPrefix('commands'), '>')
  assert.equal(scopeToPrefix('sessions'), '#')
  assert.equal(scopeToPrefix('workspaces'), '@')
  assert.equal(scopeToPrefix('all'), '')
})
