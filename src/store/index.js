import Vue from 'vue';
import Vuex from 'vuex';

import heroModule from './hero';
import localeModule from './locale';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    heroModule,
    localeModule,
  },
});

export default store;
