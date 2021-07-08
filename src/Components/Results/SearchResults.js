import queryString from 'query-string';
import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useSearch from '../../Helpers/useSearch';
import Poster from '../Poster/Poster';
import Page from '../UI/Page/Page';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const { search } = useLocation();
  const { query } = queryString.parse(search);

  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, results, hasMore, personResult } = useSearch(
    query,
    pageNumber
  );
  console.log(personResult);

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
    <Page>
      <div className={styles.searchQuery}>Results for {query} ...</div>

      <div className={styles.searchLinks}>
        {personResult.length > 1 && (
          <>
            {personResult.map((person) => {
              return (
                <Link to={`/search?query=${person.name}`} key={Math.random()}>
                  <p>{person.name}</p>
                </Link>
              );
            })}
          </>
        )}
      </div>
      <div className={styles.searchResults}>
        {personResult.length === 1 && (
          <>
            {personResult[0].known_for.map((movie) => {
              if (movie.poster_path)
                return (
                  <Poster
                    posterPath={movie.poster_path}
                    title={movie.title}
                    id={movie.id}
                    key={movie.id}
                    size="big"
                  />
                );
            })}
          </>
        )}

        {results.length > 0 && (
          <>
            {results.map((result, index) => {
              if (results.length === index + 1) {
                return (
                  <div ref={lastResultRef} key={Math.random()}>
                    <Poster
                      posterPath={result.poster_path}
                      title={result.title}
                      size="big"
                      id={result.id}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={Math.random()}>
                    <Poster
                      posterPath={result.poster_path}
                      title={result.title}
                      size="big"
                      id={result.id}
                    />
                  </div>
                );
              }
            })}
          </>
        )}
        {/* {results.length === 0 && <Card>No results..</Card>} */}
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
      </div>
    </Page>
  );
};

export default SearchResults;
