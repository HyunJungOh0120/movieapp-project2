import React, { useEffect, useState } from 'react';
import MoviePopular from '../../Data/MoviePopular';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
//import styles from './MainPage.module.css';

const { results: moviePopular } = MoviePopular;
const MainPage = () => {
  const [status, setStatus] = useState('loading');
  const [tvPopular, setTvPopular] = useState([]);

  useEffect(() => {
    const getTvPopular = async () => {
      const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
      const res = await fetch(tvPopularUrl);
      const data = await res.json();
      const { results } = data;

      setTvPopular(results);
    };
    getTvPopular();
    return () => {};
  }, []);

  return (
    <div>
      {status === 'idle' && <p>Idle</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'resolved' && (
        <>
          <MainBoard data={tvPopular} />
          <ListBoard data={moviePopular} />
        </>
      )}
    </div>
  );
};

export default MainPage;
