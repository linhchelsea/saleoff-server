/**
 * @api {POST} http://localhost:3333/api/v1/shop/:shopId/add-employee Add Employee
 * @apiName Add Employee
 * @apiGroup Employee
 *
 * @apiParam {Array[Integer]} ids list userIds
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
 *}
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "ids_is_not_array",
 *   "error": 400
 *}
 *
 * @apiError User Invalid list user id is not number
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "user_invalid",
 *   "error": 6
 *}
 */
/**
 * @api {POST} http://localhost:3333/api/v1/shop/:shopId/employee Get list shop's employee
 * @apiName Get list shop's employee
 * @apiGroup Employee
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
 *       "users": [
 *           {
 *               "id": 2,
 *               "user_id": "X209h95Jg8PzPU09L9cGGrJKKo12",
 *               "email": "linhchelseatoeic95@gmail.com",
 *               "username": "Linh Nguyen",
 *               "full_name": "Linh Nguyen",
 *               "address": null,
 *               "avatar": "https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg",
 *               "gender": 0,
 *               "birthday": null,
 *               "phone": null,
 *               "is_notify": 1,
 *               "created_at": "2018-03-19 20:00:09",
 *               "updated_at": "2018-03-19 20:00:09"
 *           },
 *           {
 *               "id": 9,
 *               "user_id": "CpWFlIyiKKSaSXeeMyvkmJgBrVz1",
 *               "email": "nhoxjio_a10_vn@yahoo.com",
 *               "username": "Linh Chelsea",
 *               "full_name": "Linh Chelsea",
 *               "address": null,
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4",
 *               "gender": 0,
 *               "birthday": null,
 *               "phone": null,
 *               "is_notify": 1,
 *               "created_at": "2018-03-19 20:37:05",
 *               "updated_at": "2018-03-19 20:37:05"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 */
/**
 * @api {POST} http://localhost:3333/api/v1/shop/:shopId/employee/find find users to become employee
 * @apiName find users to become employee
 * @apiGroup Employee
 *
 * @apiParam {String} text hint text
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       users": [
 *           {
 *               "id": 1,
 *               "username": "Tú Đoàn Lê",
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20770143_1338432356254074_2133242196461463326_n.jpg?oh=ee72a54396ef80c460721a35a7209836&oe=5B081C49"
 *           },
 *           {
 *               "id": 11,
 *               "username": "Tú Đoàn",
 *               "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "text_is_required",
 *   "error": 400
 *}
 *
 * @apiError ShopNotFound Can not find shop by id
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 */
