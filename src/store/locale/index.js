import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

export function getLangStorage() {
  const storage = localStorage.getItem('lang');
  if (storage === null) {
    const langDefault = 'en';
    localStorage.setItem('lang', langDefault);
    return langDefault;
  }
  return storage;
}


export default {
  namespaced,
  state() {
    return {
      locale: getLangStorage(),
      availableLocales: [],
    };
  },
  actions,
  getters,
  mutations,
};
