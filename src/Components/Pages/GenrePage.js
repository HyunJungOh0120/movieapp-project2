import React from 'react';
import GenreButtons from '../GenreButtons/GenreButtons';
import GenreResults from '../Results/GenreResults';
import Page from '../UI/Page/Page';

// genres =[ { id:28}, {name: 'Action}]
const GenrePage = () => {
  return (
    <Page>
      <GenreButtons />
      <GenreResults />
    </Page>
  );
};

export default GenrePage;
