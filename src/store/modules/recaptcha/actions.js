import MT from './types';

export const setVerified = async ({ commit }, value) => {
  commit(MT.SET_VERIFIED, value);
}
