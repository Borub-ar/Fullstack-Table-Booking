import type { Request, Response, NextFunction } from 'express';

import AppError from '../AppError.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ message: error.message, fields: error.fields, errorCode: error.errorCode, success: false });
  }

  return res.status(500).json({ message: error.message || 'Something went wrong', success: false });
};
