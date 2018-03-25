'use strict';

const ShopCategoryRepository = use('App/Repositories/ShopCategoryRepository');
class ShopCategoryService {
  constructor() {
    this.shopCatRepo = new ShopCategoryRepository();
  }

  /**
   * get
   * @return {Promise.<Array>}
   */
  async get() {
    const categories = await this.shopCatRepo.get();
    return categories;
  }
  /**
   * create
   * @param params
   * @return {Promise.<*>}
   */
  async create(params) {
    const category = await this.shopCatRepo.create(params);
    return category;
  }
}

module.exports = ShopCategoryService;
