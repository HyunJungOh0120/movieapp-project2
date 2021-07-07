import React from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';
import Page from '../UI/Page/Page';
const MainPage = () => {
  return (
    <Page>
      <MainBoard mediaType="movie" />
      <ListBoard />
    </Page>
  );
};

export default MainPage;
