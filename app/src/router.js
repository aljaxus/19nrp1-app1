import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
    },
    {
      path: '/game/:gameid',
      name: 'game',
      component: () => import('./views/Game'),
    },
  ],
});
