/**
 * 配置路由
 */
import Vue from  'vue';
import VueRouter from 'vue-router';

import Msite from  '../pages/Msite/Msite.vue';
import List from  '../pages/List/List.vue';
import Profile from  '../pages/Profile/Profile.vue';
import ShopCard from  '../pages/ShopCart/ShopCart.vue';
import Sort from  '../pages/Sort/Sort.vue';

//声明路由
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // 应用中所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFood: true
      }
    },
    {
      path: '/sort',
      component: Sort,
      meta:{
        showFood: true
      }
    },
    {
      path: '/list',
      component: List,
      meta:{
        showFood: true
      }
    },
    {
      path: '/shopcard',
      component: ShopCard,
      meta:{
        showFood: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFood: true
      }
    },
    {
      path: '/',
      redirect: Msite
    },
    
  ]
})

