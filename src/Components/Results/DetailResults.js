import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getJSON } from '../../Helpers/Helpers';
import Poster from '../Poster/Poster';
import styles from './DetailResults.module.css';

const DetailResults = () => {
  const controller = new AbortController();
  const { signal } = controller;
  const { search } = useLocation();
  const { id } = queryString.parse(search);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;

    const getMovieDetail = async () => {
      try {
        const data = await getJSON(url, signal);
        console.log(data);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetail();
    return () => {
      setTimeout(() => {
        controller.abort(), 4000;
      });
    };
  }, [id]);

  return (
    <div className={styles.detailResults}>
      <section className={styles.section__1}>
        <Poster
          posterPath={details.poster_path}
          title={details.title}
          size="big"
          id={details.id}
        />
      </section>
      <section className={styles.section__2}>section2</section>
      <section className={styles.section__3}>section3</section>
    </div>
  );
};

export default DetailResults;
