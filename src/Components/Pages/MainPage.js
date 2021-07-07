import React from 'react';
import ListBoard from '../ListBoard/ListBoard';
import MainBoard from '../MainBoard/MainBoard';

const MainPage = () => {
  return (
    <div>
      <MainBoard mediaType="movie" />

      <ListBoard />
    </div>
  );
};

export default MainPage;
