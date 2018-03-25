/**
 * @api {POST} http://localhost:3333/api/v1/post/create Create new post
 * @apiName Create new post
 * @apiGroup Post
 *
 * @apiParam {String} title Title
 * @apiParam {String} description Description
 * @apiParam {Integer} sale_percent Sale percent [0,100]
 * @apiParam {URL} cover Cover image
 * @apiParam {Array[url]} images list images(5 images)
 * @apiParam {Date} start_date Start date
 * @apiParam {Date} end_date End date
 * @apiParam {String} address Address
 * @apiParam {Integer} product_id Product ID
 * @apiParam {Integer} shop_id Shop ID
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "post": {
 *           "title": "Bai viet so 1",
 *           "description": "Mo ra so 1",
 *           "sale_percent": 33,
 *           "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *           "images": [
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *            ],
 *           "start_date": "2018-03-22",
 *           "end_date": "2018-03-25",
 *           "address": "81 Quang Trung",
 *           "product_id": 1,
 *           "shop_id": 2,
 *           "user_id": 9,
 *           "created_at": "2018-03-24 15:34:39",
 *           "updated_at": "2018-03-24 15:34:39",
 *           "id": 1
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
 *   "message": "title_is_required",
 *   "error": 400
 *}
 * @apiError System Error Connection is bad
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 * @apiError Product not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "product_not_found",
 *   "error": 19
 *}
 * @apiError Not shop member
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_shop_member",
 *   "error": 21
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/get Get post detail
 * @apiName Get post detail
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "post": {
 *           "id": 1,
 *           "title": "Bai viet so 1",
 *           "description": "Mo ra so 1",
 *           "sale_percent": 33,
 *           "is_trust": 0,
 *           "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *           "start_date": "2018-03-21T17:00:00.000Z",
 *           "end_date": "2018-03-24T17:00:00.000Z",
 *           "address": "81 Quang Trung",
 *           "view": 0,
 *           "like": 0,
 *           "product_id": 1,
 *           "shop_id": 2,
 *           "user_id": 9,
 *           "admin_id": null,
 *           "is_checked": 0,
 *           "created_at": "2018-03-24 15:34:39",
 *           "updated_at": "2018-03-24 15:34:39",
 *           "images": [
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *           ],
 *           "user": {
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
 *               "updated_at": "2018-03-22 22:50:06",
 *               "follows": 0
 *           },
 *           "product": {
 *               "id": 1,
 *               "name": "Fila",
 *               "description": "description",
 *               "image": "https://www.facebook.com/profile.php?id=100008033802330",
 *               "is_active": null,
 *               "category_id": 1,
 *               "created_at": "2018-03-19 20:46:09",
 *               "updated_at": "2018-03-19 20:46:09",
 *               "category": {
 *                   "id": 1,
 *                   "name": "Clothes",
 *                   "created_at": "2018-03-19 20:44:40",
 *                   "updated_at": "2018-03-19 20:44:40"
 *               }
 *           },
 *           "shop": {
 *               "id": 2,
 *               "name": "69 Shop",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *           }
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError Post not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/like Like post
 * @apiName Like post
 * @apiGroup Post
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
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError PostLiked Post liked
 * @apiErrorExample Post liked:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_liked",
 *   "error": 23
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/unlike Unlike post
 * @apiName Unlike post
 * @apiGroup Post
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
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError PostUnliked Post unliked
 * @apiErrorExample Post unliked:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_unliked",
 *   "error": 24
 *}
 */
