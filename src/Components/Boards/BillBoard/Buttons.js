import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
// UI
import Button from '../../UI/Button/Button';
import styles from './Buttons.module.css';

const Buttons = (props) => {
  return (
    <div className={styles.btnBox}>
      <Button
        onClick={props.onWatchHandler}
        className={styles.clickBtn}
        disabled={props.disabled}
      >
        <FontAwesomeIcon icon={['fas', 'play']} />
      </Button>
      <Button
        onClick={props.onAddHandler}
        className={styles.clickBtn}
        disabled={props.disabled}
      >
        <FontAwesomeIcon icon={['fas', 'plus']} size="lg" />
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  onWatchHandler: PropTypes.func,
  onAddHandler: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Buttons;
