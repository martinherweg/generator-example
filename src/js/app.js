// this file gets compiles by browserify
// please import your partial files here
// your partials can be in any other folder than 'json', 'my-source' or 'single'
// these folders are used for other tasks
// you can change the name of this file in the config.json

import 'lazysizes';
import '../scss/app.scss'; /* eslint-disable */


import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';

new Vue({
  el: '#app',
  router,
  store,
  render: createElement => createElement(App)
});

