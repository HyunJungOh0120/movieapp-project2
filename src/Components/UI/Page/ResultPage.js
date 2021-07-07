import PropTypes from 'prop-types';
import React from 'react';
import styles from './ResultPage.module.css';

const ResultPage = ({ children }) => {
  return <div className={styles.resultPage}>{children}</div>;
};

ResultPage.propTypes = {
  children: PropTypes.node,
};

export default ResultPage;
