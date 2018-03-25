'use strict';

const Api = use('App/Validators/Api');
const ShopRepository = use('App/Repositories/ShopRepository');
const Config = use('Config');
const { shopNotFound, shopOwner } = Config.get('error');
class Info extends Api {
  constructor() {
    super();
    this.shopRepo = new ShopRepository();
  }
  async authorize () {
    const { shopId } = this.ctx.params;
    const user = await this.ctx.auth.getUser();
    const shop = await this.shopRepo.getShopInfo(shopId);
    if (!shop) {
      this.authorizeFails(shopNotFound);
      return false;
    }
    if (shop.owner_id !== user.id) {
      this.authorizeFails(shopOwner);
      return false;
    }
    return true;
  }
}

module.exports = Info;
