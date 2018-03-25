'use strict';

const Api = use('App/Validators/Api');
const ShopRepository = use('App/Repositories/ShopRepository');
const Config = use('Config');
const { shopNotFound, shopRated, CantRateYourShop } = Config.get('error');
class Follow extends Api {
  constructor() {
    super();
    this.shopRepo = new ShopRepository();
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
        this.authorizeFails(CantRateYourShop);
        return false;
      }
      const shopUser = await this.shopRepo.getShopRate(user.id, id);
      if (shopUser) {
        this.authorizeFails(shopRated);
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  get rules () {
    return {
      point: 'required|integer|range:1,5',
    };
  }

  get messages () {
    return {
      'point.required': 'point_is_required',
      'point.integer': 'point_is_invalid',
      'point.range': 'point_is_invalid',
    };
  }
}

module.exports = Follow;
