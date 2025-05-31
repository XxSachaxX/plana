import { defineConfig } from 'vitest/config';
import { swc } from '@swc/core';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.e2e-spec.ts'],
    exclude: ['node_modules', 'dist'],
    root: './test',
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.json',
    },
    transform: {
      '^.+\\.(t|j)s$': [
        'vite-plugin-swc',
        {
          swc: {
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
          },
        },
      ],
    },
    deps: {
      interopDefault: true,
    },
    clearMocks: true,
    passWithNoTests: true,
  },
});

