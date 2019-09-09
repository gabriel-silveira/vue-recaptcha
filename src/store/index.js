import Vue from 'vue';
import Vuex from 'vuex';

import recaptchaModule from './modules/recaptcha';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recaptchaModule
  }
});

export default store;