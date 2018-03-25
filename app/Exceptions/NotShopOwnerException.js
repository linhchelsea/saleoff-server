'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const shopOwner = Config.get('error.shopOwner');
class ShopNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: shopOwner.message,
      error: shopOwner.error,
    });
  }
}

module.exports = ShopNotFoundException;
