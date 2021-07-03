export const IMG_URL = 'https://image.tmdb.org/t/p/';
export const IMG_ORIGINAL_SIZE = 'original';
export const IMG_W500_SIZE = 'w500';

export const getRate = (rate, standard) => {
  const full = +rate > 10 ? 100 : 10;
  const calcRate = Math.round((+rate * standard) / full);
  const rest = standard - calcRate;
  return { calcRate, rest };
};

export const billBoardRateStandard = 5;
