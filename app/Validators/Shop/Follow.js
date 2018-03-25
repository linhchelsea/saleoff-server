'use strict';

const Api = use('App/Validators/Api');
const ShopRepository = use('App/Repositories/ShopRepository');
const ShopFollowRepository = use('App/Repositories/ShopFollowRepository');
const Config = use('Config');
const { shopNotFound, shopFollowed, CantFollowYourShop } = Config.get('error');
class Follow extends Api {
  constructor() {
    super();
    this.shopRepo = new ShopRepository();
    this.shopFollowRepo = new ShopFollowRepository();
  }
  async authorize () {
    try {
      const { id } = this.ctx.params;
      const user = await this.ctx.auth.getUser();
      const shop = await this.shopRepo.getShopInfo(id);
      if (!shop) {
        this.authorizeFails(shopNotFound);
        return false;
      }
      if (shop.owner_id === user.id) {
        this.authorizeFails(CantFollowYourShop);
        return false;
      }
      const shopUser = await this.shopFollowRepo.getShopFollow(user.id, id);
      if (shopUser) {
        this.authorizeFails(shopFollowed);
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Follow;
