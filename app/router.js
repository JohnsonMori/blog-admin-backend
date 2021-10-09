'use strict';

const prefix = '/api';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.post(`${prefix}/login`, controller.login.check);
  router.get(`${prefix}/userInfo`, controller.login.find);
  router.post(`${prefix}/navigation`, controller.navigation.create);
  router.get(`${prefix}/navigation`, controller.navigation.query);
};
