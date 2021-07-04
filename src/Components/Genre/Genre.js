import PropTypes from 'prop-types';
import React from 'react';
import styles from './Genre.module.css';

const Genre = ({ totalGenres, billBoardGenres }) => {
  const genreText = () => {
    const currGenreArray = totalGenres.filter((genre) =>
      billBoardGenres.includes(genre.id)
    );
    return currGenreArray.map((genre) => (
      <p className={styles.genre} key={genre.id}>
        {genre.name}
      </p>
    ));
  };

  return (
    <div className={styles.genreBox}>
      {totalGenres && genreText()}
      {!totalGenres && <p>Loading...</p>}
    </div>
  );
};

Genre.propTypes = {
  totalGenres: PropTypes.array,
  billBoardGenres: PropTypes.array,
};

export default Genre;
