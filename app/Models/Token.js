'use strict';

const Model = use('Model');

class Token extends Model {
  static get table() {
    return 'tokens';
  }
}

module.exports = Token;
