import mutations from '@/store/hero/mutations';
import types from '@/store/hero/types';


describe('heroModule/mutations', () => {
  const dcHero = {
    id: '1',
    superhero: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    characters: 'Bruce Wayne',
    favorite: 'false',
  };
  const marvelHero = {
    id: '2',
    superhero: 'Spider man',
    publisher: 'Marvel Comics',
    alter_ego: 'Peter Parker',
    first_appearance: 'Amazing Fantasy #15',
    characters: 'Peter Parker',
    favorite: 'true',
  };

  const heroesMock = [dcHero, marvelHero];

  const initState = {
    heroes: Object.assign([], heroesMock),
    heroesDisplay: [],
    publishers: ['Marvel Comics', 'DC Comics'],
    actualPage: 'marvel',
    searchTxt: '',
  };


  it('setHeroesDisplay', () => {
    const state = Object.assign({}, initState);
    state.heroes = Object.assign([], heroesMock);

    state.actualPage = 'marvel';
    mutations[types.SET_HEROES_DISPLAY](state);
    expect(state.heroesDisplay).toEqual([marvelHero]);

    state.actualPage = 'dc';
    mutations[types.SET_HEROES_DISPLAY](state);
    expect(state.heroesDisplay).toEqual([dcHero]);

    state.actualPage = 'favorite';
    mutations[types.SET_HEROES_DISPLAY](state);
    expect(state.heroesDisplay).toEqual([marvelHero]);

    state.actualPage = 'marvel';
    state.searchTxt = 'testoto';
    mutations[types.SET_HEROES_DISPLAY](state);
    expect(state.heroesDisplay).toEqual([]);

    state.searchTxt = 'spider';
    mutations[types.SET_HEROES_DISPLAY](state);
    expect(state.heroesDisplay).toEqual([marvelHero]);
  });

  it('setActualPage', () => {
    const state = Object.assign({}, initState);
    state.heroes = Object.assign([], heroesMock);

    mutations[types.SET_ACTUAL_PAGE](state, 'dc');
    expect(state.actualPage).toEqual('dc');
  });

  it('addHero', () => {
    const state = Object.assign({}, initState);
    state.heroes = Object.assign([], heroesMock);

    const newHero = {
      id: null,
      superhero: 'newHero',
      publisher: 'Marvel Comics',
      alter_ego: 'Toto',
      first_appearance: 'Detective Comics #27',
      characters: 'Toto',
      favorite: 'false',
    };

    mutations[types.ADD_HERO](state, newHero);

    expect(state.heroes).toEqual([...heroesMock, {
      id: '3',
      superhero: 'newHero',
      publisher: 'Marvel Comics',
      alter_ego: 'Toto',
      first_appearance: 'Detective Comics #27',
      characters: 'Toto',
      favorite: 'false',
    }]);

    expect(state.heroesDisplay).toEqual([marvelHero,
      {
        id: '3',
        superhero: 'newHero',
        publisher: 'Marvel Comics',
        alter_ego: 'Toto',
        first_appearance: 'Detective Comics #27',
        characters: 'Toto',
        favorite: 'false',
      },
    ]);
  });

  it('updateHero', () => {
    const state = Object.assign({}, initState);
    state.heroes = Object.assign([], heroesMock);

    const heroUpdated = Object.assign({}, marvelHero);
    heroUpdated.superhero = 'Spider man Dark';

    mutations[types.UPDATE_HERO](state, heroUpdated);
    expect(state.heroes).toEqual([dcHero, heroUpdated]);
    expect(state.heroesDisplay).toEqual([heroUpdated]);
  });

  it('deleteHero', () => {
    const state = Object.assign({}, initState);
    state.heroes = Object.assign([], heroesMock);

    const heroDeleted = Object.assign({}, marvelHero);

    mutations[types.DELETE_HERO](state, heroDeleted);
    expect(state.heroes).toEqual([dcHero]);
    expect(state.heroesDisplay).toEqual([]);
  });
});
