'use strict';

const Controller = use('App/Controllers/Controller');
const UserService = use('App/Services/UserService');
class UserController extends Controller {
  constructor() {
    super();
    this.userService = new UserService();
  }

  /**
   * get profile
   * @param auth
   * @returns Promise<Object>
   */
  async getProfile({ auth }) {
    const user = await auth.getUser();
    const data = {
      user,
    };
    return this.buildSuccess({ data });
  }
  /**
   * get user information
   * @param request
   * @returns Promise<Object>
   * */
  async getUser({ params }) {
    const uid = params.id;
    const user = await this.userService.getUserById(uid);
    const data = {
      user,
    };
    return this.buildSuccess({ data });
  }

  /**
   * update profile
   * @param request
   * @param auth
   * @return Promise<*>
   */
  async postUpdateProfile({ request, auth }) {
    const user = await auth.getUser();
    const params = request.all();
    const update = await this.userService.updateProfile(user, params);
    if (update) {
      const data = {
        user: update,
      };
      return this.buildSuccess({ data });
    }
    return this.errorResponse({});
  }

  /**
   * followUser
   * @param auth
   * @param params
   * @return {Promise.<*>}
   */
  async followUser({ auth, params }) {
    const user = await auth.getUser();
    const isFollow = await this.userService.followUser(user.id, params.id);
    if (isFollow) {
      return this.buildSuccess({});
    }
    return this.errorResponse({});
  }

  /**
   * unfollowUser
   * @param auth
   * @param params
   * @return {Promise.<*>}
   */
  async unfollowUser({ auth, params }) {
    const user = await auth.getUser();
    const isUnfollow = await this.userService.unfollowUser(user.id, params.id);
    if (isUnfollow) {
      return this.buildSuccess({});
    }
    return this.errorResponse({});
  }

  /**
   * getListUserFollowed
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getListUserFollowed({ auth }) {
    const user = await auth.getUser();
    const users = await this.userService.getListUserFollowed(user.id);
    const data = {
      users,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getListUserToFollow
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getListUserToFollow({ auth }) {
    const user = await auth.getUser();
    const users = await this.userService.getListUserToFollow(user.id);
    const data = {
      users,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = UserController;

