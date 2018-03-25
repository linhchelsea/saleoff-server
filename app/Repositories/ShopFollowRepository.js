'use strict';

const ShopFollow = use('App/Models/ShopFollow');
const Shop = use('App/Models/Shop');
const Database = use('Database');
class ShopFollowRepository {
  constructor () {
    this.shopFollow = ShopFollow;
    this.shop = Shop;
  }

  /**
   * get shopFollow by id
   * @param id
   * @return {Promise.<null>}
   */
  async getShopFollow (userId, shopId) {
    const shopFollow = await this.shopFollow
      .query()
      .where('shop_id', shopId)
      .where('user_id', userId)
      .first();
    return shopFollow ? shopFollow.toJSON() : null;
  }

  /**
   * follow shop
   * @param shopId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async followShop(shopId, userId) {
    const db = await Database.beginTransaction();
    try {
      const shopFollow = new ShopFollow();
      shopFollow.shop_id = shopId;
      shopFollow.user_id = userId;
      await shopFollow.save();
      const shop = await this.shop.find(shopId);
      shop.follows += 1;
      await shop.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * unfollow shop
   * @param shopId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async unfollowShop(shopId, userId) {
    const db = await Database.beginTransaction();
    try {
      const shopFollow = await this.shopFollow
        .query()
        .where('shop_id', shopId)
        .where('user_id', userId)
        .first();
      await shopFollow.delete();
      const shop = await this.shop.find(shopId);
      shop.follows -= 1;
      await shop.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * getListFollowByUserId
   * @param userId
   * @return {Promise.<Array>}
   */
  async getListFollowByUserId(userId) {
    const shops = await this.shopFollow
      .query()
      .where('user_id', userId)
      .fetch();
    return shops ? shops.toJSON() : [];
  }
}

module.exports = ShopFollowRepository;
