import { createElement, type ComponentType } from 'react'
import * as primitives from '@deepseek-ai/dsh-client-ui-primitives'

// DSH 0.2 uses size-prop icons; 0.1 used size-suffixed exports.
function icon(current: string, legacy: string) {
  const component = Reflect.get(primitives, current) ?? Reflect.get(primitives, legacy)
  if (component === undefined) throw new Error(`Universal Palette: missing DSH icon ${current}`)
  return function PaletteIcon(props: { className?: string }) {
    return createElement(component as ComponentType<{ size?: number; className?: string }>, { size: 16, ...props })
  }
}
export const IconSearchOutline16 = icon('IconSearchOutlineRegular', 'IconSearchOutline16')
export const IconNewChatOutline16 = icon('IconNewChatOutlineRegular', 'IconNewChatOutline16')
export const IconFolderOpenOutline16 = icon('IconFolderOpenOutlineRegular', 'IconFolderOpenOutline16')
export const IconClockOutline16 = icon('IconClockOutlineRegular', 'IconClockOutline16')
export const IconSparkle16 = icon('IconSparkleRegular', 'IconSparkle16')
export const IconSkillOutline16 = icon('IconSkillOutlineRegular', 'IconSkillOutline16')
export const IconAgentPresetOutline16 = icon('IconAgentPresetOutlineRegular', 'IconAgentPresetOutline16')
