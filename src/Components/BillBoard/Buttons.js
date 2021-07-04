import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

// UI
import Button from '../UI/Button/Button';
import styles from './Buttons.module.css';

const Buttons = (props) => {
  return (
    <div className={styles.btnBox}>
      <Button onClick={props.onWatchHandler}>
        <FontAwesomeIcon icon={['fas', 'play']} />
      </Button>
      <Button onClick={props.onAddHandler}>
        <FontAwesomeIcon icon={['fas', 'plus']} size="lg" />
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  onWatchHandler: PropTypes.func,
  onAddHandler: PropTypes.func,
};

export default Buttons;
