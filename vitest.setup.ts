/**
 * Setup file for Vitest to properly support NestJS testing
 */

// Import reflect-metadata - essential for NestJS decorators and metadata
import 'reflect-metadata';
// Import necessary Vitest utilities
import { vi, afterEach, beforeAll } from 'vitest';

// This is run before all tests
console.log('Setting up NestJS test environment...');

// Set timeout for tests that might take longer due to NestJS module initialization
beforeAll(() => {
  // Default timeout of 15 seconds
  vi.setConfig({ testTimeout: 15000 });
});

// Clear any mocks between tests if needed
afterEach(() => {
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

// Set up any global test utilities for NestJS if needed

