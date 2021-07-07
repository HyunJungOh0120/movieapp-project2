import queryString from 'query-string';
import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useGenreSearch from '../../Helpers/useGenreSearch';
import Poster from '../Poster/Poster';
import styles from './GenreResults.module.css';

const GenreResults = () => {
  const { search } = useLocation();
  const { genre: genreId } = queryString.parse(search);

  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, results, hasMore } = useGenreSearch(
    genreId,
    pageNumber
  );

  const observer = useRef();
  const lastResultRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('visible');
          setPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className={styles.genreResults}>
      {results.map((result, index) => {
        if (results.length === index + 1) {
          return (
            <div ref={lastResultRef}>
              <Poster
                key={Math.random()}
                posterPath={result.poster_path}
                title={result.title}
                size="big"
              />
            </div>
          );
        } else {
          return (
            <div>
              <Poster
                key={Math.random()}
                posterPath={result.poster_path}
                title={result.title}
                size="big"
              />
            </div>
          );
        }
      })}

      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
    </div>
  );
};

export default GenreResults;
