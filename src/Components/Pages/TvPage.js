import React, { useEffect, useReducer } from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';

const actions = {
  STATUS: 'status',
  GET_POPULAR: 'get_popular',
};

const tvReducer = (state, action) => {
  switch (action.type) {
    case actions.STATUS:
      return { ...state, status: action.payload.status };

    case actions.GET_POPULAR:
      return { ...state, tvPopular: action.payload.value };
    default:
      return state;
  }
};

const TvPage = () => {
  const [tvState, tvDispatch] = useReducer(tvReducer, {
    status: 'idle',
    tvPopular: [],
  });

  useEffect(() => {
    const getTvPopular = async () => {
      try {
        const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

        tvDispatch({ type: actions.STATUS, payload: { status: 'loading' } });
        const res = await fetch(tvPopularUrl);
        if (!res.ok) {
          throw new Error(`HTTP wrong,`);
        }

        const data = await res.json();
        const populars = data.results;
        //console.log(populars);
        tvDispatch({
          type: actions.GET_POPULAR,
          payload: { value: populars },
        });
        tvDispatch({
          type: actions.STATUS,
          payload: { status: 'resolved' },
        });
      } catch (error) {
        console.log(error);
      }
    };

    getTvPopular();

    return () => {};
  }, []);

  return (
    <div>
      {tvState.status === 'idle' && <p>Idle</p>}
      {tvState.status === 'loading' && <p>Loading...</p>}
      {tvState.status === 'resolved' && (
        <>
          <MainBoard data={tvState.tvPopular} mediaType="tv" />
          <ListBoard
            data={tvState.tvPopular}
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
