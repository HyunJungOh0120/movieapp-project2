import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ genres }) => {
  return (
    <ul className={styles.dropDown} aria-level="submenu">
      {genres.map((genre) => (
        <li key={genre.id}>
          <NavLink
            to={`/browse/movie/genre/${genre.name}`}
            activeClassName="active"
          >
            {genre.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  genres: PropTypes.array,
};

export default Dropdown;
