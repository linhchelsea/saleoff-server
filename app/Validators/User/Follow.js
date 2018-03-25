'use strict';

const Api = use('App/Validators/Api');
const UserRepository = use('App/Repositories/UserRepository');
const UserFollowRepository = use('App/Repositories/UserFollowRepository');
const Config = use('Config');
const { userNotFound, cantFollowYourSelf, userFollowed } = Config.get('error');
class Follow extends Api {
  constructor () {
    super();
    this.userRepo = new UserRepository();
    this.userFollowRepo = new UserFollowRepository();
  }

  async authorize() {
    const { id } = this.ctx.params;
    const auth = await this.ctx.auth.getUser();
    const user = await this.userRepo.getUserById(id);
    if (!user) {
      this.authorizeFails(userNotFound);
      return false;
    }
    if (auth.id === user.id) {
      this.authorizeFails(cantFollowYourSelf);
      return false;
    }
    const userFollow = await this.userFollowRepo.getUserFollow(auth.id, user.id);
    if (userFollow) {
      this.authorizeFails(userFollowed);
      return false;
    }
    return true;
  }
}

module.exports = Follow;
