import PropTypes from 'prop-types';
import React from 'react';
import TvGenreList from '../../Data/TvGenreList';
// HELPERS
import { IMG_ORIGINAL_SIZE, IMG_URL } from '../../Helpers/Helpers';
import Rates from '../Rates/Rates';
import styles from './BillBoard.module.css';

const BillBoard = ({ billBoard }) => {
  const imgUrl = `${IMG_URL}${IMG_ORIGINAL_SIZE}${billBoard.backdrop_path}`;

  const { genres } = TvGenreList;

  const currGenreArray = genres.filter((genre) =>
    billBoard.genre_ids.includes(genre.id)
  );

  //   const Rates = ({ rate }) => {
  //     if (!rate) return <></>;

  //     const { calcRate, rest } = getRate(rate, standard);
  //     console.log(calcRate, rest); // ex) 4 , 1

  //     const calcRateArr = [];
  //     for (let i = 0; i < calcRate; i++) {
  //       calcRateArr.push('+');
  //     }
  //     for (let i = 0; i < rest; i++) {
  //       calcRateArr.push('-');
  //     }

  //     return (
  //       <div className={styles.rates}>
  //         {calcRateArr.map((el, i) => {
  //           if (el === '+') {
  //             return (
  //               <FontAwesomeIcon
  //                 icon={['fas', 'star']}
  //                 key={i}
  //                 title="solidStar"
  //               />
  //             );
  //           } else {
  //             return (
  //               <FontAwesomeIcon
  //                 icon={['far', 'star']}
  //                 key={i}
  //                 title="emptyStar"
  //               />
  //             );
  //           }
  //         })}
  //       </div>
  //     );
  //   };

  const Genres = ({ genre }) => {
    return <p className={styles.genre}>{genre.name}</p>;
  };

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

          {currGenreArray.map((genre) => (
            <Genres genre={genre} key={genre.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

BillBoard.propTypes = {
  billBoard: PropTypes.object,
  genres: PropTypes.array,
  vote_average: PropTypes.number,
  genre: PropTypes.object,
  rate: PropTypes.number,
};

export default BillBoard;
