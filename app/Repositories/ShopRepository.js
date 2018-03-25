'use strict';

const Shop = use('App/Models/Shop');
const Database = use('Database');
const SystemException = use('App/Exceptions/SystemException');
const UserRateShop = use('App/Models/UserRateShop');
const shopFollowed = [
  'shops.id',
  'shops.avatar',
  'shops.name',
];

const shopSelected = [
  'shops.id',
  'shops.avatar',
  'shops.name',
];
class ShopRepository {
  constructor() {
    this.shop = Shop;
    this.userRateShop = UserRateShop;
  }

  /**
   * create new shop
   * @param userId
   * @param params
   * @return {Promise.<*>}
   */
  async createShop(userId, params) {
    const db = await Database.beginTransaction();
    try {
      const shop = new Shop();
      shop.owner_id = +userId;
      shop.shop_cat_id = +params.shop_cat_id;
      shop.name = params.name;
      shop.phone = params.phone;
      shop.address = params.address;
      shop.avatar = params.avatar || null;
      shop.cover = params.cover || null;
      shop.web = params.web || null;
      shop.description = params.description;
      await shop.save();
      await shop.reload();
      return shop;
    } catch (err) {
      db.rollback();
      throw new SystemException();
    }
  }

  /**
   * get shop info
   * @param id
   * @return {Promise.<null>}
   */
  async getShopInfo(id) {
    const shop = await this.shop.find(id);
    return shop ? shop.toJSON() : null;
  }

  /**
   * find shops to follow
   * @param userId
   * @param listShopIds
   * @return {Promise.<Array>}
   */
  async findShopsToFollow(userId, listShopIds) {
    const shops = await this.shop
      .query()
      .whereNot('owner_id', userId)
      .whereNotIn('id', listShopIds)
      .orderBy('follows', 'desc')
      .fetch();
    return shops ? shops.toJSON() : [];
  }

  /**
   * getListShopFollowed
   * @param userId
   * @return {Promise.<Array>}
   */
  async getListShopFollowed(userId) {
    const shops = await this.shop
      .query()
      .innerJoin('shop_follows', 'shops.id', 'shop_follows.shop_id')
      .where('shop_follows.user_id', userId)
      .orderBy('shop_follows.created_at', 'desc')
      .select(shopFollowed)
      .fetch();
    return shops ? shops.toJSON() : [];
  }

  /**
   * getYourShops
   * @param userId
   * @return {Promise.<Array>}
   */
  async getYourShops(userId) {
    const shops = await this.shop
      .query()
      .where('owner_id', userId)
      .orderBy('follows', 'desc')
      .select(shopSelected)
      .fetch();
    return shops ? shops.toJSON() : [];
  }

  /**
   * getYourShopsWorking
   * @param userId
   * @return {Promise.<Array>}
   */
  async getYourShopsWorking(userId) {
    const shops = await this.shop
      .query()
      .innerJoin('shop_users', 'shops.id', 'shop_users.shop_id')
      .where('shop_users.user_id', userId)
      .select(shopSelected)
      .fetch();
    return shops ? shops.toJSON() : [];
  }

  /**
   * rateShop
   * @param shopId
   * @param userId
   * @param point
   * @return {Promise.<boolean>}
   */
  async rateShop(shopId, userId, point) {
    const db = await Database.beginTransaction();
    try {
      const userRateShop = new UserRateShop();
      userRateShop.user_id = userId;
      userRateShop.shop_id = shopId;
      userRateShop.rate = point;
      await userRateShop.save();
      // increase total rate
      const shop = await this.shop.find(shopId);
      shop.total_rate += 1;
      // recalculate rate
      const total = await this.userRateShop
        .query()
        .sum('rate as total');
      shop.rate = total[0].total / shop.total_rate;
      await shop.save();
      db.commit();
      return true;
    } catch (err) {
      console.log(err);
      db.rollback();
      return false;
    }
  }

  /**
   * getShopRate
   * @param userId
   * @param shopId
   * @return {Promise.<null>}
   */
  async getShopRate(userId, shopId) {
    const shop = await this.userRateShop
      .query()
      .where('shop_id', shopId)
      .where('user_id', userId)
      .first();
    return shop ? shop.toJSON() : null;
  }

  /**
   * getShopWithPost
   * @param shopId
   * @return {Promise.<null>}
   */
  async getShopWithPost(shopId) {
    const shop = await this.shop
      .query()
      .where('id', shopId)
      .select(['id', 'name', 'avatar'])
      .first();
    return shop ? shop.toJSON() : null;
  }
}

module.exports = ShopRepository;
