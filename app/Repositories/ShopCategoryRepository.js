'use strict';

const ShopCategory = use('App/Models/ShopCategory');
const Database = use('Database');
const SystemException = use('App/Exceptions/SystemException');
class ShopCategoryRepository {
  constructor () {
    this.shopCat = ShopCategory;
  }

  /**
   * get
   * @return {Promise.<Array>}
   */
  async get () {
    const categories = await this.shopCat.all();
    return categories ? categories.toJSON() : [];
  }
  /**
   * create
   * @param params
   * @return {Promise.<*>}
   */
  async create (params) {
    const db = await Database.beginTransaction();
    try {
      const category = new ShopCategory();
      category.name = params.name;
      await category.save();
      db.commit();
      return category;
    } catch (error) {
      db.rollback();
      throw new SystemException();
    }
  }

  /**
   * get category by id
   * @param id
   * @return {Promise.<Object>}
   */
  async getById(id) {
    const category = await this.shopCat.find(id);
    return category ? category.toJSON() : null;
  }
}

module.exports = ShopCategoryRepository;
