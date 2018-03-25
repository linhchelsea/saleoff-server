'use strict';

const admin = require('firebase-admin');

const Env = use('Env');
const serviceAccount = require(`${Env.get('SERVICE_ACCOUNT')}`);

const databaseURL = Env.get('FIREBASE_DATABASE_URL');
const User = use('App/Models/User');
const Database = use('Database');
const userSelected = [
  'users.id',
  'users.username',
  'users.avatar',
];
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
});

class UserRepository {
  constructor() {
    this.user = User;
  }
  /**
   * login
   * @param idToken
   * @returns Promise<Object>
   */
  async verify(idToken) {
    const user = await admin.auth().verifyIdToken(idToken);
    return user;
  }

  /**
   * get user by id
   * @param uid
   * @returns Promise<Object>
   */
  async getUserById(uid) {
    const user = await this.user.find(uid);
    return user ? user.toJSON() : null;
  }

  /**
   * findUserByFirebaseUserId
   * @param userId
   * @returns Promise<Object>
   */
  async findUserByFirebaseUserId(userId) {
    const user = await User
      .query()
      .where('user_id', userId)
      .first();
    return user ? user.toJSON() : null;
  }

  /**
   * createUser
   * @param user
   * @returns Promise<Object>
   */
  async createUser(user) {
    const newUser = new User();
    newUser.user_id = user.user_id;
    newUser.username = user.name;
    newUser.email = user.email;
    newUser.full_name = user.name;
    newUser.avatar = user.picture;
    await newUser.save();
    return newUser;
  }

  /**
   * get user by token
   * @param token
   * @return Promise<Object>
   */
  async getUserByToken(token) {
    const user = await this.user
      .query()
      .innerJoin('tokens', 'tokens.user_id', 'users.id')
      .where('token', token)
      .orderBy('tokens.updated_at', 'desc')
      .select('users.*')
      .first();
    return user ? user.toJSON() : null;
  }

  /**
   * update profile
   * @param userId
   * @param params
   * @return Promise<Object>
   */
  async updateProfile(user, params) {
    const db = await Database.beginTransaction();
    try {
      const userUpdate = await this.user.findOrFail(user.id);
      userUpdate.username = params.username || user.username;
      userUpdate.avatar = params.avatar || user.avatar;
      userUpdate.address = params.address || user.address;
      userUpdate.gender = params.gender || user.gender;
      userUpdate.birthday = params.birthday || user.birthday;
      userUpdate.phone = params.phone || user.phone;
      await userUpdate.save();
      db.commit();
      return userUpdate;
    } catch (err) {
      db.rollback();
      return null;
    }
  }

  /**
   * find user to add
   * @param ids
   * @param text
   * @return {Promise.<*>}
   */
  async findUserToAdd(ids, text) {
    const users = await this.user
      .query()
      .whereNotIn('id', ids)
      .where(function () {
        this.where('username', 'like', `%${text}%`)
          .orWhere('email', 'like', `%${text}%`);
      })
      .select(['id', 'username', 'avatar'])
      .fetch();
    return users;
  }

  /**
   * getListUserFollowed
   * @param ids
   * @return {Promise.<Array>}
   */
  async getListUserFollowed(ids) {
    const users = await this.user
      .query()
      .whereIn('id', ids)
      .select(userSelected)
      .fetch();
    return users ? users.toJSON() : [];
  }

  async getListUserToFollow(ids) {
    const users = await this.user
      .query()
      .whereNotIn('id', ids)
      .select(userSelected)
      .fetch();
    return users ? users.toJSON() : [];
  }
}

module.exports = UserRepository;
