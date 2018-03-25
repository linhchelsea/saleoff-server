/**
 * @api {GET} http://localhost:3333/api/v1/user/profile Get profile
 * @apiName Get profile
 * @apiGroup User
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *    "status": 200,
 *   "data": {
 *       "user": {
 *           "id": 1,
 *           "user_id": "QHVbyf8aTMUvlMdTAS8gfJ8UcH72",
 *           "email": "f4cmpro@gmail.com",
 *           "username": "Tú Đoàn",
 *           "full_name": "Tú Đoàn",
 *           "address": null,
 *           "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg",
 *           "gender": 0,
 *           "birthday": null,
 *           "phone": null,
 *           "is_notify": 1,
 *           "created_at": "2018-03-15 23:44:57",
 *           "updated_at": "2018-03-15 23:44:57"
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError TokenInvalid The token is has expired or incorrect.
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "invalid_token",
 *   "error": 1
 *}
 */

/**
 * @api {PUT} http://localhost:3333/api/v1/user/update-profile Update profile
 * @apiName Update profile
 * @apiGroup User
 *
 * @apiParam {String} username username
 * @apiParam {String} avatar avatar (URL)
 * @apiParam {String} address address
 * @apiParam {Integer} gender gender.unknow: 0, male: 1, female: 2
 * @apiParam {Date} birthday birthday
 * @apiParam {Integer} gender gender. male: 0, female: 1
 * @apiParam {Date} birthday birthday
 * @apiParam {String} phone phone number
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *    "status": 200,
 *    "data": {
 *       "user": {
 *           "id": 1,
 *           "user_id": "QHVbyf8aTMUvlMdTAS8gfJ8UcH72",
 *           "email": "f4cmpro@gmail.com",
 *           "username": "Tú Đoàn",
 *           "full_name": "Tú Đoàn",
 *           "address": null,
 *           "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg",
 *           "gender": 0,
 *           "birthday": null,
 *           "phone": null,
 *           "is_notify": 1,
 *           "created_at": "2018-03-15 23:44:57",
 *           "updated_at": "2018-03-15 23:44:57"
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError TokenInvalid The token is has expired or incorrect.
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "invalid_token",
 *   "error": 1
 *}
 *
 * @apiError TokenInvalid The token is has expired or incorrect.
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "phone_too_long",
 *   "error": 400
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/user/:id/follow Follow user
 * @apiName Follow user
 * @apiGroup User
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *    "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError TokenInvalid The token is has expired or incorrect.
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "invalid_token",
 *   "error": 1
 *}
 * @apiError UserNotFound User not found .
 * @apiErrorExample User not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "user_not_found",
 *   "error": 11
 *}
 * @apiError UserFollowed User followed.
 * @apiErrorExample User followed:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "user_followed",
 *   "error": 13
 *}
 * @apiError CantFollowYourSelf Cant follow your self.
 * @apiErrorExample Cant follow your self.:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "cant_follow_yourself",
 *   "error": 12
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/user/:id/unfollow Unfollow user
 * @apiName Unfollow user
 * @apiGroup User
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *    "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError TokenInvalid The token is has expired or incorrect.
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "invalid_token",
 *   "error": 1
 *}
 * @apiError UserNotFound User not found .
 * @apiErrorExample User not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "user_not_found",
 *   "error": 11
 *}
 * @apiError UserFollowed User followed.
 * @apiErrorExample User unfollowed:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "user_unfollowed",
 *   "error": 15
 *}
 * @apiError CantFollowYourSelf Cant follow your self.
 * @apiErrorExample Cant unfollow your self.:
 *{
 *   "status": 401,
 *   "data": null,un
 *   "message": "cant_follow_yourself",
 *   "error": 14
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/user-followed Get list user followed
 * @apiName Get list user followed
 * @apiGroup User
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
 *               "id": 1,
 *               "username": "Tú Đoàn Lê",
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20770143_1338432356254074_2133242196461463326_n.jpg?oh=ee72a54396ef80c460721a35a7209836&oe=5B081C49"
 *           },
 *           {
 *               "id": 9,
 *               "username": "Linh Chelsea",
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/user/follow/search Get list user to follow
 * @apiName Get list user to follow
 * @apiGroup User
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
 *               "id": 1,
 *               "username": "Tú Đoàn Lê",
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20770143_1338432356254074_2133242196461463326_n.jpg?oh=ee72a54396ef80c460721a35a7209836&oe=5B081C49"
 *           },
 *           {
 *               "id": 9,
 *               "username": "Linh Chelsea",
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 */
