import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import MovieGenreList from '../../Data/MovieGenreList';
import Dropdown from './Dropdown';
import styles from './Navigation.module.css';
import SearchForm from './SearchForm';

const Navigation = () => {
  const { genres: movieGenres } = MovieGenreList;

  const { pathname } = useLocation();

  const generateClassName = (pathname) => {
    if (pathname === '/browse') return styles.nav;
    if (pathname === '/') return styles.nav;

    return styles.sticky;
  };

  const className = generateClassName(pathname);

  return (
    <div role="navigation" className={className}>
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
          <Link to={`/genre?genre=${movieGenres[0].id}`}>
            <span>Genres</span>
          </Link>
          <Dropdown genres={movieGenres} />
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
            <button></button>
          </div>
        </li>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="tmdb logo"
          className={styles.tmdblogo}
        />
      </div>
    </div>
  );
};

export default Navigation;
