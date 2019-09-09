import MT from './types';

const mutations = {
  [MT.SET_VERIFIED](state, payload) {
    state.verified = payload;
  },
};

export default mutations;