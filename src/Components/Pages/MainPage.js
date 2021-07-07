import React, { useEffect, useState } from 'react';
import { getJSON, getRandomNumsArrays } from '../../Helpers/Helpers';
import { getListByGenreUrl } from '../../Helpers/Urls';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';

const setInfo = (Results, Genres, Indexes, mediaType) => {
  return Results.map((results, i) => {
    results.forEach((result) => (result.mediaType = mediaType));

    return { genre: Genres[Indexes[i]], list: results };
  });
};

const MainPage = () => {
  const { moviePopulars, tvPopulars, status, tvGenres, movieGenres } =
    useMain();
  const [listStatus, setListStatus] = useState('idle');
  const [tvLists, setTvLists] = useState([]);
  const [movieLists, setMovieLists] = useState([]);

  //{id, name}

  useEffect(() => {
    // 3 each
    const randomTvGenresIndexes = getRandomNumsArrays(tvGenres, 3); // index [1,3,6] genre[1].name
    const randomMovieGenresIndexes = getRandomNumsArrays(movieGenres, 3); // [2,4,8]

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
          ...randomTvUrls.map((url) => getJSON(url)),
        ]);
        const movieData = await Promise.all([
          ...randomMovieUrls.map((url) => getJSON(url)),
        ]);

        const tvResults = tvData.map((data) => data.results);
        const movieResults = movieData.map((data) => data.results);

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
  }, [status]);

  // [{genre:{id, name}, list:[]}]
  // [...tvList, ...movieList]

  return (
    <div>
      {status === 'idle' && <div>Idle</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <>
          <MainBoard
            data={[...tvPopulars.list, ...moviePopulars.list]}
            mediaType="tv"
          />
        </>
      )}
      {listStatus === 'idle' && <div>Idle</div>}
      {listStatus === 'loading' && <div>Loading...</div>}
      {listStatus === 'resolved' && (
        <ListBoard dataList={[...tvLists, ...movieLists]} />
      )}
    </div>
  );
};

export default MainPage;
