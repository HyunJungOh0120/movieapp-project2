import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getJSON, IMG_URL, IMG_W500_SIZE } from '../../Helpers/Helpers';
import Genre from '../Genre/Genre';
import CastPaginator from '../Paginator/CastPaginator';
import Paginator from '../Paginator/Paginator';
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
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=568d70d9321d73f65ec37dc872130204&append_to_response=videos,images`;
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=568d70d9321d73f65ec37dc872130204&language=en-US`;
    const recommendUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=568d70d9321d73f65ec37dc872130204&language=en-US`;

    const getMovieDetail = async () => {
      try {
        const data = await Promise.all([
          getJSON(url, signal),
          getJSON(castUrl, signal),
          getJSON(recommendUrl, signal),
        ]);

        setDetails(data[0]);
        setCasts(data[1].cast);
        setRecommends(data[2].results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetail();

    return () => {
      setTimeout(() => {
        controller.abort();
      }, 4000);
    };
  }, [id]);

  useEffect(() => {
    const omdbUrl = `https://www.omdbapi.com/?apikey=e54431d3&i=${details.imdb_id}`;

    const getOmdbDetail = async () => {
      try {
        const data = await getJSON(omdbUrl, signal);

        setOmdbDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOmdbDetail();

    return () => {
      setTimeout(() => {
        controller.abort();
      }, 4000);
    };
  }, [details]);

  const imgUrl = details.poster_path
    ? `${IMG_URL}${IMG_W500_SIZE}${details.poster_path}`
    : ``;

  return (
    <div className={styles.detailResults}>
      <section className={styles.section__1}>
        <div className={styles.posterBox}>
          <img
            src={(details.poster_path && imgUrl) || omdbDetails.Poster}
            alt="poster"
          />
        </div>
        <div className={styles.infoCard}>
          <h2 className={styles.movieTitle}>
            {details.title && details.title}
            {!details.title && omdbDetails.Title}
          </h2>
          <h3>{details.original_title && details.original_title}</h3>
          <article>
            <h3>Genre</h3>
            {(details.genres && (
              <Genre mediaGenre={genreIds(details.genres)} />
            )) || <p>{omdbDetails.Genre}</p> || <p>No Info..</p>}
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
            <p>{!omdbDetails.Director && 'No director Info..'}</p>
          </article>
        </div>
        <div className={styles.videoBox}>
          {details?.videos?.results.length > 0 && (
            <iframe
              width="400"
              height="210"
              id="ytplayer"
              type="text/html"
              src={`https://www.youtube-nocookie.com/embed/${details.videos.results[0].key}?fs=0&modestbranding=1&playsinline=1`}
              title="Trailer video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>
      <section className={styles.section__2}>
        <div>
          <h2>Rating</h2>
          {(omdbDetails.Ratings && (
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
          )) || (
              <div className={styles.ratingBox}>
                <p>{details.vote_average}</p>
              </div>
            ) || (
              <div className={styles.ratingBox}>
                <p>No ratings..</p>
              </div>
            )}
        </div>

        <div>
          <h2>StoryLine</h2>
          <div className={styles.storyLine}>
            {details.overview && <p>{details.overview}</p>}
            {!details.overview && <p>{omdbDetails.plot}</p>}
            {!details.overview && !omdbDetails.plot && (
              <p>Sorry, no story lines..</p>
            )}
          </div>
        </div>

        <div className={styles.castBox}>
          <h2>Casts</h2>
          <div className={styles.row}>
            {casts && <CastPaginator dataArr={casts} />}
            {!casts && <p>Sorry, No casts information..</p>}
          </div>
        </div>

        <div className={styles.recommendBox}>
          <h2>Recommendations</h2>
          <div className={styles.row}>
            {recommends && <Paginator dataArr={recommends} size="big" />}
            {recommends.length === 0 && <div>No recommendations.. Sorry!</div>}
            {!recommends && <p>No recommendations..</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailResults;
