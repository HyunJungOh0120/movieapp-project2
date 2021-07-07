import PropTypes from 'prop-types';
import React from 'react';
import styles from './Page.module.css';

const Page = ({ className, children }) => {
  return (
    <div className={`${styles.page} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Page;
