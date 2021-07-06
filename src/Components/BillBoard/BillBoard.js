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
  console.log(billBoard);
  const [videoKey, setVideoKey] = useState('');

  const backdropPath = billBoard.backdrop_path;
  const title = mediaType === 'tv' ? billBoard.name : billBoard.title;
  const averageRate = billBoard.vote_average;
  const genreIds = billBoard.genre_ids;

  useEffect(() => {
    const id = billBoard.id;
    const getInfo = async () => {
      try {
        const infoUrl = ` https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;
        const res = await fetch(infoUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        setVideoKey(data.videos.results[0].key);
      } catch (error) {
        console.log('💥', error);
      }
    };
    getInfo();
    return () => {};
  }, [billBoard]);

  const imgUrl = backdropPath
    ? `${IMG_URL}${IMG_ORIGINAL_SIZE}${backdropPath}`
    : '';

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

          <Genre mediaGenre={genreIds} mediaType={mediaType} />

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
