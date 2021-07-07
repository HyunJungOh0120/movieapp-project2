import PropTypes from 'prop-types';
import React from 'react';
import styles from './Card.module.css';

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
