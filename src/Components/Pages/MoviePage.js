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

  const getDiscoverUrl = (query, page = 1) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&${query}page=${page}&include_adult=false`;
  };

  useEffect(() => {
    const getMoviePopular = async () => {
      const moviePopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

      const popularKidsUrl = getDiscoverUrl(
        'certification_country=US&certification.lte=G&sort_by=popularity.desc'
      );

      movieDispatch({ type: actions.STATUS, payload: { status: 'loading' } });

      Promise.all([fetch(moviePopularUrl), fetch(popularKidsUrl)])
        .then((responses) => {
          return Promise.all(
            responses.map((response) => {
              if (!response.ok) throw new Error('HTTP wrong');
              return response.json();
            })
          );
        })
        .then((data) => {
          movieDispatch({
            type: actions.GET_POPULAR,
            payload: { value: data[0].results },
          });
          movieDispatch({
            type: actions.GET_LIST,
            payload: { value: data[1].results, title: 'Popular Kids Movies' },
          });
          movieDispatch({
            type: actions.STATUS,
            payload: { status: 'resolved' },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getMoviePopular();
    return () => {};
  }, []);

  //TODO change the listboard using map. take the data array.
  // if this is done, all done.
  // then work with form. for movie, tv.
  // then detail page

  console.log(movieState.movielist);

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
