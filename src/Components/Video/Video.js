import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../UI/Button/Button';
import styles from './Video.module.css';

const Video = (props) => {
  const className = props.isClicked ? styles.container : styles.hidden;
  return (
    <div className={className}>
      <Button
        className={styles.exitBtn}
        onClick={() => {
          props.onWatchHandler();
        }}
      >
        <FontAwesomeIcon icon={['fas', 'times']} />
      </Button>
      <iframe
        id="ytplayer"
        type="text/html"
        width="960"
        height="540"
        src={`https://www.youtube-nocookie.com/embed/${props.videoKey}?`}
        title="YouTube video about trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        loading="lazy"
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
