import types from './types';

const setAvailableLocales = (state, languages) => {
  state.availableLocales = languages;
};

const setLocale = (state, lang) => {
  localStorage.setItem('lang', lang);
  state.locale = lang;
};

export default {
  [types.SET_AVAILABLE_LOCALES]: setAvailableLocales,
  [types.SET_LOCALE]: setLocale,
};
