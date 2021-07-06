import React, { useEffect, useReducer } from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';

const actions = {
  STATUS: 'status',
  GET_POPULAR: 'get_popular',
  GET_LIST: 'get_list',
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case actions.STATUS:
      return { ...state, status: action.payload.status };

    case actions.GET_POPULAR:
      return { ...state, moviePopular: action.payload.value };

    case actions.GET_LIST: {
      const listObj = {
        dataArr: action.payload.value,
        title: action.payload.title,
      };
      return { ...state, movielist: [...state.movielist, listObj] };
    }
    default:
      return state;
  }
};

const MoviePage = () => {
  const [movieState, movieDispatch] = useReducer(movieReducer, {
    status: 'idle',
    moviePopular: [],
    movielist: [],
  });

  const page = 1;
  const genreId = 12;
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const getMoviePopular = async () => {
      const moviePopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

      const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

      movieDispatch({ type: actions.STATUS, payload: { status: 'loading' } });

      Promise.all([
        fetch(moviePopularUrl, { signal }),
        fetch(moviesUrl, { signal }),
      ])
        .then((responses) => {
          return Promise.all(
            responses.map((response) => {
              if (!response.ok) throw new Error('HTTP wrong');
              return response.json();
            })
          );
        })
        .then((data) => {
          console.log(data[1].results);
          movieDispatch({
            type: actions.GET_POPULAR,
            payload: { value: data[0].results },
          });
          movieDispatch({
            type: actions.GET_LIST,
            payload: { value: data[1].results, title: 'Top Rated Movies' },
          });
          movieDispatch({
            type: actions.STATUS,
            payload: { status: 'resolved' },
          });
        })
        .catch((error) => {
          if (error.name === 'AbortError') return;
          console.log(error);
        });
    };
    getMoviePopular();
    return () => {
      setTimeout(() => {
        controller.abort(), 2000;
      });
    };
  }, []);

  //TODO change the listboard using map. take the data array.
  // if this is done, all done.
  // then work with form. for movie, tv.
  // then detail page

  return (
    <div>
      {movieState.status === 'idle' && <p>Idle</p>}
      {movieState.status === 'loading' && <p>Loading...</p>}
      {movieState.status === 'resolved' && (
        <>
          <MainBoard data={movieState.moviePopular} mediaType="movie" />
          <ListBoard data={movieState.moviePopular} />)
        </>
      )}
    </div>
  );
};

export default MoviePage;
