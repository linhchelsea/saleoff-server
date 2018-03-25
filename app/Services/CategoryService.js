'use strict';

const CategoryRepository = use('App/Repositories/CategoryRepository');
class CategoryService {
  constructor() {
    this.catRepo = new CategoryRepository();
  }

  /**
   * get
   * @return {Promise.<Array>}
   */
  async get() {
    const categories = await this.catRepo.get();
    return categories;
  }
  /**
   * create
   * @param params
   * @return {Promise.<*>}
   */
  async create(params) {
    const category = await this.catRepo.create(params);
    return category;
  }
}

module.exports = CategoryService;
