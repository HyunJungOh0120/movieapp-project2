import PropTypes from 'prop-types';
import React from 'react';
import { useMain } from '../MainProvider';
import styles from './Genre.module.css';

const Genre = ({ mediaGenre, mediaType }) => {
  const { mainState } = useMain();

  const { genres: totalGenres } = mainState[mediaType];

  const genreText = () => {
    const currGenreArray = totalGenres.filter((genre) =>
      mediaGenre.includes(genre.id)
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
  mediaGenre: PropTypes.array,
  mediaType: PropTypes.string,
};

export default Genre;
