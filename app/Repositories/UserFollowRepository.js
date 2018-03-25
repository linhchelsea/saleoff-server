'use strict';

const UserFollow = use('App/Models/UserFollow');
const User = use('App/Models/User');
const Database = use('Database');
class UserFollowRepository {
  constructor () {
    this.userFollow = UserFollow;
    this.user = User;
  }

  /**
   * getUserFollow
   * @param id1
   * @param id2
   * @return {Promise.<null>}
   */
  async getUserFollow(id1, id2) {
    const userFollow = await this.userFollow
      .query()
      .where('user_one_id', id1)
      .where('user_two_id', id2)
      .first();
    return userFollow ? userFollow.toJSON() : null;
  }

  /**
   * followUser
   * @param userOneId
   * @param userTwoId
   * @return {Promise.<boolean>}
   */
  async followUser(userOneId, userTwoId) {
    const db = await Database.beginTransaction();
    try {
      const userFollow = new UserFollow();
      userFollow.user_one_id = userOneId;
      userFollow.user_two_id = userTwoId;
      await userFollow.save();
      const user = await this.user.find(userTwoId);
      user.follows += 1;
      await user.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * unfollowUser
   * @param userOneId
   * @param userTwoId
   * @return {Promise.<boolean>}
   */
  async unfollowUser(userOneId, userTwoId) {
    const db = await Database.beginTransaction();
    try {
      const userFollow = await this.userFollow
        .query()
        .where('user_one_id', userOneId)
        .where('user_two_id', userTwoId)
        .first();
      await userFollow.delete();
      const user = await this.user.find(userTwoId);
      user.follows -= 1;
      await user.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  async getListUserIdFollowed(userId) {
    const users = await this.userFollow
      .query()
      .where('user_follows.user_one_id', userId)
      .select('user_follows.user_two_id')
      .orderBy('user_follows.created_at', 'desc')
      .fetch();
    return users ? users.toJSON() : [];
  }
}

module.exports = UserFollowRepository;

