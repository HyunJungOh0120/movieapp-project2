import PropTypes from 'prop-types';
import React from 'react';
import styles from './PopularBoard.module.css';
import Paginator from '../Paginator/Paginator';

const PopularBoard = ({ popularList, mediaType }) => {
  // 6 posters in one line 6 global variable
  return (
    <div className={styles.popularBoard}>
      {<Paginator dataArr={popularList} mediaType={mediaType} />}
    </div>
  );
};

PopularBoard.propTypes = {
  popularList: PropTypes.array,
  mediaType: PropTypes.string,
};

export default PopularBoard;
