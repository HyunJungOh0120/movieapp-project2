import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getJSON } from '../Helpers/Helpers';
import { movieGenreUrl, moviePopularUrl } from '../Helpers/Urls';

const MainContext = createContext();

const setMediaType = (list, mediaType) => {
  list.forEach((el) => (el.mediaType = mediaType));
};
function MainProvider({ children }) {
  const [movieGenres, setMovieGenres] = useState([]);
  const [moviePopulars, setMoviePopulars] = useState({ list: '', title: '' });
  const [status, setStatus] = useState('idle');

  const value = { movieGenres, moviePopulars, status };

  useEffect(() => {
    const getInitialData = async () => {
      try {
        setStatus('loading');
        const urls = [movieGenreUrl, moviePopularUrl];
        const data = await Promise.all(urls.map((url) => getJSON(url)));

        setMediaType(data[1].results, 'movie');
        setMovieGenres(data[0].genres);
        setMoviePopulars({ list: data[1].results, title: 'Popular Movies' });

        setStatus('resolved');
      } catch (error) {
        if (error.name === 'AbortError') return;
        setStatus('error');
        console.log(error);
      }
    };
    getInitialData();
  }, []);

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
