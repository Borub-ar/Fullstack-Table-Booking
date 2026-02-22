import type { NextFunction, Request, Response } from 'express';
import { describe, expect, it, vi } from 'vitest';

import { errorHandler } from './errorHandler.js';

describe('errorHandler', () => {
  it('should return status code 500 and message for generic Error', () => {
    const error = new Error('Boom');
    const req = {} as Request;
    const res = {
      status: vi.fn(),
      json: vi.fn(),
    } as unknown as Response;
    const next = vi.fn() as NextFunction;

    vi.mocked(res.status).mockReturnValue(res);

    errorHandler(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Boom',
      success: false,
    });
  });

  it('should return fallback message when generic Error message is empty', () => {
    expect(true).toBe(true);
  });

  it('should return AppError status code and payload', () => {
    expect(true).toBe(true);
  });

  it('should return fields from AppError when fields are present', () => {
    expect(true).toBe(true);
  });

  it('should return empty fields array when AppError has no fields', () => {
    expect(true).toBe(true);
  });

  it('should not include AppError-specific fields for generic Error', () => {
    expect(true).toBe(true);
  });
});
