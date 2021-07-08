import { useEffect, useState } from 'react';
import { getJSON } from './Helpers';

const useSearch = (query, pageNumber) => {
  const controller = new AbortController();
  const { signal } = controller;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [personResult, setPersonResult] = useState([]);

  useEffect(() => {
    setResults([]);
  }, [query]);

  useEffect(() => {
    const personUrl = `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`;

    const getPersonResult = async () => {
      const datas = await getJSON(personUrl, signal);

      const personResult = datas.results;

      const persons = personResult.map((person) => {
        return { name: person.name, known_for: person.known_for };
      });

      const filtered = persons
        .map((person) => {
          return {
            name: person.name,
            known_for: person.known_for.filter(
              (movie) => movie.media_type !== 'tv'
            ),
          };
        })
        .filter((person) => person.known_for.length > 0);

      setPersonResult(filtered);
    };
    getPersonResult();

    return () => {
      setTimeout(() => controller.abort(), 4000);
    };
  }, [query]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`;

    const getResults = async () => {
      setLoading(true);
      try {
        const data = await getJSON(url, signal);
        console.log('movie', data.results);
        setResults((prevResults) => [
          ...new Set([...prevResults, ...data.results]),
        ]);
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
  }, [query, pageNumber]);

  return { loading, error, results, hasMore, personResult };
};

export default useSearch;
