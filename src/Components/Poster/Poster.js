import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import styles from './Poster.module.css';

const Poster = ({ posterPath, title, size = 'small', id }) => {
  const imgUrl = posterPath
    ? `${IMG_URL}${IMG_W500_SIZE}${posterPath}`
    : '../../img/green.jpg';

  const className = size === 'big' ? styles.poster : styles.smallPoster;

  return (
    <Link to={`/detail?id=${id}`}>
      <div className={className}>
        <img src={imgUrl} alt={title} id={id} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

Poster.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.number,
};

export default Poster;
