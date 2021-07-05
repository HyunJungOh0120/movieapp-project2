import PropTypes from 'prop-types';
import React from 'react';
import Paginator from '../Paginator/Paginator';
import styles from './PopularBoard.module.css';

const PopularBoard = ({ popularList, mediaType }) => {
  // 6 posters in one line 6 global variable
  return (
    <div className={styles.popularBoard}>
      <Paginator
        dataArr={popularList}
        mediaType={mediaType}
        category="Popular"
        size="big"
      />
    </div>
  );
};

PopularBoard.propTypes = {
  popularList: PropTypes.array,
  mediaType: PropTypes.string,
};

export default PopularBoard;
