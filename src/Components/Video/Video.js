import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../UI/Button/Button';
import styles from './Video.module.css';

const Video = ({ isClicked, videoKey, onWatchHandler }) => {
  const className = isClicked ? styles.container : styles.hidden;

  return (
    <div className={className}>
      <Button
        className={styles.exitBtn}
        onClick={() => {
          onWatchHandler();
        }}
      >
        <FontAwesomeIcon icon={['fas', 'times']} />
      </Button>
      <iframe
        id="ytplayer"
        type="text/html"
        width="960"
        height="540"
        src={`https://www.youtube-nocookie.com/embed/${videoKey}?fs=0&modestbranding=1&playsinline=1`}
        title="YouTube video about trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

Video.propTypes = {
  videoKey: PropTypes.string,
  isClicked: PropTypes.bool,
  onWatchHandler: PropTypes.func,
};

export default Video;
