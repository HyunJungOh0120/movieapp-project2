import PropTypes from 'prop-types';
import React from 'react';
import { IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import styles from './Poster.module.css';

const Poster = ({ posterPath, title, size = 'small' }) => {
  const imgUrl = `${IMG_URL}${IMG_W500_SIZE}${posterPath}`;

  const className = size === 'big' ? styles.bigPoster : styles.smallPoster;

  return (
    <div className={className}>
      <img src={imgUrl} alt="Popular show's poster" />
      <p>{title}</p>
    </div>
  );
};

Poster.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
};

export default Poster;
