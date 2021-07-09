import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMain } from '../MainProvider';
import styles from './Genre.module.css';

const Genre = ({ mediaGenre }) => {
  const { movieGenres: totalGenres } = useMain();

  const genreText = () => {
    const currGenreArray = totalGenres.filter((genre) =>
      mediaGenre.includes(genre.id)
    );
    return currGenreArray.map((genre) => (
      <Link to={`/genre?genre=${genre.id}`} key={genre.id}>
        <p className={styles.genre}>{genre.name}</p>
      </Link>
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
};

export default Genre;
