import mutations from '@/store/locale/mutations';
import types from '@/store/locale/types';


describe('localeModule/mutations', () => {
  const initState = {
    locale: 'en',
    availableLocales: [],
  };

  it('setAvailableLocales', () => {
    const state = Object.assign({}, initState);
    const newLocales = ['en', 'ge', 'fr'];

    mutations[types.SET_AVAILABLE_LOCALES](state, newLocales);
    expect(state.availableLocales).toEqual(newLocales);
  });

  it('setLocale', () => {
    const state = Object.assign({}, initState);

    mutations[types.SET_LOCALE](state, 'fr');
    expect(state.locale).toEqual('fr');
  });
});
