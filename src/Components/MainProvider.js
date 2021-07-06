import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  movieGenreUrl,
  moviePopularUrl,
  tvGenreUrl,
  tvPopularUrl,
} from '../Helpers/Urls';
const MainContext = createContext();

const actions = {
  TV_GENRE: 'TV_GENRE',
  MOVIE_GENRE: 'MOIE_GENRE',
  TV_POPULAR: 'TV_POPULAR',
  MOVIE_POPULAR: 'MOVIE_POPULAR',
  STATUS: 'STATUS',
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case actions.TV_GENRE: {
      const genres = action.payload.value;
      return { ...state, tv: { ...state.tv, genres: genres } };
    }
    case actions.MOVIE_GENRE: {
      const genres = action.payload.value;
      return { ...state, movie: { ...state.movie, genres: genres } };
    }
    case actions.TV_POPULAR: {
      const list = action.payload.value;
      const title = action.payload.title;

      return {
        ...state,
        tv: {
          ...state.tv,
          populars: {
            title: title,
            list: list,
          },
        },
      };
    }
    case actions.MOVIE_POPULAR: {
      const list = action.payload.value;
      const title = action.payload.title;

      return {
        ...state,
        movie: {
          ...state.movie,
          populars: {
            title: title,
            list: list,
          },
        },
      };
    }
    case actions.STATUS: {
      return { ...state, status: action.payload.status };
    }
    default:
      return state;
  }
};

function MainProvider({ children }) {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const getInitialData = async () => {
      mainDispatch({ type: actions.STATUS, payload: { status: 'loading' } });

      const urls = [tvGenreUrl, movieGenreUrl, moviePopularUrl, tvPopularUrl];

      Promise.all(urls.map((url) => fetch(url, { signal })))
        .then((responses) => {
          return Promise.all(
            responses.map((response) => {
              if (!response.ok) throw new Error('HTTP Wrong');
              return response.json();
            })
          );
        })
        .then((data) => {
          console.log(data);
          mainDispatch({
            type: actions.TV_GENRE,
            payload: {
              value: data[0].genres,
            },
          });
          mainDispatch({
            type: actions.MOVIE_GENRE,
            payload: {
              value: data[1].genres,
            },
          });
          mainDispatch({
            type: actions.TV_POPULAR,
            payload: {
              value: data[3].results,
              title: 'Popular TV Shows',
            },
          });
          mainDispatch({
            type: actions.MOVIE_POPULAR,
            payload: {
              value: data[2].results,
              title: 'Popular Movies',
            },
          });
          mainDispatch({
            type: actions.STATUS,
            payload: { status: 'resolved' },
          });
        })
        .catch((error) => {
          if (error.name === 'AbortError') return;
          mainDispatch({ type: actions.STATUS, payload: { status: 'error' } });
          console.log(error);
        });
    };
    getInitialData();

    return () => {
      setTimeout(() => {
        controller.abort(), 2000;
      });
    };
  }, []);
  const [mainState, mainDispatch] = useReducer(mainReducer, {
    tv: { genres: [], populars: {} },
    movie: { genres: [], populars: {} },
    status: 'idle',
  });

  const value = { mainState, mainDispatch };

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
