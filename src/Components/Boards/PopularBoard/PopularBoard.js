import PropTypes from 'prop-types';
import React from 'react';
import styles from './PopularBoard.module.css';

const PopularBoard = ({ children }) => {
  // 6 posters in one line 6 global variable
  return <div className={styles.popularBoard}>{children}</div>;
};

PopularBoard.propTypes = {
  children: PropTypes.node,
};

export default PopularBoard;
