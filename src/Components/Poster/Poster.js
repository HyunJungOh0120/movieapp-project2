import PropTypes from 'prop-types';
import React from 'react';
import { IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import styles from './Poster.module.css';

const Poster = ({ posterPath, title, size = 'small' }) => {
  const imgUrl = posterPath
    ? `${IMG_URL}${IMG_W500_SIZE}${posterPath}`
    : '../../img/green.jpg';

  const className = size === 'big' ? styles.poster : styles.smallPoster;

  return (
    <div className={className}>
      <img src={imgUrl} alt={title} />
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
