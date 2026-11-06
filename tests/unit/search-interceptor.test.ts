import { test } from 'node:test'
import assert from 'node:assert/strict'
import { attachKeyboard } from '../../src/client/keyboard.ts'

test('Cmd+K captures and opens palette on macOS style events', () => {
  let opened = false
  const handle = attachKeyboard({
    shortcut: 'Cmd+Shift+K',
    isOpen: () => false,
    onOpen: () => { opened = true },
    onClose: () => {},
  })

  // Simulate Cmd+K keydown event
  let prevented = false
  let stopped = false
  const fakeEvent = {
    key: 'k',
    metaKey: true,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    isComposing: false,
    repeat: false,
    target: null,
    preventDefault: () => { prevented = true },
    stopPropagation: () => { stopped = true },
  } as unknown as KeyboardEvent

  // Dispatch via window event listener if registered
  if (typeof window !== 'undefined') {
    window.dispatchEvent(fakeEvent as unknown as Event)
  }
  handle.dispose()
})

test('detectShortcut recognizes Cmd+K and Cmd+Shift+K', async () => {
  const { detectShortcut } = await import('../../src/client/keyboard.ts')
  const event1 = {
    key: 'k',
    metaKey: true,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
  } as unknown as KeyboardEvent
  assert.equal(detectShortcut(event1), 'Cmd+K')

  const event2 = {
    key: 'K',
    metaKey: true,
    ctrlKey: false,
    altKey: false,
    shiftKey: true,
  } as unknown as KeyboardEvent
  assert.equal(detectShortcut(event2), 'Cmd+Shift+K')
})
