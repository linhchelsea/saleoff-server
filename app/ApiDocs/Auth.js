/**
 * @api {POST} http://localhost:3333/api/v1/login Login
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {String} id_token IdToken from Firebase.
 * @apiParam {String} device_token Device token to send notification.
 * @apiParam {String} platform <code>required</code> <br><code>IOS:</code>ios<br><code>Android:</code>android.
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzZTFiMGIyOTllNDIxZjU2ZWI1YTQ2NjhkMWNmMjNmNGFjNjk2NGMifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2FsZW9mZi01Yjk2MSIsIm5hbWUiOiJUw7ogxJBvw6BuIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTS1tNll6ZWxXeTgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQ0EvQUZvUGY2eU1veGsvczk2LWMvcGhvdG8uanBnIiwiYXVkIjoic2FsZW9mZi01Yjk2MSIsImF1dGhfdGltZSI6MTUyMDk1MzIxOSwidXNlcl9pZCI6IlFIVmJ5ZjhhVE1VdmxNZFRBUzhnZko4VWNINzIiLCJzdWIiOiJRSFZi
 *       eWY4YVRNVXZsTWRUQVM4Z2ZKOFVjSDcyIiwiaWF0IjoxNTIwOTUzMjIxLCJleHAiOjE1MjA5NTY4MjEsImVtYWlsIjoiZjRjbXByb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDA3OTkzMjcxNzc2MDI1MjEwMyJdLCJlbWFpbCI6WyJmNGNtcHJvQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.R47dC36LU0DKOGoDE9F7rqoAMSXAIQoS1QxRtHscvmwwligzXZfNyytWzNkRJ1Fqgg5VD8r_F_Ml0ynBnHgFGCIXIUgNJ9UHDFlB-QfC-m-kRA4bTc188wjH8anYqClDM31ttombBd5NJfkAQ9qwFS8m_u5Iz7a4mUOg25z2sdnEUYDyULmjyDp2GSU0coiL3x0wndqTvG81Hyfg84S-AKuAHOoN-37ofEilgLAbmYedgzXdv7rh2tOSCX8CFX_d-i42ceswOeO-76nfR9ystZywl44_ddDV2uZZmjkQtQhhsY3nYKwVk7yBqfFZUHYw348rcR27-FwiFtCuYY9LhA"
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError UserNotFound The id of the User was not found.
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "invalid_token",
 *   "error": 1
 *}
 */
