import React from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';

const TvPage = () => {
  const { tvPopulars, tvGenres, status } = useMain();
  console.log(tvGenres);
  return (
    <div>
      {status === 'idle' && <p>Idle</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'resolved' && (
        <>
          <MainBoard data={tvPopulars.list} mediaType="tv" />
          <ListBoard
            data={tvPopulars.list}
            // data2={movieNowPlaying}
            // data3={tvOnAir}
          />
          )
        </>
      )}
    </div>
  );
};

export default TvPage;
