import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home/marvel',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'marvel',
          name: 'marvel',
          component: () => import('./views/HeroList.vue'),
          props: true,
        },
        {
          path: 'dc',
          name: 'dc',
          component: () => import('./views/HeroList.vue'),
          props: true,
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: () => import('./views/HeroList.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/NotFound.vue'),
    },
  ],
});
