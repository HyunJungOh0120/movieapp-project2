import React from 'react';
import { Link } from 'react-router-dom';
import { useMain } from '../MainProvider';
import Button from '../UI/Button/Button';
import styles from './GenreButtons.module.css';

const GenreButtons = () => {
  const { movieGenres } = useMain();

  return (
    <ul className={styles.buttonBox}>
      {movieGenres.map((genre) => (
        <li key={genre.id}>
          <Link to={`/genre?genre=${genre.id}`}>
            <Button>{genre.name}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreButtons;
