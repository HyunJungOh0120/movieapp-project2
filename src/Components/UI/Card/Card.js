import PropTypes from 'prop-types';
import React from 'react';
import styles from './Card.module.css';

const Card = ({ className, children }) => {
  return (
    <div className={className ? `${styles.card} ${className}` : styles.card}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
