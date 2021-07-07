import PropTypes from 'prop-types';
import React from 'react';
import styles from './CategoryBoard.module.css';

const CategoryBoard = ({ children }) => {
  return <div className={styles.categoryBoard}>{children}</div>;
};

CategoryBoard.propTypes = {
  children: PropTypes.node,
};

export default CategoryBoard;
