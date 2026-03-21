import { cleanup } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('Require Auth', () => {
  it('renders Outlet when user is authenticated');
  it('redirects to auth/login when user is not authenticated');
  it('throws an error when used outside AccessContext');
  it('renders protected nested route content for authenticated user');
  it('replaces history entry when redirecting unauthenticated user');
});
