import Vue from "vue";
import Router from "vue-router";

import Index from "./views/Index";
import Mom from "./views/Mom";
import Test from "./views/Test";
// import Link from './views/Link';

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "中彩票！！"
    },
    component: Index
  },
  {
    path: "/mom",
    name: "shot",
    meta: {
      title: "奖金计算系统"
    },
    component: Mom
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "test"
    },
    component: Test
  }
];

function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  return { x: 0, y: 0 };
}

const router = new Router({
  scrollBehavior,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;

export const path = routes.map(item => {
  return item.path.split("/:")[0];
});
