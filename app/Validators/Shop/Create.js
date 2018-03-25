'use strict';

const Api = use('App/Validators/Api');
class Create extends Api {
  get rules () {
    return {
      shop_cat_id: 'required|number',
      name: 'required|max:100',
      phone: 'required|max:20|alpha_numeric',
      address: 'required',
      avatar: 'url',
      cover: 'url',
      web: 'url',
      description: 'required',
    };
  }

  get messages () {
    return {
      'shop_cat_id.required': 'shop_category_is_required',
      'shop_cat_id.number': 'shop_category_is_not_number',
      'name.required': 'name_required',
      'name.max': 'name_is_too_long',
      'phone.required': 'phone_is_required',
      'phone.max': 'phone_is_invalid',
      'phone.alpha_numeric': 'phone_is_invalid',
      'address.required': 'address_is_required',
      'description.required': 'description_is_required',
      'avatar.url': 'avatar_is_not_url',
      'cover.url': 'cover_is_not_url',
      'web.url': 'web_is_not_url',
    };
  }
}

module.exports = Create;
