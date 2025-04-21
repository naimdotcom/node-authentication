class ApiResponse {
  constructor(
    status = 200, // ?note: by default status code is 200, you can update it as per your need
    message = "Success",
    data = null
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

class ApiError {
  constructor(status, message = "API Error", data = [], error = null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}

module.exports = { ApiResponse, ApiError };
