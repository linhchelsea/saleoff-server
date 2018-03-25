'use strict';

const Controller = use('App/Controllers/Controller');
const ShopCategoryService = use('App/Services/ShopCategoryService');
class ShopCategoryController extends Controller {
  /**
   * constructor
   */
  constructor () {
    super();
    this.shopCatService = new ShopCategoryService();
  }

  /**
   * get list
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async get() {
    const categories = await this.shopCatService.get();
    const data = {
      categories,
    };
    return this.buildSuccess({ data });
  }

  /**
   * create
   * @param request
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async create({ request }) {
    const params = request.only([
      'name',
    ]);
    const category = await this.shopCatService.create(params);
    const data = {
      category,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = ShopCategoryController;
