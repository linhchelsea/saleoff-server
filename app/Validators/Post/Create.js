'use strict';

const Api = use('App/Validators/Api');
const ProductRepository = use('App/Repositories/ProductRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const ShopUserRepository = use('App/Repositories/ShopUserRepository');
const Config = use('Config');
const { shopNotFound, productNotFound,
  imagesTooLong, notShopMember } = Config.get('error');
class Create extends Api {
  constructor() {
    super();
    this.productRepo = new ProductRepository();
    this.shopRepo = new ShopRepository();
    this.shopUserRepo = new ShopUserRepository();
  }
  async authorize() {
    const data = this.ctx.request.only([
      'images', 'product_id', 'shop_id',
    ]);
    if (data.images.length > 5) {
      this.authorizeFails(imagesTooLong);
      return false;
    }
    if (data.product_id) {
      const product = await this.productRepo.getProductById(data.product_id);
      if (!product) {
        this.authorizeFails(productNotFound);
        return false;
      }
    }
    if (data.shop_id) {
      const user = await this.ctx.auth.getUser();
      const shop = await this.shopRepo.getShopInfo(data.shop_id);
      if (!shop) {
        this.authorizeFails(shopNotFound);
        return false;
      }
      const shopUser = await this.shopUserRepo.getShopUser(shop.id, user.id);
      if (shop.owner_id !== user.id && !shopUser) {
        this.authorizeFails(notShopMember);
        return false;
      }
    }
    return true;
  }

  get rules () {
    return {
      title: 'required|min:6|max:255',
      description: 'required|min:6',
      sale_percent: 'required|integer|range:0,100',
      cover: 'required|url',
      images: 'required|array',
      start_date: 'required|date',
      end_date: 'required|date',
      address: 'required|min:6',
      product_id: 'number',
      shop_id: 'number',
    };
  }

  get messages () {
    return {
      'title.required': 'title_is_required',
      'title.min': 'title_is_too_short',
      'title.max': 'title_is_too_long',
      'description.required': 'description_is_required',
      'description.min': 'description_is_too_short',
      'sale_percent.required': 'sale_percent_is_required',
      'sale_percent.integer': 'sale_percent_is_invalid',
      'sale_percent.range': 'sale_percent_is_invalid',
      'cover.required': 'cover_is_required',
      'cover.url': 'cover_is_not_url',
      'images.required': 'images_is_required',
      'images.array': 'images_is_not_array',
      'start_date.required': 'start_date_is_required',
      'start_date.date': 'start_date_is_invalid',
      'end_date.required': 'end_date_is_required',
      'end_date.date': 'end_date_is_invalid',
      'address.required': 'address_is_required',
      'address.min': 'address_is_too_short',
      'product_id.number': 'product_id_is_invalid',
      'shop_id.number': 'shop_id_is_invalid',
    };
  }
}

module.exports = Create;
