import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const searchQuery = useQuery().get('query');
  console.log(searchQuery);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        setStatus('loading');
        const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

        const res = await fetch(searchUrl);
        const data = await res.json();
        setResults((prevResults) => [...prevResults, data.results]);
        setPage(data.page);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('error');
      }
    };

    getSearchData();
  }, [searchQuery]);
  console.log(results);
  console.log(page);
  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'resolved' && (
        <div>
          <h1>{searchQuery}</h1>
          <div>hi</div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
