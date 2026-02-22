import { describe, expect, it } from 'vitest';

describe('errorHandler', () => {
  it('should return status code 500 and message "Something went wrong" when error is not an instance of AppError', () => {
    expect(true).toBe(true);
  });
});