'use strict';

const ShopRepository = use('App/Repositories/ShopRepository');
const ShopCategoryRepository = use('App/Repositories/ShopCategoryRepository');
const ShopUserRepository = use('App/Repositories/ShopUserRepository');
const UserRepository = use('App/Repositories/UserRepository');
const ShopCategoryNotFoundException = use('App/Exceptions/ShopCategoryNotFoundException');
const ShopNotFoundException = use('App/Exceptions/ShopNotFoundException');
class ShopService {
  constructor () {
    this.shopRepo = new ShopRepository();
    this.shopCatRepo = new ShopCategoryRepository();
    this.userRepo = new UserRepository();
    this.shopUserRepo = new ShopUserRepository();
  }

  /**
   * create new shop
   * @param userId
   * @param params
   * @return {Promise.<*>}
   */
  async createShop (userId, params) {
    const shopCategory = await this.shopCatRepo.getById(params.shop_cat_id);
    if (!shopCategory) {
      throw new ShopCategoryNotFoundException();
    }
    const shop = await this.shopRepo.createShop(userId, params);
    shop.category = shopCategory.name;
    return shop;
  }

  /**
   * getShopInfo
   * @param id
   * @return {Promise.<*>}
   */
  async getShopInfo(id) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const category = await this.shopCatRepo.getById(shop.shop_cat_id);
    shop.category = category.name;
    const user = await this.userRepo.getUserById(shop.owner_id);
    shop.owner = user.username;
    return shop;
  }

  /**
   * getShopInfo
   * @param id
   * @return {Promise.<*>}
   */
  async getYourShopInfo(id) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const category = await this.shopCatRepo.getById(shop.shop_cat_id);
    shop.category = category.name;
    const user = await this.userRepo.getUserById(shop.owner_id);
    shop.owner = user.username;
    const employee = await this.shopUserRepo.getEmployee(id);
    shop.employee = employee;
    return shop;
  }

  /**
   * add employee
   * @param shopId
   * @param ids
   * @return {Promise.<void>}
   */
  async addEmployee(shopId, ids) {
    const shop = await this.shopRepo.shop.findOrFail(shopId);
    for (let i = 0; i < ids.length; i += 1) {
      try {
        if (shop.owner_id !== ids[i]) {
          await shop.users().attach(ids[i]);
        }
      } catch (err) {
        console.log('user add');
      }
    }
  }

  /**
   * get employee
   * @param shopId
   * @return {Promise.<*>}
   */
  async getEmployee(shopId) {
    const users = await this.shopUserRepo.getEmployee(shopId);
    return users;
  }

  /**
   * find user to add
   * @param shopId
   * @param text
   * @return {Promise.<*>}
   */
  async findUserToAdd(shopId, text) {
    const employee = await this.shopUserRepo.getEmployee(shopId);
    const ids = [];
    for (let i = 0; i < employee.length; i += 1) {
      ids.push(employee[i].id);
    }
    const users = await this.userRepo.findUserToAdd(ids, text);
    return users;
  }

  /**
   * getListShopFollowed
   * @param userId
   * @return {Promise.<*>}
   */
  async getListShopFollowed(userId) {
    const shops = await this.shopRepo.getListShopFollowed(userId);
    return shops;
  }

  /**
   * getYourShops
   * @param userId
   * @return {Promise.<Array>}
   */
  async getYourShops(userId) {
    const shops = await this.shopRepo.getYourShops(userId);
    return shops;
  }

  /**
   * getYourShopsWorking
   * @param userId
   * @return {Promise.<Array>}
   */
  async getYourShopsWorking(userId) {
    const shops = await this.shopRepo.getYourShopsWorking(userId);
    return shops;
  }

  /**
   * rateShop
   * @param shopId
   * @param userId
   * @param point
   * @return {Promise.<boolean>}
   */
  async rateShop(shopId, userId, point) {
    const isRate = await this.shopRepo.rateShop(shopId, userId, point);
    return isRate;
  }
}

module.exports = ShopService;
