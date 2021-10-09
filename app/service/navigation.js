'use strict';

const Service = require('egg').Service;

const { v4 } = require('uuid');

class NavService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  query(nav) {
    // async query(nav) {
    console.log(nav);
    return [];
  }

  async create(nav) {
    const result = await this.app.mysql.insert('navigation', { id: v4(), ...nav });
    const insertSuccess = result.affectedRows >= 1;
    return insertSuccess;
  }

  async find(nav) {
    const sameName = await this.app.mysql.get('navigation', { name: nav.name });
    const sameRoute = await this.app.mysql.get('navigation', { route: nav.route });
    return !!(sameName || sameRoute);
  }
}

module.exports = NavService;
