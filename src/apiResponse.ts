
export type ApiSuccess<T> = {
  success: true;
  data: T;
};


export type ApiError = {
  success: false;
  error: string;
};


export type ApiResponse<T> = ApiSuccess<T> | ApiError;


export function createApiResponse<T>(data: T, error?: string): ApiResponse<T> {
  if (error !== undefined && error !== null) {
    return {
      success: false,
      error: error
    };
  } else {
    return {
      success: true, 
      data: data  
    };
  }
}