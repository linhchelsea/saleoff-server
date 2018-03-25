'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const system = Config.get('error.system');
class SystemException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: system.message,
      error: system.error,
    });
  }
}

module.exports = SystemException;
