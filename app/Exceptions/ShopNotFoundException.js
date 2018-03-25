'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const shopNotFound = Config.get('error.shopNotFound');
class ShopNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: shopNotFound.message,
      error: shopNotFound.error,
    });
  }
}

module.exports = ShopNotFoundException;
