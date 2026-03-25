import axios from 'axios';
import ApiError from './apiError';

interface ApiErrorResponse {
  message?: string;
  errorCode?: number;
  fields?: string[];
}

const apiErrorCatchHandler = (error: unknown): never => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    console.error(`status: ${error.status}`, error.response);

    throw new ApiError(error.response?.data?.message || error.message || 'Unknown error', {
      errorCode: error.response?.data?.errorCode,
      fields: error.response?.data?.fields,
    });
  }

  if (error instanceof Error) {
    throw error;
  }

  throw new ApiError('Unknown error');
};

export default apiErrorCatchHandler;
