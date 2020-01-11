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
    path: '/videoDetail/:videoId',
    name: 'videoDetail',
    component: () => import('../views/VideoDetail.vue')
  },
    /*主页详情页路由*/
  {
    path: '/indexDetail/:indexId',
    name: 'indexDetail',
    component: () => import('../views/IndexDetail.vue')
  },
    /*动漫详情页路由*/
  {
    path: '/cartoonDetail/:cartoonId',
    name: 'cartoonDetail',
    component: () => import('../views/CartoonDetail.vue')
  },
    /*相关信息详情页*/
  {
    path: '/informationDetail/:cartoonId',
    name: 'informationDetail',
    component: () => import('../views/InformationDetail.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
