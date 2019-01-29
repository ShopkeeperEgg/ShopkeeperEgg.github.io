import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index';
// import Link from './views/Link';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
];

const router = new Router({
  // mode: 'history',
  routes
});

export default router;

export const path = routes.map(item => {
  return item.path.split('/:')[0];
});
