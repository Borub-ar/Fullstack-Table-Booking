import axios from 'axios';
import ApiError from './apiError';

const apiErrorCatchHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(`status: ${error.status}`, error.response);
    throw new Error(error.response?.data.message);
  }

  if (error instanceof Error) {
    throw error;
  }

  throw new ApiError('Unknown error');
};

export default apiErrorCatchHandler;
