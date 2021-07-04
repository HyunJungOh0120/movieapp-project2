import React from 'react';
//import styles from './MainPage.module.css';
import TvPopular from '../../Data/TvPopular';
import BillBoard from '../BillBoard/BillBoard';
import PopularBoard from '../PopularBoard/PopularBoard';

const { results: tvPopular } = TvPopular;

const MainPage = () => {
  return (
    <div>
      <BillBoard billBoard={tvPopular[2]} mediaType="tv" />
      <PopularBoard popularList={tvPopular} mediaType="tv" />
    </div>
  );
};

export default MainPage;
