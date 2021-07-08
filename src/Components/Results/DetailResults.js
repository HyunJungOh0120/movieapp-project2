import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getJSON, IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import Genre from '../Genre/Genre';
import CastPaginator from '../Paginator/CastPaginator';
import Card from '../UI/Card/Card';
import styles from './DetailResults.module.css';

const genreIds = (arr) => arr.map((genre) => genre.id);

const DetailResults = () => {
  const controller = new AbortController();
  const { signal } = controller;
  const { search } = useLocation();
  const { id } = queryString.parse(search);
  const [details, setDetails] = useState({});
  const [omdbDetails, setOmdbDetails] = useState({});
  const [casts, setCasts] = useState([]);

  const cast1 = casts[1];

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    const getMovieDetail = async () => {
      try {
        const data = await Promise.all([
          getJSON(url, signal),
          getJSON(castUrl, signal),
        ]);
        console.log(data[1]);

        setDetails(data[0]);
        setCasts(data[1].cast);
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

  useEffect(() => {
    const omdbUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${details.imdb_id}`;

    const getOmdbDetail = async () => {
      try {
        const data = await getJSON(omdbUrl, signal);
        console.log(data);
        setOmdbDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOmdbDetail();
    return () => {
      setTimeout(() => {
        controller.abort(), 4000;
      });
    };
  }, [details]);
  console.log(casts);

  const imgUrl = details.poster_path
    ? `${IMG_URL}${IMG_W500_SIZE}${details.poster_path}`
    : ``;

  return (
    <div className={styles.detailResults}>
      <section className={styles.section__1}>
        <div className={styles.posterBox}>
          <img src={details.poster_path ? imgUrl : ''} alt="poster" />
        </div>
        <Card className={styles.infoCard}>
          <h2 className={styles.movieTitle}>
            {details.title ? details.title : 'title'}
          </h2>
          <h3>
            {details.original_title ? details.original_title : 'Original Title'}
          </h3>
          <article>
            <h3>Genre</h3>
            {details.genres && <Genre mediaGenre={genreIds(details.genres)} />}
          </article>
          <article>
            <h3>Release Date</h3>
            <p>{details.release_date && details.release_date}</p>
          </article>
          <article>
            <h3>Length</h3>
            <p>{details.runtime && details.runtime}</p>
          </article>
          <article>
            <h3>Director</h3>
            <p>{omdbDetails.Director && omdbDetails.Director}</p>
          </article>
        </Card>
      </section>
      <section className={styles.section__2}>
        <div>
          <h2>Rating</h2>
          {omdbDetails.Ratings && (
            <div className={styles.ratingBox}>
              {omdbDetails.Ratings.map((rating, index) => {
                return (
                  <div key={index}>
                    <p>{rating.Value}</p>
                    <p>{rating.Source}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <h2>StoryLine</h2>
          <div className={styles.storyLine}>
            {details.overview && <p>{details.overview}</p>}
          </div>
        </div>

        <div className={styles.castBox}>
          <h2>Casts</h2>
          {cast1 && <CastPaginator dataArr={casts} />}
        </div>
      </section>
      <section className={styles.section__3}>section3</section>
    </div>
  );
};

export default DetailResults;
