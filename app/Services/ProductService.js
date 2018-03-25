'use strict';

const ProductRepository = use('App/Repositories/ProductRepository');
class ProductService {
  constructor() {
    this.productRepo = new ProductRepository();
  }

  /**
   * get all
   * @return {Promise.<Array>}
   */
  async getAll() {
    const products = await this.productRepo.get();
    return products;
  }
  /**
   * create
   * @param categoryId
   * @param params
   * @return {Promise.<*>}
   */
  async create(categoryId, params) {
    const product = await this.productRepo.create(categoryId, params);
    return product;
  }
}

module.exports = ProductService;
