import React from 'react';
import TvPopular from '../../Data/TvPopular';
import BillBoard from '../BillBoard/BillBoard';
import Paginator from '../Paginator/Paginator';
import PopularBoard from '../PopularBoard/PopularBoard';
import styles from './MainPage.module.css';

const { results: tvPopular } = TvPopular;

const MainPage = () => {
  return (
    <div>
      <div className={styles.mainBoard}>
        <BillBoard billBoard={tvPopular[11]} mediaType="tv" />
        <PopularBoard popularList={tvPopular} mediaType="tv" />
      </div>
      <div>
        <Paginator />
      </div>
    </div>
  );
};

export default MainPage;
