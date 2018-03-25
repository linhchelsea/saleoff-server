'use strict';

const Controller = use('App/Controllers/Controller');
const CategoryService = use('App/Services/CategoryService');
class CategoryController extends Controller {
  /**
   * constructor
   */
  constructor () {
    super();
    this.catService = new CategoryService();
  }

  /**
   * get list
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async get() {
    const categories = await this.catService.get();
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
    const category = await this.catService.create(params);
    const data = {
      category,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = CategoryController;
