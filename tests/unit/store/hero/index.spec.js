import { getHeroesStorage, getPublishers } from '@/store/hero/index';
import heroesJSON from '@/_data/heroes.json';

describe('heroModule/index', () => {
  it('getHeroesStorage', () => {
    const result = getHeroesStorage();
    expect(result).toEqual(heroesJSON);
  });

  it('getPublishers', () => {
    const result = getPublishers();
    expect(result).toEqual(['DC Comics', 'Marvel Comics']);
  });
});
