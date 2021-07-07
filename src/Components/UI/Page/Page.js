import PropTypes from 'prop-types';
import React from 'react';
import styles from './Page.module.css';

const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
