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

export const CONTENTPERPAGE = 5;

export const getJSON = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const json = await res.json();
  return json;
};

const getRandomNum = (arr) => Math.floor(Math.random() * arr.length);
export const getRandomNumsArrays = (arr, length) => {
  const randomArr = [];
  for (let i = 0; i < arr.length; i++) {
    const randomNum = getRandomNum(arr);
    if (randomArr.length === length) break;
    if (randomArr.indexOf(randomNum) === -1) {
      randomArr.push(randomNum);
    }
  }
  return randomArr;
};

export const setInfo = (Results, Genres, Indexes, mediaType) => {
  return Results.map((results, i) => {
    results.forEach((result) => (result.mediaType = mediaType));

    return { genre: Genres[Indexes[i]], list: results };
  });
};
