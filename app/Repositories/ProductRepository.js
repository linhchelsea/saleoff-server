'use strict';

const Product = use('App/Models/Product');
const Database = use('Database');
const SystemException = use('App/Exceptions/SystemException');
class ProductRepository {
  constructor () {
    this.product = Product;
  }

  /**
   * get
   * @return {Promise.<Array>}
   */
  async get () {
    const products = await this.product
      .query()
      .with('category')
      .fetch();
    return products ? products.toJSON() : [];
  }
  /**
   * create
   * @param categoryId
   * @param params
   * @return {Promise.<*>}
   */
  async create (categoryId, params) {
    const db = await Database.beginTransaction();
    try {
      const product = new Product();
      product.name = params.name;
      product.description = params.description;
      product.image = params.image;
      product.category_id = categoryId;
      await product.save();
      db.commit();
      return product;
    } catch (error) {
      db.rollback();
      throw new SystemException();
    }
  }

  /**
   * getProductById
   * @param id
   * @return {Promise.<null>}
   */
  async getProductById(id) {
    const product = await this.product.find(id);
    return product ? product.toJSON() : null;
  }

  /**
   * getProductWithPost
   * @param productId
   * @return {Promise.<null>}
   */
  async getProductWithPost(productId) {
    const product = await this.product
      .query()
      .where('id', productId)
      .with('category')
      .first();
    return product ? product.toJSON() : null;
  }
}

module.exports = ProductRepository;
