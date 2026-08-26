import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  entry: ['src/index.ts', 'src/custom-plugins/prefer-template.ts'],
  exports: true,
  format: ['esm'],
  shims: true,
})
