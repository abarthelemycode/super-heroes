import getters from '@/store/hero/getters';

describe('heroModule/getters', () => {
  it('isFavoriteHeroes', () => {
    const state1 = {
      heroes: [
        { id: '1', superhero: 'Superman', favorite: 'false' },
        { id: '1', superhero: 'Spider man', favorite: 'true' },
        { id: '1', superhero: 'Batman', favorite: 'true' },
      ],
    };

    const state2 = {
      heroes: [
        { id: '1', superhero: 'Superman', favorite: 'false' },
        { id: '1', superhero: 'Spider man', favorite: 'false' },
        { id: '1', superhero: 'Batman', favorite: 'false' },
      ],
    };

    const result1 = getters.isFavoriteHeroes(state1);
    const result2 = getters.isFavoriteHeroes(state2);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});
