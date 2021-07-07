import React from 'react';

import { useMain } from '../MainProvider';

const MoviePage = () => {
  const { movieGenres } = useMain();
  console.log(movieGenres);

  return <div>hi</div>;
};

export default MoviePage;
