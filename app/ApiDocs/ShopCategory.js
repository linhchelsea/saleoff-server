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
 * @api {POST} http://localhost:3333/api/v1/shop-cat/create Create new shop category
 * @apiName Create new shop category
 * @apiGroup Shop Category
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
 *           "name": "Fashion",
 *           "created_at": "2018-03-17 14:17:35",
 *           "updated_at": "2018-03-17 14:17:35",
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
