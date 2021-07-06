import React, { useEffect } from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import { useMain } from '../MainProvider';
// import { getListByGenreUrl } from '../../Helpers/Urls';

const MainPage = () => {
  const { mainState } = useMain();
  const { tv } = mainState;
  const { movie } = mainState;
  const { status } = mainState;
  console.log('tv', tv);
  console.log('movie', movie);
  //const tvGenres = mainState.tv.genres;
  //const movieGenres = mainState.movie.genres;
  // const [list, setList] = useState([movie.populars.list]);

  useEffect(() => {}, []);

  return (
    <div>
      {status === 'idle' && <div>Idle</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <>
          <MainBoard data={tv.populars.list} mediaType="tv" />
          <ListBoard data={movie.populars.list} />)
        </>
      )}
    </div>
  );
};

export default MainPage;
