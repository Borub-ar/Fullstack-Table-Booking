class ApiError extends Error {
  errorCode?: number;
  fields?: string[];
  
  constructor(message: string, options?: { errorCode?: number; fields?: string[] }) {
    super(message);
    this.name = 'ApiError';
    this.errorCode = options?.errorCode;
    this.fields = options?.fields;
  }
}

export default ApiError;
