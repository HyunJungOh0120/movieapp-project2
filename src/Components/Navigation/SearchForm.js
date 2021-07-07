import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import { Link, useLocation } from 'react-router-dom';

const SearchForm = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className={styles.searchForm}>
      <label htmlFor="searchInput"></label>
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        className={styles.searchInput}
        value={searchInput}
        onChange={changeHandler}
      />
      <button className={styles.searchBtn} onClick={submitHandler}>
        <Link
          to={
            searchInput
              ? `/search?query=${searchInput}`
              : `${location.pathname}${location.search}`
          }
        >
          <FontAwesomeIcon icon="search" />
        </Link>
      </button>
    </form>
  );
};

export default SearchForm;
