'use strict';

const UserRepository = use('App/Repositories/UserRepository');
const UserFollowRepository = use('App/Repositories/UserFollowRepository');
class UserService {
  constructor() {
    this.userRepo = new UserRepository();
    this.userFollowRepo = new UserFollowRepository();
  }
  /**
   * get user by id
   * @param uid
   * @returns Promise<Object>
  * */
  async getUserById(uid) {
    const user = await this.userRepo.getUserById(uid);
    return user;
  }

  /**
   * update profile
   * @param user
   * @param params
   * @return boolean
   */
  async updateProfile(user, params) {
    const update = await this.userRepo.updateProfile(user, params);
    return update;
  }

  /**
   * followUser
   * @param userOneId
   * @param userTwoId
   * @return {Promise.<boolean>}
   */
  async followUser(userOneId, userTwoId) {
    const isFollowed = await this.userFollowRepo.followUser(userOneId, userTwoId);
    return isFollowed;
  }

  /**
   * unfollowUser
   * @param userOneId
   * @param userTwoId
   * @return {Promise.<*>}
   */
  async unfollowUser(userOneId, userTwoId) {
    const isUnfollowed = await this.userFollowRepo.unfollowUser(userOneId, userTwoId);
    return isUnfollowed;
  }

  /**
   *
   * @param userId
   * @return {Promise.<Array>}
   */
  async getListUserFollowed(userId) {
    const listIds = await this.userFollowRepo.getListUserIdFollowed(userId);
    const ids = [];
    for (let i = 0; i < listIds.length; i += 1) {
      ids.push(listIds[i].user_two_id);
    }
    const users = await this.userRepo.getListUserFollowed(ids);
    return users;
  }

  /**
   * getListUserToFollow
   * @param userId
   * @return {Promise.<*>}
   */
  async getListUserToFollow(userId) {
    const listIds = await this.userFollowRepo.getListUserIdFollowed(userId);
    const ids = [];
    for (let i = 0; i < listIds.length; i += 1) {
      ids.push(listIds[i].user_two_id);
    }
    ids.push(userId);
    const users = await this.userRepo.getListUserToFollow(ids);
    return users;
  }
}

module.exports = UserService;
