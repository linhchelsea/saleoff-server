'use strict';

class Api {
  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
      status: 400,
      data: null,
      message: errorMessages[0].message,
      error: 400,
    });
  }

  authorizeFails(errorMessages) {
    return this.ctx.response.status(401).send({
      status: 401,
      data: null,
      message: errorMessages.message,
      error: errorMessages.error,
    });
  }
}

module.exports = Api;
