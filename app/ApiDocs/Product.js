/**
 * @api {GET} http://localhost:3333/api/v1/product/get Get all products
 * @apiName Get all products
 * @apiGroup Product
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
 *       "products": [
 *           {
 *               "id": 2,
 *               "name": "Samsung",
 *               "description": "Ti vi samsung ahihi",
 *               "image": "https://www.facebook.com/profile.php?id=100008033802330",
 *               "is_active": null,
 *               "category_id": 2,
 *               "created_at": "2018-03-17 13:17:31",
 *               "updated_at": "2018-03-17 13:17:31",
 *               "category": {
 *                   "id": 2,
 *                   "name": "television",
 *                   "created_at": "2018-03-17 11:08:59",
 *                   "updated_at": "2018-03-17 11:08:59"
 *               }
 *           },
 *           {
 *               "id": 3,
 *               "name": "Gongcha",
 *               "description": "Gongcha ahihi",
 *               "image": "https://www.facebook.com/profile.php?id=100008033802330",
 *               "is_active": null,
 *               "category_id": 1,
 *               "created_at": "2018-03-17 13:54:41",
 *               "updated_at": "2018-03-17 13:54:41",
 *               "category": {
 *                   "id": 1,
 *                   "name": "milk tea",
 *                   "created_at": "2018-03-17 10:34:15",
 *                   "updated_at": "2018-03-17 10:34:15"
 *               }
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */


/**
 * @api {POST} http://localhost:3333/api/v1/product/create/:categoryId Create new product
 * @apiName Create new product
 * @apiGroup Product
 *
 * @apiParam {String} name Product name
 * @apiParam {String} description description
 * @apiParam {String} image link image
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "product": {
 *           "name": "Samsung",
 *           "description": "Ti vi samsung ahihi",
 *           "image": "https://www.facebook.com/profile.php?id=100008033802330",
 *           "category_id": "2",
 *           "created_at": "2018-03-17 13:17:31",
 *           "updated_at": "2018-03-17 13:17:31",
 *           "id": 2
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 *}
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
 * @apiError Category not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "category_not_found",
 *   "error": 3
 *}
 */
