import queryString from 'query-string';
import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import useSearch from '../../Helpers/useSearch';
import Poster from '../Poster/Poster';
import ResultPage from '../UI/Page/Page';

const SearchPage = () => {
  const { search } = useLocation();
  const { query } = queryString.parse(search);

  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, results, hasMore } = useSearch(query, pageNumber);

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

  const style = {
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridAutoRows: '32rem',
    gridgap: '2rem',
  };

  return (
    <ResultPage>
      <div style={style}>
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

        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
      </div>
    </ResultPage>
  );
};

export default SearchPage;
