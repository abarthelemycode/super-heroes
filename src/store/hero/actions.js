import types from './types';

const setHeroesDisplay = ({ commit }) => {
  commit(types.SET_HEROES_DISPLAY);
};

const setActualPage = ({ commit }, actualPage) => {
  commit(types.SET_ACTUAL_PAGE, actualPage);
};

const setSearchTxt = ({ commit }, searchTxt) => {
  commit(types.SET_SEARCH_TXT, searchTxt);
};

const addHero = ({ commit }, hero) => {
  commit(types.ADD_HERO, hero);
};

const updateHero = ({ commit }, hero) => {
  commit(types.UPDATE_HERO, hero);
};

const deleteHero = ({ commit }, hero) => {
  commit(types.DELETE_HERO, hero);
};


export default {
  setHeroesDisplay,
  setActualPage,
  setSearchTxt,
  addHero,
  updateHero,
  deleteHero,
};
