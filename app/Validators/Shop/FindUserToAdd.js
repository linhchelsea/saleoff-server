'use strict';

const Api = use('App/Validators/Api');
const ShopRepository = use('App/Repositories/ShopRepository');
const Config = use('Config');
const { shopNotFound } = Config.get('error');
class FindUserToAdd extends Api {
  constructor() {
    super();
    this.shopRepo = new ShopRepository();
  }
  async authorize () {
    const { shopId } = this.ctx.params;
    const shop = await this.shopRepo.getShopInfo(shopId);
    if (!shop) {
      this.authorizeFails(shopNotFound);
      return false;
    }
    return true;
  }

  get rules () {
    return {
      text: 'required|max:100',
    };
  }

  get messages () {
    return {
      'text.required': 'text_is_required',
      'text.max': 'text_is_too_long',
    };
  }
}

module.exports = FindUserToAdd;
