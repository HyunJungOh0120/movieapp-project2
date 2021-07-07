import React from 'react';
import { Link } from 'react-router-dom';
import MovieGenreList from '../../Data/MovieGenreList';

import Dropdown from './Dropdown';
import styles from './Navigation.module.css';
import SearchForm from './SearchForm';

const Navigation = () => {
  const { genres: movieGenres } = MovieGenreList;

  return (
    <div role="navigation" className={styles.nav}>
      <Link to="/browse">
        <span className={styles.logo}>🍿</span>
      </Link>

      <ul className={styles.main__nav}>
        <li className="nav__menu"></li>

        <li className={styles.nav__link}>
          <Link to="/browse">
            <span>Home</span>
          </Link>
        </li>

        <li className={styles.nav__link}>
          <Link to="/movie">
            <span>Movies</span>
          </Link>
          <Dropdown genres={movieGenres} mediaType="movie" />
        </li>
      </ul>

      <div className={styles.sub__nav}>
        <li className={styles.nav__element}>
          <div className="searchBox">
            <SearchForm />
          </div>
        </li>

        <li className={styles.nav__element}>
          <div className="loginBox">
            <button>Login</button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Navigation;
