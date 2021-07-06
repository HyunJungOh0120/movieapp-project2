import React, { useEffect, useState } from 'react';
import { get3RandomNums, getJSON } from '../../Helpers/Helpers';
import { getListByGenreUrl } from '../../Helpers/Urls';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';

const setInfo = (Results, Genres, Indexes, mediaType) => {
  return Results.map((results, i) => {
    results.forEach((result) => (result.mediaType = mediaType));

    return { genre: Genres[Indexes[i]], list: results };
  });
  // Results [[],[],[]]
  // Indexes [3, 6, 7]
  // Genres  [ {id,name} ]    genre:Genres[index].name list:results

  // [{genre:ss, list:Array(20)}, ...]
};

const MainPage = () => {
  const { moviePopulars, tvPopulars, status, tvGenres, movieGenres } =
    useMain();
  const [listStatus, setListStatus] = useState('idle');
  const [tvLists, setTvLists] = useState({ lists: [] });
  const [movieLists, setMovieLists] = useState({ lists: [] });

  //{id, name}

  useEffect(() => {
    // 3 each
    const randomTvGenresIndexes = get3RandomNums(tvGenres); // index [1,3,6] genre[1].name
    const randomMovieGenresIndexes = get3RandomNums(movieGenres); // [2,4,8]
    const controller = new AbortController();
    const { signal } = controller;

    const getLists = async () => {
      try {
        setListStatus('loading');
        const randomTvUrls = randomTvGenresIndexes.map((index) =>
          getListByGenreUrl('tv', tvGenres[index].id, 1)
        ); //[url,url,url]
        const randomMovieUrls = randomMovieGenresIndexes.map((index) =>
          getListByGenreUrl('movie', movieGenres[index].id, 1)
        ); //[url,url,url]

        const tvData = await Promise.all([
          ...randomTvUrls.map((url) => getJSON(url, { signal })),
        ]);
        const movieData = await Promise.all([
          ...randomMovieUrls.map((url) => getJSON(url, { signal })),
        ]);

        const tvResults = await tvData.map((data) => data.results);
        const movieResults = await movieData.map((data) => data.results);

        setTvLists(setInfo(tvResults, tvGenres, randomTvGenresIndexes, 'tv'));
        setMovieLists(
          setInfo(movieResults, movieGenres, randomMovieGenresIndexes, 'movie')
        );

        setListStatus('resolved');
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
  }, []);

  console.log(tvLists);
  console.log(movieLists);
  // [{genre:{id, name}, list:[]}]
  // [...tvList, ...movieList]

  return (
    <div>
      {status === 'idle' && <div>Idle</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <>
          <MainBoard data={tvPopulars.list} mediaType="tv" />
          <ListBoard data={moviePopulars.list} />
        </>
      )}
      {listStatus === 'idle' && <div>Idle</div>}
      {listStatus === 'loading' && <div>Loading...</div>}
      {listStatus === 'resolved' && <div>resolved</div>}
    </div>
  );
};

export default MainPage;
