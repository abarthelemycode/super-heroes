import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import heroesJSON from '@/_data/heroes.json';


const namespaced = true;

export function getHeroesStorage() {
  const storage = localStorage.getItem('heroes');
  if (storage === null) {
    const heroes = heroesJSON;
    localStorage.setItem('heroes', JSON.stringify(heroes));
    return heroes;
  }
  return JSON.parse(storage);
}

export function getPublishers() {
  const storage = JSON.parse(localStorage.getItem('heroes'));
  let publishers = storage.map(item => item.publisher);
  publishers = publishers.filter((item, pos) => !pos || item !== publishers[pos - 1]);
  return publishers;
}


export default {
  namespaced,
  state() {
    return {
      heroes: getHeroesStorage(),
      heroesDisplay: [],
      publishers: getPublishers(),
      actualPage: '',
      searchTxt: '',
    };
  },
  actions,
  getters,
  mutations,
};
