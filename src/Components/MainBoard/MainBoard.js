import React from 'react';
import PropTypes from 'prop-types';

import BillBoard from '../BillBoard/BillBoard';
import PopularBoard from '../PopularBoard/PopularBoard';
import Paginator from '../Paginator/Paginator';
import styles from './MainBoard.module.css';
const MainBoard = ({ data }) => {
  return (
    <div className={styles.mainBoard}>
      <BillBoard billBoard={data[11]} mediaType="tv" />
      <PopularBoard>
        <Paginator
          dataArr={data}
          mediaType="tv"
          category="Popular Tv Shows"
          size="big"
        />
      </PopularBoard>
    </div>
  );
};

MainBoard.propTypes = {
  data: PropTypes.array,
};

export default MainBoard;
