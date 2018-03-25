/**
 * @api {POST} http://localhost:3333/api/v1/post/comment/:postId/add Add comment
 * @apiName Add comment
 * @apiGroup Comment
 *
 * @apiParam {String} comment Content
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "comment": {
 *           "user_id": 9,
 *           "post_id": "1",
 *           "type": "shop",
 *           "comment": "Bai viet hay qua",
 *           "created_at": "2018-03-25 17:06:51",
 *           "updated_at": "2018-03-25 17:06:51",
 *           "id": 4,
 *           "author": {
 *               "id": 2,
 *               "name": "69 Shop",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *           }
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
 *   "message": "comment_is_required",
 *   "error": 400
 *}
 * @apiError System Error Connection is bad
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */
/**
 * @api {PUT} http://localhost:3333/api/v1/post/comment/:id/edit Edit comment
 * @apiName Edit comment
 * @apiGroup Comment
 *
 * @apiParam {String} comment Content
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
 *   "status": 401,
 *   "data": null,
 *   "message": "comment_is_required",
 *   "error": 400
 *}
 * @apiError NotFound Comment not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "comment_not_found",
 *   "error": 25
 *}
 * @apiError NotYourComment Not your comment
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_your_comment",
 *   "error": 26
 *}
 */
