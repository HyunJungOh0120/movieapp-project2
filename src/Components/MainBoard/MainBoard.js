import PropTypes from 'prop-types';
import React from 'react';
import BillBoard from '../BillBoard/BillBoard';
import Paginator from '../Paginator/Paginator';
import PopularBoard from '../PopularBoard/PopularBoard';
import styles from './MainBoard.module.css';

const MainBoard = ({ data, mediaType }) => {
  const getRandomNum = (arr) => Math.floor(Math.random() * arr.length);

  const randomNum = getRandomNum(data);
  return (
    <div className={styles.mainBoard}>
      <BillBoard billBoard={data[randomNum]} mediaType={mediaType} />
      <PopularBoard>
        <Paginator
          dataArr={data}
          mediaType="tv"
          category={`Popular ${mediaType === 'tv' ? 'Tv Shows' : 'Movies'} `}
          size="big"
        />
      </PopularBoard>
    </div>
  );
};

MainBoard.propTypes = {
  data: PropTypes.array,
  mediaType: PropTypes.string,
};

export default MainBoard;
