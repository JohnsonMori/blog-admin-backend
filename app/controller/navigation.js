'use strict';

const Controller = require('../core/base_controller');

class NavigationController extends Controller {
  async create() {
    const { ctx } = this;
    const menuItem = ctx.request.body;
    if (ctx.service.navigation.find(menuItem)) {
      this.error({}, '已存在相同的名称或路由');
    } else {
      ctx.service.navigation.create(menuItem);
      this.success({});
    }
  }

  async query() {
    const { ctx } = this;
    const query = ctx.query;
    const menuList = ctx.service.navigation.query(query);
    console.log(menuList);
    this.success(menuList);
  }
}

module.exports = NavigationController;
