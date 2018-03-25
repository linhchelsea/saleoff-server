'use strict';

const Controller = use('App/Controllers/Controller');
const ShopService = use('App/Services/ShopService');
class ShopUserController extends Controller {
  constructor () {
    super();
    this.shopService = new ShopService();
  }

  /**
   * add employee
   * @param request
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async addEmployee({ request, params }) {
    try {
      const { ids } = request.all();
      const { shopId } = params;
      await this.shopService.addEmployee(shopId, ids);
      return this.buildSuccess({});
    } catch (err) {
      return this.errorResponse({});
    }
  }

  /**
   * get employee
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getEmployee({ params }) {
    const { shopId } = params;
    const users = await this.shopService.getEmployee(shopId);
    const data = {
      users,
    };
    return this.buildSuccess({ data });
  }

  /**
   * find user to add
   * @param request
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async findUserToAdd({ request, params }) {
    const { shopId } = params;
    const { text } = request.only(['text']);
    const users = await this.shopService.findUserToAdd(shopId, text);
    const data = {
      users,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = ShopUserController;
