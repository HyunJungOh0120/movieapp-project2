import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getJSON } from '../Helpers/Helpers';
import {
  movieGenreUrl,
  moviePopularUrl,
  tvGenreUrl,
  tvPopularUrl,
} from '../Helpers/Urls';

const MainContext = createContext();

function MainProvider({ children }) {
  const [tvGenres, setTvGenres] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvPopulars, setTvPopulars] = useState({ list: '', title: '' });
  const [moviePopulars, setMoviePopulars] = useState({ list: '', title: '' });
  const [status, setStatus] = useState('idle');

  const value = { tvGenres, movieGenres, tvPopulars, moviePopulars, status };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getInitialData = async () => {
      try {
        setStatus('loading');
        const urls = [tvGenreUrl, movieGenreUrl, moviePopularUrl, tvPopularUrl];
        const data = await Promise.all(urls.map((url) => getJSON(url, signal)));
        console.log(data);
        setTvGenres(data[0].genres);
        setMovieGenres(data[1].genres);
        setMoviePopulars({ list: data[2].results, title: 'Popular Movies' });
        setTvPopulars({ list: data[3].results, title: 'Popular Tv Shows' });
        setStatus('resolved');
      } catch (error) {
        if (error.name === 'AbortError') return;
        setStatus('error');
        console.log(error);
      }
    };
    getInitialData();

    return () => {
      setTimeout(() => {
        controller.abort(), 3000;
      });
    };
  }, []);
  console.log(value);
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

const useMain = () => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('Main Context must be within Provider!');
  }
  return context;
};

MainProvider.propTypes = {
  children: PropTypes.node,
};
export { MainProvider, useMain };
