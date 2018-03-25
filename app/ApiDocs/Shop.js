/**
 * @api {GET} http://localhost:3333/api/v1/shop-cat/get get list
 * @apiName get list
 * @apiGroup Shop Category
 *
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       ""categories": [
 *           {
 *               "id": 1,
 *               "name": "Fashion",
 *               "created_at": "2018-03-17 10:34:15",
 *               "updated_at": "2018-03-17 10:34:15",
 *           },
 *           {
 *               "id": 2,
 *               "name": "Electronic",
 *               "created_at": "2018-03-17 11:08:59",
 *               "updated_at": "2018-03-17 11:08:59",
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */


/**
 * @api {POST} http://localhost:3333/api/v1/shop/create Create new shop
 * @apiName Create new shop
 * @apiGroup Shop
 *
 * @apiParam {Integer} shop_cat_id Shop category Id
 * @apiParam {String} name Shop name
 * @apiParam {String} phone Phone number
 * @apiParam {String} address Shop address
 * @apiParam {URL} avatar Shop avatar
 * @apiParam {URL} cover Shop cover
 * @apiParam {URL} web Website
 * @apiParam {String} description Description
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shop": {
 *           "id": 6,
 *           "owner_id": 1,
 *           "shop_cat_id": 1,
 *           "name": "asdasd",
 *           "address": "sdfsdfsdfsd",
 *           "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *           "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *           "is_active": 0,
 *           "rate": 0,
 *           "created_at": "2018-03-18 11:39:29",
 *           "updated_at": "2018-03-18 11:39:29",
 *           "total_rate": 0,
 *           "category": "Fashion",
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "name_is_required",
 *   "error": 1
 *}
 * @apiError System Error Connection is bad
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "system_error",
 *   "error": 2
 *}
 * @apiError Shop category not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_category_not_found",
 *   "error": 4
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/shop/:shopId/info Get shop detail
 * @apiName Get shop detail
 * @apiGroup Shop
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shop": {
 *           "id": 6,
 *           "owner_id": 1,
 *           "shop_cat_id": 1,
 *           "name": "asdasd",
 *           "address": "sdfsdfsdfsd",
 *           "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *           "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *           "is_active": 0,
 *           "rate": 0,
 *           "created_at": "2018-03-18 11:39:29",
 *           "updated_at": "2018-03-18 11:39:29",
 *           "total_rate": 0,
 *           "category": "Fashion",
 *           "owner": "Tú Đoàn Lê"
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */
/**
 * @api {GET} http://localhost:3333/api/v1/shop/:id/follow Follow shop
 * @apiName Follow shop
 * @apiGroup Shop
 *
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError Shop not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 * @apiError Can not follow your shop
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "cant_follow_your_shop",
 *   "error": 8
 *}
 * @apiError You follwed that shop
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_followed",
 *   "error": 7
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/shop/:id/unfollow Unfollow shop
 * @apiName Unfollow shop
 * @apiGroup Shop
 *
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError Shop not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 * @apiError Can not unfollow your shop
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "cant_unfollow_your_shop",
 *   "error": 10
 *}
 * @apiError You unfollowed that shop
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_unfollowed",
 *   "error": 9
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/shop/follow/search Get list shop to follow
 * @apiName Get list shop to follow
 * @apiGroup Shop
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shops": [
 *           {
 *               "id": 1,
 *               "owner_id": 1,
 *               "shop_cat_id": 1,
 *               "name": "Fm Style",
 *               "phone": "0905246357",
 *               "address": "Le Duan, Da Nang",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "web": null,
 *               "description": "this is description",
 *               "is_active": 0,
 *               "rate": 0,
 *               "total_rate": 0,
 *               "created_at": "2018-03-19 20:48:01",
 *               "updated_at": "2018-03-21 21:38:46",
 *               "follows": 11
 *           },
 *           {
 *               "id": 2,
 *               "owner_id": 2,
 *               "shop_cat_id": 2,
 *               "name": "ABC shop",
 *               "phone": "0905246357",
 *               "address": "Le Duan, Da Nang",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "web": null,
 *               "description": "this is description",
 *               "is_active": 0,
 *               "rate": 0,
 *               "total_rate": 0,
 *               "created_at": "2018-03-19 20:48:01",
 *               "updated_at": "2018-03-21 21:38:46",
 *               "follows": 7
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */

/**
 * @api {GET} http://localhost:3333/api/v1/shop/followed Get list shop followed
 * @apiName Get list shop followed
 * @apiGroup Shop
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shops": [
 *           {
 *               "id": 5,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "123 Shop"
 *           },
 *           {
 *               "id": 4,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "ABC Shop"
 *           },
 *           {
 *               "id": 2,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "AHIHI Shop"
 *           },
 *           {
 *               "id": 1,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "Nice Shop"
 *           },
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */

/**
 * @api {GET} http://localhost:3333/api/v1/shops Get your shops
 * @apiName Get your shops
 * @apiGroup Shop
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shops": [
 *           {
 *               "id": 2,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "69 Shop"
 *           },
 *           {
 *               "id": 4,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "69 Shop"
 *           },
 *           {
 *               "id": 3,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "69 Shop"
 *           },
 *           {
 *               "id": 5,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "69 Shop"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/shops/working Get shops you're working at
 * @apiName Get shops you're working at
 * @apiGroup Shop
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shops": [
 *           {
 *               "id": 2,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "69 Shop"
 *           },
 *           {
 *               "id": 4,
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "name": "69 Shop"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 */
/**
 * @api {POST} http://localhost:3333/api/v1/shop/:id/rate Rate shop
 * @apiName Rate shop
 * @apiGroup Shop
 *
 * @apiParam {Integer} point Point range [1,5]
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError You rated that shop
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_rated",
 *   "error": 16
 *}
 * @apiError You unfollowed that shop
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "point_is_invalid",
 *   "error": 400
 *}
 * @apiError Shop not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 */
