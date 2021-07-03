import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import {
  billBoardRateStandard as standard,
  getRate,
} from '../../Helpers/Helpers';
import styles from './Rates.module.css';

const Rates = ({ rate }) => {
  if (!rate) return <></>;

  const { calcRate, rest } = getRate(rate, standard);
  console.log(calcRate, rest); // ex) 4 , 1

  const calcRateArr = [];
  for (let i = 0; i < calcRate; i++) {
    calcRateArr.push('+');
  }
  for (let i = 0; i < rest; i++) {
    calcRateArr.push('-');
  }

  return (
    <div className={styles.rates}>
      {calcRateArr.map((el, i) => {
        if (el === '+') {
          return (
            <FontAwesomeIcon
              icon={['fas', 'star']}
              key={i}
              title="solidStar"
              className={styles.ratedStar}
            />
          );
        } else {
          return (
            <FontAwesomeIcon
              icon={['far', 'star']}
              key={i}
              title="emptyStar"
              className={styles.star}
            />
          );
        }
      })}
    </div>
  );
};

Rates.propTypes = {
  rate: PropTypes.number,
};

export default Rates;
