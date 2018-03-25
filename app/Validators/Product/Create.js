'use strict';

const Api = use('App/Validators/Api');
const CategoryRepository = use('App/Repositories/CategoryRepository');
const Config = use('Config');
const categoryNotFound = Config.get('error.categoryNotFound');
class Create extends Api {
  constructor() {
    super();
    this.catRepo = new CategoryRepository();
  }
  async authorize () {
    const { categoryId } = this.ctx.params;
    const category = await this.catRepo.getCategoryById(categoryId);
    if (!category) {
      this.authorizeFails(categoryNotFound);
      return false;
    }
    return true;
  }


  get rules () {
    return {
      name: 'required|max:100',
      description: 'required|min:6',
      image: 'required|url',
    };
  }

  get messages () {
    return {
      'name.required': 'name_is_required',
      'name.max': 'name_is_too_long',
      'description.required': 'description_is_required',
      'description.min': 'description_is_too_short',
      'image.required': 'image_is_required',
      'image.url': 'image_is_not_url',
    };
  }
}

module.exports = Create;
