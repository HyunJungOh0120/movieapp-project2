import PropTypes from 'prop-types';
import React from 'react';
import { IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import styles from './Poster.module.css';

const Poster = ({ posterPath, title }) => {
  const imgUrl = `${IMG_URL}${IMG_W500_SIZE}${posterPath}`;
  return (
    <div className={styles.poster}>
      <img src={imgUrl} alt="Popular show's poster" />
      <p>{title}</p>
    </div>
  );
};

Poster.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
};

export default Poster;
