import React from 'react';
import PropTypes from 'prop-types';

import CategoryBoard from '../CategoryBoard/CategoryBoard';
import Paginator from '../Paginator/Paginator';
import styles from './ListBoard.module.css';
const ListBoard = ({ data }) => {
  return (
    <div className={styles.listBoard}>
      <CategoryBoard>
        <Paginator
          dataArr={data}
          mediaType="movie"
          category="Popular Movies"
          size="small"
        />
      </CategoryBoard>
    </div>
  );
};

ListBoard.propTypes = {
  data: PropTypes.array,
};

export default ListBoard;
