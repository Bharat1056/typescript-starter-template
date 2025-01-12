class ApiError extends Error {
  statusCode: number;
  data: null;
  success: false;
  errors: any[];

  constructor(
    statusCode: number,
    message: string = "Something Went Wrong",
    errors: any[] = [],
    stack?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
