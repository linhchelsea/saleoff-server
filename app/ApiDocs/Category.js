/**
 * @api {GET} http://localhost:3333/api/v1/category/get get list
 * @apiName get list
 * @apiGroup Category
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
 *               "name": "milk tea",
 *               "created_at": "2018-03-17 10:34:15",
 *               "updated_at": "2018-03-17 10:34:15",
 *               "products": []
 *           },
 *           {
 *               "id": 2,
 *               "name": "television",
 *               "created_at": "2018-03-17 11:08:59",
 *               "updated_at": "2018-03-17 11:08:59",
 *               "products": [
 *                   {
 *                       "id": 2,
 *                       "name": "Samsung",
 *                       "description": "Ti vi samsung ahihi",
 *                       "image": "https://www.facebook.com/profile.php?id=100008033802330",
 *                       "is_active": null,
 *                       "category_id": 2,
 *                       "created_at": "2018-03-17 13:17:31",
 *                       "updated_at": "2018-03-17 13:17:31"
 *                   }
 *               ]
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */


/**
 * @api {POST} http://localhost:3333/api/v1/category/create Create new category
 * @apiName Create new category
 * @apiGroup Category
 *
 * @apiParam {String} name Category name
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       category": {
 *           "name": "milk tea",
 *           "created_at": "2018-03-17 10:34:15",
 *           "updated_at": "2018-03-17 10:34:15",
 *           "id": 1
 *       },
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
 */
