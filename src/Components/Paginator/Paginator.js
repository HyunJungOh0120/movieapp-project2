import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CONTENTPERPAGE } from '../../Helpers/Helpers';
import Poster from '../Poster/Poster';
import Button from '../UI/Button/Button';
import styles from './Paginator.module.css';

const contentPerPage = CONTENTPERPAGE;

const Paginator = ({ dataArr, category, size }) => {
  const [currPage, setCurrPage] = useState(1);
  const currContent = dataArr.slice(
    contentPerPage * currPage - contentPerPage,
    contentPerPage * currPage
  );

  const pages = Math.ceil(dataArr.length / contentPerPage);
  const mediaType = dataArr[0].mediaType;
  // 0 - 4 .  5*1-5 5*1-1
  // 5 - 9    5*2-5 5*2-1
  // 10 - 14  5*3-5 5*3-1
  // contentPerPage * currPage - contentPerPage
  // contentPerPage * currPage - 1

  const leftClickHandler = () => {
    if (currPage === 1) return;
    setCurrPage(currPage - 1);
  };

  const rightClickHandler = () => {
    if (currPage === pages) return;
    setCurrPage(currPage + 1);
  };

  const posterPath = (content) => {
    if (size === 'small') return content.backdrop_path;
    if (size === 'big') return content.poster_path;
  };

  return (
    <div className={styles.paginator}>
      <h2>{category}</h2>
      <div className={styles.row}>
        <Button className={styles.leftBtn} onClick={leftClickHandler}>
          {currPage > 1 && <FontAwesomeIcon icon={['fas', 'chevron-left']} />}
        </Button>

        {currContent.map((content) => {
          const title = mediaType === 'tv' ? content.name : content.title;
          return (
            <Poster
              mediaType={mediaType}
              id={content.id}
              key={content.id}
              posterPath={posterPath(content)}
              title={title}
              size={size}
            />
          );
        })}

        <Button className={styles.rightBtn} onClick={rightClickHandler}>
          {currPage < pages && (
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          )}
        </Button>
      </div>
    </div>
  );
};

Paginator.propTypes = {
  dataArr: PropTypes.array,
  mediaType: PropTypes.string,
  category: PropTypes.string,
  size: PropTypes.string,
};

export default Paginator;
