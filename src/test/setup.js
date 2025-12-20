import '@testing-library/jest-dom'
import { afterEach, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from '../mocks/server';
import { resetMockReadings } from '../mocks/handlers';

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => {
  cleanup();
  server.resetHandlers();
  resetMockReadings();
});
afterAll(() => server.close());

// Mock require for image imports
const mockRequire = vi.fn()
mockRequire.mockImplementation((path) => {
  if (path.includes('.jpg')) {
    return 'mocked-image-path'
  }
  return mockRequire
})

// Mock require globally
global.require = mockRequire

beforeEach(() => {
  mockRequire.mockClear()
})
