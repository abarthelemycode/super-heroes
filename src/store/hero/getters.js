const isFavoriteHeroes = (state) => {
  const favorites = state.heroes.filter(item => item.favorite === 'true');
  return (favorites.length > 0);
};

export default {
  isFavoriteHeroes,
};
