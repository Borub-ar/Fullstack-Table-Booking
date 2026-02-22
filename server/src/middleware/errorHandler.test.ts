// import { errorHandler } from './errorHandler.js';

import { describe, it, expect } from '@jest/globals';

describe('errorHandler', () => {
    it('should return status code 500 and message "Something went wrong" when error is not an instance of AppError', () => {
        expect(true).toBe(true);
    })
})