import React from 'react';
import useGenreLoad from '../../Helpers/useGenreLoad';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';

const MoviePage = () => {
  const { moviePopulars, movieGenres, status } = useMain();
  const { listStatus, lists: movieLists } = useGenreLoad(
    'movie',
    movieGenres,
    status
  );

  console.log(movieLists);

  return (
    <div>
      {listStatus === 'idle' && <p>Idle</p>}
      {listStatus === 'loading' && <p>Loading...</p>}
      {listStatus === 'resolved' && (
        <>
          <MainBoard data={moviePopulars.list} mediaType="movie" />
          <ListBoard dataList={[...movieLists]} />)
        </>
      )}
    </div>
  );
};

export default MoviePage;
