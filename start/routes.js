'use strict';

const Route = use('Route');
const apiPrefix = '/api/v1';
Route.on('/').render('welcome');

Route.group(() => {
  Route.post('/login', 'AuthController.login')
    .validator('Auth/Login');
})
  .prefix(apiPrefix);
Route.group(() => {
  /**
   * ============================================================
   *                           User routes                      *
   * ============================================================
   */
  Route.get('/user/profile', 'UserController.getProfile');
  Route.get('/user/:id', 'UserController.getUser');
  Route.get('/user/:id/follow', 'UserController.followUser')
    .as('user.follow').validator('User/Follow');
  Route.get('/user/:id/unfollow', 'UserController.unfollowUser')
    .as('user.unfollow').validator('User/Unfollow');
  Route.get('/user-followed', 'UserController.getListUserFollowed')
    .as('user.followed');
  Route.get('/user/follow/search', 'UserController.getListUserToFollow')
    .as('user.to-follow');


  Route.put('user/update-profile', 'UserController.postUpdateProfile')
    .validator('User/UpdateProfile');
  /**
   * ============================================================
   *                      Category routes                       *
   * ============================================================
   */
  Route.get('/category/get', 'CategoryController.get')
    .as('category.get');


  Route.post('/category/create', 'CategoryController.create')
    .as('category.create').validator('Category/Create');

  /**
   * ============================================================
   *                       Product routes                       *
   * ============================================================
   */
  Route.get('product/get', 'ProductController.get')
    .as('product.get');


  Route.post('/product/create/:categoryId', 'ProductController.create')
    .as('product.create').validator('Product/Create');

  /**
   * ============================================================
   *                    ShopCategory routes                     *
   * ============================================================
   */
  Route.get('/shop-cat/get', 'ShopCategoryController.get')
    .as('shop-cat.get');


  Route.post('/shop-cat/create', 'ShopCategoryController.create')
    .as('shop-cat.create').validator('ShopCategory/Create');

  /**
   * ============================================================
   *                          Shop routes                       *
   * ============================================================
   */
  Route.get('/shop/:shopId/info', 'ShopController.getShopInfo')
    .as('shop.info');
  Route.get('/shops', 'ShopController.getYourShops')
    .as('shop.yours');
  Route.get('/shops/working', 'ShopController.getYourShopsWorking')
    .as('shop.working');
  Route.get('/your-shop/:shopId/info', 'ShopController.getYourShopInfo')
    .as('shop.info').validator('Shop/Info');
  Route.get('/shop/:id/follow', 'ShopController.followShop')
    .as('shop.follow').validator('Shop/Follow');
  Route.get('/shop/:id/unfollow', 'ShopController.unfollowShop')
    .as('shop.unfollow').validator('Shop/Unfollow');
  Route.get('shop/follow/search', 'ShopController.getListFollowSearch')
    .as('shop.follow_search');
  Route.get('shop/followed', 'ShopController.getListShopFollowed')
    .as('shop.followed');


  Route.post('/shop/create', 'ShopController.create')
    .as('shop.create').validator('Shop/Create');
  Route.post('/shop/:id/rate', 'ShopController.rate')
    .as('shop.create').validator('Shop/Rate');
  /**
   * ============================================================
   *                      Shop Employee routes                  *
   * ============================================================
   */
  Route.get('shop/:shopId/employee', 'ShopUserController.getEmployee')
    .as('employee.add').validator('Shop/Info');


  Route.post('shop/:shopId/add-employee', 'ShopUserController.addEmployee')
    .as('employee.add').validator('Shop/AddEmployee');
  Route.post('shop/:shopId/employee/find', 'ShopUserController.findUserToAdd')
    .as('employee.find').validator('Shop/FindUserToAdd');

  /**
   * ============================================================
   *                           Post routes                      *
   * ============================================================
   */
  Route.get('post/:id/get', 'PostController.getPost')
    .as('post.get');
  Route.get('post/:id/like', 'PostController.getLikePost')
    .as('post.like').validator('Post/Like');
  Route.get('post/:id/unlike', 'PostController.getUnlikePost')
    .as('post.unlike').validator('Post/Unlike');


  Route.post('post/create', 'PostController.create')
    .as('post.create').validator('Post/Create');

  /**
   * ============================================================
   *                        Comment routes                      *
   * ============================================================
   */
  Route.post('post/comment/:postId/add', 'CommentController.addComment')
    .as('comment.add').validator('Comment/Create');

  Route.put('post/comment/:id/edit', 'CommentController.editComment')
    .as('comment.edit').validator('Comment/Edit');
})
  .prefix(apiPrefix)
  .middleware('authenticator');
