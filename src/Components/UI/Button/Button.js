import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  const className = props.className
    ? `${styles.button} ${props.className}`
    : styles.button;

  return (
    <button
      type={props.type || 'button'}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
