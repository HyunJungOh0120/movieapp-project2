import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dropdown.module.css';

const Dropdown = ({ genres }) => {
  return (
    <ul className={styles.dropDown} aria-level="submenu">
      {genres.map((genre) => (
        <li key={genre.id}>
          <NavLink to={`/genre/${genre.name}`} activeClassName="active">
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
