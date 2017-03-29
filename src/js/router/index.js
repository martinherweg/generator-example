import Vue from 'vue';
import Router from 'vue-router';

// import your route Components here

import Home from '../views/Home.vue';


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
  ],
});
