import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'node',
    include: ['**/*.e2e-spec.ts'],
    exclude: ['node_modules', 'dist'],
    root: './test',
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.json',
    },
    deps: {
      interopDefault: true,
    },
    clearMocks: true,
    passWithNoTests: true,
  },
  plugins: [
    swc.vite({
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        target: 'es2021',
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
  ],
});

