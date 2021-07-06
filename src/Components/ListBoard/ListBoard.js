import PropTypes from 'prop-types';
import React from 'react';
import CategoryBoard from '../CategoryBoard/CategoryBoard';
import Paginator from '../Paginator/Paginator';
import styles from './ListBoard.module.css';

const ListBoard = ({ dataList }) => {
  console.log(dataList);
  return (
    <div className={styles.listBoard}>
      {dataList.map((data) => (
        <CategoryBoard key={Math.random()}>
          <Paginator
            dataArr={data.list}
            // mediaType={dat}
            category={data.genre.name}
            size="small"
          />
        </CategoryBoard>
      ))}
    </div>
  );
};

ListBoard.propTypes = {
  dataList: PropTypes.array,
};

export default ListBoard;
