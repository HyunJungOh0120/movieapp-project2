import React from 'react';
import ListBoard from '../Boards/ListBoard/ListBoard';
import MainBoard from '../Boards/MainBoard/MainBoard';
import Page from '../UI/Page/Page';
const MainPage = () => {
  return (
    <>
      <MainBoard mediaType="movie" />
      <Page>
        <ListBoard />
      </Page>
    </>
  );
};

export default MainPage;
