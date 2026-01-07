export type ApiSuccess<T> = {
    success: true;
    data: T;
  };
  
  export type ApiError = {
    success: false;
    error: string;
  };
  
  export type ApiResponse<T> = ApiSuccess<T> | ApiError;
  
  export function createApiResponse<T>(
    data: T,
    error?: string
  ): ApiResponse<T> {
    if (error) {
      return { success: false, error };
    }
  
    return { success: true, data };
  }
  