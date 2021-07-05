import React, { useEffect, useState } from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';

const MainPage = () => {
  const [status, setStatus] = useState('idle');
  const [tvPopular, setTvPopular] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);

  useEffect(() => {
    const getPopulars = async () => {
      setStatus('loading');
      const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
      const moviePopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

      Promise.all([fetch(tvPopularUrl), fetch(moviePopularUrl)])
        .then((responses) => {
          return Promise.all(
            responses.map((response) => {
              if (!response.ok) throw new Error('HTTP wrong');
              return response.json();
            })
          );
        })
        .then((data) => {
          setTvPopular(data[0].results);
          setMoviePopular(data[1].results);
          setStatus('resolved');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPopulars();
    return () => {};
  }, []);

  return (
    <div>
      {status === 'idle' && <p>Idle</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'resolved' && (
        <>
          <MainBoard data={tvPopular} mediaType="tv" />
          <ListBoard
            data={moviePopular}
            // data2={movieNowPlaying}
            // data3={tvOnAir}
          />
          )
        </>
      )}
    </div>
  );
};

export default MainPage;
