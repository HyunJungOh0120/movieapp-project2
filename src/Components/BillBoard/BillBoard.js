import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// HELPERS
import { IMG_ORIGINAL_SIZE, IMG_URL } from '../../Helpers/Helpers';
// COMPONENTS
import Genre from '../Genre/Genre';
import Rates from '../Rates/Rates';
import Video from '../Video/Video';
import styles from './BillBoard.module.css';
import Buttons from './Buttons';

const BillBoard = ({ billBoard, mediaType }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [genres, setGenres] = useState([]);
  const [videoKey, setVideoKey] = useState('');

  const backdropPath = billBoard.backdrop_path;
  const title = mediaType === 'tv' ? billBoard.name : billBoard.title;
  const averageRate = billBoard.vote_average;
  const genreIds = billBoard.genre_ids;

  useEffect(() => {
    const getGenres = async () => {
      const genreUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

      const res = await fetch(genreUrl);
      const { genres } = await res.json();

      setGenres(genres);
    };
    getGenres();

    return () => {};
  }, []);

  useEffect(() => {
    const id = billBoard.id;
    const getInfo = async () => {
      const infoUrl = ` https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;
      const res = await fetch(infoUrl);
      const data = await res.json();
      console.log(data.videos.results[0]);
      setVideoKey(data.videos.results[0].key);
    };
    getInfo();
    return () => {};
  }, []);

  const imgUrl = `${IMG_URL}${IMG_ORIGINAL_SIZE}${backdropPath}`;

  const watchClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const addClickHandler = () => {
    console.log('Added');
  };

  return (
    <div className={styles.billBoard}>
      <Video
        videoKey={videoKey}
        isClicked={isClicked}
        onWatchHandler={watchClickHandler}
      />
      <div className={styles.imgBox}>
        <img
          src={imgUrl}
          alt="Bill board's backdrop image"
          className={styles.img}
        />
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.details}>
          <Rates rate={averageRate} />

          <Genre totalGenres={genres} billBoardGenres={genreIds} />

          <Buttons
            onWatchHandler={watchClickHandler}
            onAddHandler={addClickHandler}
            disabled={isClicked}
          />
        </div>
      </div>
    </div>
  );
};

BillBoard.propTypes = {
  billBoard: PropTypes.object,
  genres: PropTypes.array,
  vote_average: PropTypes.number,
  mediaType: PropTypes.string,
  rate: PropTypes.number,
};

export default BillBoard;
