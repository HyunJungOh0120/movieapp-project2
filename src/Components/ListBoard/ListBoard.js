import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import CategoryBoard from '../CategoryBoard/CategoryBoard';
import Paginator from '../Paginator/Paginator';
import styles from './ListBoard.module.css';

const ListBoard = ({ data }) => {
  const containerRef = useRef(null);

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

      <div ref={containerRef}>
        <CategoryBoard>
          <Paginator
            dataArr={data}
            mediaType="movie"
            category="Tv Shows on Air"
            size="small"
          />
        </CategoryBoard>
      </div>

      <div ref={containerRef}>
        <CategoryBoard>
          <Paginator
            dataArr={data}
            mediaType="movie"
            category="Movies Now Playing"
            size="small"
          />
        </CategoryBoard>
      </div>
    </div>
  );
};

ListBoard.propTypes = {
  data: PropTypes.array,
};

export default ListBoard;
