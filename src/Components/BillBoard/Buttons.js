import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import TmdbTvDetail from '../../Data/TmdbTvDetail';
// UI
import Button from '../UI/Button/Button';
import styles from './Buttons.module.css';

const Buttons = (props) => {
  const tvInfo = TmdbTvDetail;
  const [video] = tvInfo.videos.results;
  console.log(video);

  const id = props.billBoardId;
  console.log(id);

  const watchClickHandler = () => {
    console.log('Watch');
  };

  const addClickHandler = () => {
    console.log('Added');
  };
  return (
    <div className={styles.btnBox}>
      <Button onClick={watchClickHandler}>
        <FontAwesomeIcon icon={['fas', 'play']} />
      </Button>
      <Button onClick={addClickHandler}>
        <FontAwesomeIcon icon={['fas', 'plus']} size="lg" />
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  billBoardId: PropTypes.number,
};

export default Buttons;
