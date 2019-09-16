import types from './types';

const setAvailableLocales = ({ commit }, locales) => {
  commit(types.SET_AVAILABLE_LOCALES, locales);
};

const setLocale = ({ commit }, locale) => {
  commit(types.SET_LOCALE, locale);
};

export default {
  setAvailableLocales,
  setLocale,
};
