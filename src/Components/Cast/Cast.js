import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import styles from './Cast.module.css';
import manPic from './manpic.jpg';
import womanPic from './womanpic.jpg';

const Cast = ({ id, name, character, profile_path, gender }) => {
  const profilePath = (path) => {
    if (path) {
      return `${IMG_URL}${IMG_W500_SIZE}${path}`;
    }
    if (!path && gender === 0) {
      return manPic;
    }
    if (!path && gender === 1) {
      return womanPic;
    }
  };

  return (
    <div id={id} className={styles.castBox}>
      <Link to={`/search?query=${name}`}>
        <img
          src={profilePath(profile_path)}
          alt={name}
          className={styles.profile}
        />
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
  gender: PropTypes.number,
};

export default Cast;
