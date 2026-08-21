import type { OxlintConfig } from 'oxlint'

import { pluginCommand } from '../plugins.ts'

export function command(): OxlintConfig {
  return {
    jsPlugins: [pluginCommand],
    rules: {
      'command/command': 'error',
    },
  }
}
