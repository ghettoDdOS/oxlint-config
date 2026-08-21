import type { ExternalPluginEntry } from 'oxlint'

import { resolvePlugin } from './utils.ts'

export const pluginEslintJs: ExternalPluginEntry = {
  name: 'eslint-js',
  specifier: 'oxlint-plugin-eslint',
}
export const pluginPerfectionist: ExternalPluginEntry = {
  name: 'perfectionist',
  specifier: 'eslint-plugin-perfectionist',
}
export const pluginRegexp: ExternalPluginEntry = {
  name: 'regexp',
  specifier: 'eslint-plugin-regexp',
}
export const pluginStylistic: ExternalPluginEntry = {
  name: 'style',
  specifier: '@stylistic/eslint-plugin',
}
export const pluginNoOnlyTests: ExternalPluginEntry = {
  name: 'no-only-tests',
  specifier: 'eslint-plugin-no-only-tests',
}
export const pluginTailwindcss: ExternalPluginEntry = {
  name: 'tailwindcss',
  specifier: 'eslint-plugin-better-tailwindcss',
}
export const pluginDeMorgan: ExternalPluginEntry = {
  name: 'de-morgan',
  specifier: 'eslint-plugin-de-morgan',
}
export const pluginCommand: ExternalPluginEntry = {
  name: 'command',
  specifier: 'eslint-plugin-command',
}
export const pluginPreferTemplate = resolvePlugin(
  'prefer-template',
  './custom-plugins/prefer-template.ts',
)
