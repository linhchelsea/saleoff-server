'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const auth = Config.get('error.auth');
class PasswordIncorrectException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: auth.message,
      error: auth.error,
    });
  }
}

module.exports = PasswordIncorrectException;
