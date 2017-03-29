import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {

};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});


/* eslint-disable */
if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
  ], () => {
    // swap in the new actions and mutations
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
    });
  })
}

export default store;
