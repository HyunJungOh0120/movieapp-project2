import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import TvGenreList from '../../Data/TvGenreList';
// HELPERS
import { IMG_ORIGINAL_SIZE, IMG_URL } from '../../Helpers/Helpers';
import Rates from '../Rates/Rates';
import Genre from '../Genre/Genre';
import styles from './BillBoard.module.css';

const BillBoard = ({ billBoard }) => {
  const imgUrl = `${IMG_URL}${IMG_ORIGINAL_SIZE}${billBoard.backdrop_path}`;

  const { genres } = TvGenreList;

  return (
    <div className={styles.billBoard}>
      <div className={styles.imgBox}>
        <img
          src={imgUrl}
          alt="Bill board's backdrop image"
          className={styles.img}
        />
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{billBoard.name}</h1>
        <div className={styles.details}>
          <Rates rate={billBoard.vote_average} />

          <Genre totalGenres={genres} billBoardGenres={billBoard.genre_ids} />
          <div className={styles.btnBox}>
            <button>
              <FontAwesomeIcon icon={['fas', 'play']} />
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

BillBoard.propTypes = {
  billBoard: PropTypes.object,
  genres: PropTypes.array,
  vote_average: PropTypes.number,

  rate: PropTypes.number,
};

export default BillBoard;
