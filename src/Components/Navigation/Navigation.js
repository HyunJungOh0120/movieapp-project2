import React from 'react';
import { NavLink } from 'react-router-dom';

import Dropdown from './Dropdown';
import SearchForm from './SearchForm';

import MovieGenreList from '../../Data/MovieGenreList';
import TvGenreList from '../../Data/TvGenreList';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { genres: movieGenres } = MovieGenreList;

  const { genres: tvGenres } = TvGenreList;

  return (
    <div role="navigation" className={styles.nav}>
      <NavLink to="/browse" activeClassName={styles.active}>
        <span className={styles.logo}>🍿</span>
      </NavLink>

      <ul className={styles.main__nav}>
        <li className="nav__menu"></li>

        <li className={styles.nav__link}>
          <NavLink to="/browse/" activeClassName={styles.active}>
            <span>Home</span>
          </NavLink>
        </li>

        <li className={styles.nav__link}>
          <NavLink to="/browse/movie" activeClassName={styles.active}>
            <span>Movies</span>
          </NavLink>
          <Dropdown genres={movieGenres} />
        </li>

        <li className={styles.nav__link}>
          <NavLink to="/browse/tv" activeClassName={styles.active}>
            <span> Tv Show</span>
          </NavLink>
          <Dropdown genres={tvGenres} />
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
            {/* <NavLink to=""></NavLink> */}
            <button>Login</button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Navigation;
