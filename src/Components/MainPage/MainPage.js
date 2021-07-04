import React from 'react';
//import styles from './MainPage.module.css';
import TvPopular from '../../Data/TvPopular';
import BillBoard from '../BillBoard/BillBoard';

const { results: tvPopular } = TvPopular;

const MainPage = () => {
  return (
    <div>
      <BillBoard billBoard={tvPopular[16]} />
    </div>
  );
};

export default MainPage;
