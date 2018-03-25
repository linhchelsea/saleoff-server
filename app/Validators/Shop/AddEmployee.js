'use strict';

const Api = use('App/Validators/Api');
const ShopRepository = use('App/Repositories/ShopRepository');
const Config = use('Config');
const { shopNotFound, shopOwner, userInvalid } = Config.get('error');
class AddEmployee extends Api {
  constructor () {
    super();
    this.shopRepo = new ShopRepository();
  }

  async authorize () {
    const user = await this.ctx.auth.getUser();
    const { shopId } = this.ctx.params;
    const shop = await this.shopRepo.getShopInfo(shopId);
    if (!shop) {
      this.authorizeFails(shopNotFound);
      return false;
    }
    if (shop.owner_id !== user.id) {
      this.authorizeFails(shopOwner);
      return false;
    }
    const { ids } = this.ctx.request.all();
    for (let i = 0; i < ids.length; i += 1) {
      if (!Number.isInteger(ids[i])) {
        this.authorizeFails(userInvalid);
        return false;
      }
    }
    return true;
  }
  get rules () {
    return {
      ids: 'required|array',
    };
  }

  get messages () {
    return {
      'ids.required': 'ids_is_required',
      'ids.array': 'ids_is_not_array',
    };
  }
}

module.exports = AddEmployee;
