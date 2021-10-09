'use strict';

const Controller = require('../core/base_controller');

class NavigationController extends Controller {
  async add() {
    const { ctx } = this;
    const menuItem = ctx.request.body;
    if (ctx.service.navigation.find(menuItem)) {
      this.error({}, '已存在相同的名称或路由');
    } else {
      ctx.service.navigation.add(menuItem);
      this.success({});
    }
  }
}

module.exports = NavigationController;
