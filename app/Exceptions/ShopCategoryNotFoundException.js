'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const shopCatNotFound = Config.get('error.shopCatNotFound');
class ShopCategoryNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: shopCatNotFound.message,
      error: shopCatNotFound.error,
    });
  }
}

module.exports = ShopCategoryNotFoundException;
