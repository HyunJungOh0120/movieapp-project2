import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="searchInput"></label>
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        className={styles.searchInput}
      />
      <button className={styles.searchBtn}>
        <FontAwesomeIcon icon="search" />
      </button>
    </form>
  );
};

export default SearchForm;
