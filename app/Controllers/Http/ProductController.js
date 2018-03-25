'use strict';

const Controller = use('App/Controllers/Controller');
const ProductService = use('App/Services/ProductService');
class ProductController extends Controller {
  constructor() {
    super();
    this.productService = new ProductService();
  }

  /**
   * get
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async get() {
    const products = await this.productService.getAll();
    const data = {
      products,
    };
    return this.buildSuccess({ data });
  }
  /**
   * create
   * @param request
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async create({ request, params }) {
    const { categoryId } = params;
    const body = request.all();
    const product = await this.productService.create(categoryId, body);
    const data = {
      product,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = ProductController;
