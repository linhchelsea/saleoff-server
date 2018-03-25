class Controller {
  /**
   * Request success
   * @param options
   * @return {{status: number, data: *, message: *, error: number}}
   */

  buildSuccess(options) {
    const status = 200;
    const error = 0;
    let { data, message } = options;
    data = data || null;
    message = message || 'success';
    return {
      status,
      data,
      message,
      error,
    };
  }

  /**
   * Created success
   * @param response
   * @param options
   * @return {{status: number, data: *, message: *, error: number}}
   */

  createdSuccess(response, options) {
    const status = 201;
    const error = 0;
    let { data, message } = options;
    data = data || null;
    message = message || 'success';
    return response.status(status).send({
      status,
      data,
      message,
      error,
    });
  }

  /**
   * invailid Response;
   * @param response
   * @param options
   * @return {{status: *, data: *, message: *, error: *}}
   */

  invalidResponse(response, options) {
    let {
      status,
      data,
      message,
      error,
    } = options;
    status = status || 400;
    data = data || null;
    message = message || 'error';
    error = error || 400;
    return response.status(status).send({
      status,
      data,
      message,
      error,
    });
  }

  /**
   * error response
   * @param response
   * @param options
   * @return {{status: *, data: *, message: *, error: *}}
   */

  errorResponse(response, options) {
    let {
      status,
      data,
      message,
      error,
    } = options;
    status = status || 400;
    data = data || null;
    message = message || 'BAD_REQUEST';
    error = error || 400;
    return response.status(status).send({
      status,
      data,
      message,
      error,
    });
  }

  /**
   * Not found response
   * @param response
   * @param options
   * @return {{status: *, data: *, message: *, error: *}}
   */

  notfoundResponse(response, options) {
    let {
      status,
      data,
      message,
      error,
    } = options;
    status = status || 404;
    data = data || null;
    message = message || 'NOT_FOUND';
    error = error || 404;
    return response.status(status).send({
      status,
      data,
      message,
      error,
    });
  }

  /**
   * Method not allow response
   * @param response
   * @param options
   * @return {{status: *, data: *, message: *, error: *}}
   */

  methodNotAllowResponse(response, options) {
    let {
      status,
      data,
      message,
      error,
    } = options;
    status = status || 405;
    data = data || null;
    message = message || 'METHOD_NOT_ALLOWED';
    error = error || 405;
    return response.status(status).send({
      status,
      data,
      message,
      error,
    });
  }

  /**
   * Internal server error response
   * @param options
   * @return {{status: *, data: *, message: *, error: *}}
   */

  internalServerErrorResponse(options) {
    let {
      status,
      data,
      message,
      error,
    } = options;
    status = 500;
    data = data || null;
    message = message || 'INTERNAL_SERVER_ERROR';
    error = 500;
    return {
      status,
      data,
      message,
      error,
    };
  }
}
module.exports = Controller;
