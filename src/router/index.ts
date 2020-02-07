import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    /*主页路由*/
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
    /*视频列表页路由*/
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video.vue'),
  },
    /*动漫/轻小说页路由*/
  {
    path: '/cartoon',
    name: 'cartoon',
    component: () => import('../views/Cartoon.vue')
  },
    /*相关信息页路由*/
  {
    path: '/relate',
    name: 'relate',
    component: () => import('../views/Relate.vue')
  },
    /*视频详情页路由*/
  {
    path: '/videoDetail',
    name: 'videoDetail',
    component: () => import('../views/VideoDetail.vue')
  },
    /*主页详情页路由*/
  {
    path: '/indexDetail',
    name: 'indexDetail',
    component: () => import('../views/IndexDetail.vue')
  },
    /*动漫详情页路由*/
  {
    path: '/cartoonDetail',
    name: 'cartoonDetail',
    component: () => import('../views/CartoonDetail.vue')
  },
    /*相关信息详情页*/
  {
    path: '/relatedInformationDetail',
    name: 'informationDetail',
    component: () => import('../views/InformationDetail.vue')
  },
    /*个人中心页面*/
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import('../views/PersonalCenter.vue')
  },
    /*登录页面*/
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
    /*注册页面*/
  {
    path: '/register',
    name: 'login',
    component: () => import('../views/Register.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
