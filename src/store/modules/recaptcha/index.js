import state from './state';
import getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default module;