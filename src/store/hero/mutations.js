import types from './types';

function storeJSON(key, json) {
  localStorage.setItem(key, JSON.stringify(json));
}

const setActualPage = (state, actualPage) => {
  state.actualPage = actualPage;
};

const setHeroesDisplay = (state) => {
  let publisher = null;
  let heroesDisplay = null;
  switch (state.actualPage) {
    case 'dc':
      publisher = 'DC Comics';
      break;
    case 'marvel':
      publisher = 'Marvel Comics';
      break;
    default:
      publisher = 'favorite';
      break;
  }

  if (publisher === 'favorite') {
    heroesDisplay = state.heroes.filter(item => item.favorite === 'true');
  } else {
    heroesDisplay = state.heroes.filter(item => item.publisher === publisher);
  }

  const { searchTxt } = state;
  if (searchTxt.length > 3) {
    const regex = new RegExp(searchTxt, 'gi');
    heroesDisplay = heroesDisplay.filter(item => (item.superhero).match(regex));
  }

  state.heroesDisplay = heroesDisplay;
};

const setSearchTxt = (state, searchTxt) => {
  state.searchTxt = searchTxt;
};

const addHero = (state, hero) => {
  const { heroes } = state;
  // create new id of new hero
  const newId = parseInt(heroes[heroes.length - 1].id, 10) + 1;
  hero.id = (newId).toString();

  heroes.push(hero);
  storeJSON('heroes', heroes);
  state.heroes = heroes;
  setHeroesDisplay(state);
};

const updateHero = (state, hero) => {
  const heroes = state.heroes.map(item => ((item.id === hero.id) ? hero : item));
  storeJSON('heroes', heroes);
  state.heroes = heroes;
  setHeroesDisplay(state);
};

const deleteHero = (state, hero) => {
  const heroes = state.heroes.filter(item => item.id !== hero.id);
  storeJSON('heroes', heroes);
  state.heroes = heroes;
  setHeroesDisplay(state);
};

export default {
  [types.SET_HEROES_DISPLAY]: setHeroesDisplay,
  [types.SET_ACTUAL_PAGE]: setActualPage,
  [types.SET_SEARCH_TXT]: setSearchTxt,
  [types.ADD_HERO]: addHero,
  [types.UPDATE_HERO]: updateHero,
  [types.DELETE_HERO]: deleteHero,
};
