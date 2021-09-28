'use strict';

const Controller = require('../core/base_controller');

class LoginController extends Controller {
  async check() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.check({ username, password });
    if (user) {
      this.success(user);
    } else {
      this.error({}, '用户名或密码不正确');
    }
  }

  async find() {
    const { ctx } = this;
    const { id } = this.ctx.query;
    if (!id) {
      this.error({}, '请先登录');
      return;
    }
    const userInfo = await ctx.service.user.find(id);
    if (userInfo) {
      this.success(userInfo);
    } else {
      this.error({}, '用户信息不存在');
    }
  }
}

module.exports = LoginController;
