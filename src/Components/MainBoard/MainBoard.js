import PropTypes from 'prop-types';
import React from 'react';
import BillBoard from '../BillBoard/BillBoard';
import { useMain } from '../MainProvider';
import Paginator from '../Paginator/Paginator';
import PopularBoard from '../PopularBoard/PopularBoard';
import styles from './MainBoard.module.css';

const MainBoard = ({ mediaType }) => {
  const { moviePopulars, status } = useMain();
  const getRandomNum = (arr) => Math.floor(Math.random() * arr.length);
  console.log(moviePopulars);

  const randomNum = getRandomNum(moviePopulars.list);
  return (
    <div className={styles.mainBoard}>
      {status === 'idle' && <div>Idle</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <>
          <BillBoard
            billBoard={moviePopulars.list[randomNum]}
            mediaType={mediaType}
          />
          <PopularBoard>
            <Paginator
              dataArr={moviePopulars.list}
              category="Popular Movies"
              size="big"
            />
          </PopularBoard>
        </>
      )}
    </div>
  );
};

MainBoard.propTypes = {
  mediaType: PropTypes.string,
};

export default MainBoard;
