'use strict';

const Api = use('App/Validators/Api');

class Create extends Api {
  get rules () {
    return {
      name: 'required|max:100',
    };
  }

  get messages () {
    return {
      'name.required': 'name_is_required',
      'name.max': 'name_is_too_long',
    };
  }
}

module.exports = Create;
