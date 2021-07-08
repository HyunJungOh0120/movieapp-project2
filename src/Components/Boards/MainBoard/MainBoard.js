import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import BillBoard from '../BillBoard/BillBoard';
import { useMain } from '../../MainProvider';
import Paginator from '../../Paginator/Paginator';
import PopularBoard from '../PopularBoard/PopularBoard';
import styles from './MainBoard.module.css';

const getRandomNum = (arr) => Math.floor(Math.random() * arr.length);

const MainBoard = ({ mediaType }) => {
  const [randomNum, setRandomNum] = useState(0);
  const { moviePopulars, status } = useMain();
  const { list: moviePopularList } = moviePopulars;

  const randomBillBoard = moviePopularList[randomNum];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNum = getRandomNum(moviePopularList);
      setRandomNum(randomNum);
    }, 7000);
    return () => clearInterval(interval);
  }, [randomNum, moviePopulars]);

  return (
    <div className={styles.mainBoard}>
      {status === 'idle' && <div>Idle</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <>
          <BillBoard billBoard={randomBillBoard} mediaType={mediaType} />
          <PopularBoard>
            <h2>Popular Movies</h2>
            <Paginator
              dataArr={moviePopularList}
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
