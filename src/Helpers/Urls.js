export const movieGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=568d70d9321d73f65ec37dc872130204`;

export const moviePopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=568d70d9321d73f65ec37dc872130204`;

// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate

// list 20 by genre num  genre name search by genre from context

export const getListByGenreUrl = (mediaType, genreId, page) => {
  return `https://api.themoviedb.org/3/discover/${mediaType}?api_key=568d70d9321d73f65ec37dc872130204&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate
   `;
};
