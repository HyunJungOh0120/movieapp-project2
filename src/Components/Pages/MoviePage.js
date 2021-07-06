import React, { useEffect } from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';

const MoviePage = () => {
  const { moviePopulars, movieGenres, status } = useMain();
  console.log(movieGenres);

  useEffect(() => {
    return () => {};
  }, []);
  console.log(moviePopulars.list);
  return (
    <div>
      {status === 'idle' && <p>Idle</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'resolved' && (
        <>
          <MainBoard data={moviePopulars.list} mediaType="movie" />
          <ListBoard data={moviePopulars.list} />)
        </>
      )}
    </div>
  );
};

export default MoviePage;
