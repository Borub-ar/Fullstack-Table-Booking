import axios from 'axios';
import ApiError from '../api/apiError';

const apiErrorCatchHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(`status: ${error.status}`, error.response);
    throw error;
  }

  if (error instanceof Error) {
    throw error;
  }

  throw new ApiError('Unknown error');
};

export default apiErrorCatchHandler;
