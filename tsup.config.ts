import { defineConfig } from 'tsup'

const OUTPUT_DIR = 'build'

export default defineConfig({
  name: 'reanimated-lucide',
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  clean: true,
  treeshake: true,
  outDir: OUTPUT_DIR,
  dts: true,
  format: 'esm',
  external: ['react-native-svg', 'react-native-reanimated', 'react'],
})