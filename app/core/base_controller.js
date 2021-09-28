'use strict';

const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data) {
    this.ctx.body = {
      code: 10000,
      data,
      msg: '',
    };
  }

  error(data, msg) {
    this.ctx.body = {
      code: 10001,
      data,
      msg,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;
