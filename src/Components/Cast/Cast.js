import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import styles from './Cast.module.css';

const Cast = ({ id, name, character, profile_path }) => {
  const imgUrl = profile_path
    ? `${IMG_URL}${IMG_W500_SIZE}${profile_path}`
    : ``;
  return (
    <div id={id} className={styles.castBox}>
      <Link to={`/search?query=${name}`}>
        <img src={imgUrl} alt={name} className={styles.profile} />
      </Link>
      <p>{name}</p>
      <p>{character}</p>
    </div>
  );
};

Cast.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};

export default Cast;