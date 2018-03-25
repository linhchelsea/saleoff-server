'use strict';

const ShopFollowRepository = use('App/Repositories/ShopFollowRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
class ShopFollowService {
  constructor () {
    this.shopFollowRepo = new ShopFollowRepository();
    this.shopRepo = new ShopRepository();
  }

  /**
   * follow shop
   * @param shopId
   * @param userId
   * @return {Promise.<*>}
   */
  async followShop(shopId, userId) {
    const follow = await this.shopFollowRepo.followShop(shopId, userId);
    return follow;
  }

  /**
   * unfollow shop
   * @param shopId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async unfollowShop(shopId, userId) {
    const follow = await this.shopFollowRepo.unfollowShop(shopId, userId);
    return follow;
  }


  /**
   * getListFollowSearch
   * @param userId
   * @return {Promise.<Array>}
   */
  async getListFollowSearch(userId) {
    const listShopFollowed = await this.shopFollowRepo.getListFollowByUserId(userId);
    const followedIds = [];
    for (let i = 0; i < listShopFollowed.length; i += 1) {
      followedIds.push(listShopFollowed[i].shop_id);
    }
    console.log(followedIds);
    const shops = await this.shopRepo.findShopsToFollow(userId, followedIds);
    return shops;
  }
}

module.exports = ShopFollowService;
