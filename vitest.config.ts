import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

// This is needed for NestJS metadata
import 'reflect-metadata';

export default defineConfig({
  plugins: [
    // Use unplugin-swc for better NestJS compatibility
    swc.vite({
      module: { type: 'es6' },
      jsc: {
        target: 'es2021',
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
    root: './',
    setupFiles: ['./vitest.setup.ts'], // We'll create this setup file
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: ['node_modules/', 'test/'],
    },
    deps: {
      interopDefault: true,
    },
  },
});

