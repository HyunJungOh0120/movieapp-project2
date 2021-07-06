import React, { useEffect } from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';
// import { getListByGenreUrl } from '../../Helpers/Urls';

const MainPage = () => {
  const { moviePopulars, tvPopulars, status } = useMain();

  useEffect(() => {}, []);

  return (
    <div>
      {status === 'idle' && <div>Idle</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <>
          <MainBoard data={tvPopulars.list} mediaType="tv" />
          <ListBoard data={moviePopulars.list} />)
        </>
      )}
    </div>
  );
};

export default MainPage;
