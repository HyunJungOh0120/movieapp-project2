import { useEffect, useState } from 'react';

const useGenreSearch = (genreId, pageNumber) => {
  const controller = new AbortController();
  const { signal } = controller;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setResults([]);
  }, [genreId]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
    const getResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error('HTTP WROING');

        const data = await res.json();
        setResults((prevResults) => [...prevResults, ...data.results]);
        setLoading(false);
        setHasMore(pageNumber < data.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getResults();
    return () => {
      setTimeout(() => controller.abort(), 4000);
    };
  }, [genreId, pageNumber]);

  return { loading, error, results, hasMore };
};

export default useGenreSearch;
