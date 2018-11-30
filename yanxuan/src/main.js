// 入口js
import Vue from 'vue';
import './rem' //rem适配
import App from './App.vue';
import router from './router';
import store from './vuex';

// Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
