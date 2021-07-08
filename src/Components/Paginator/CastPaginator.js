import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CONTENTPERPAGE } from '../../Helpers/Helpers';
import Cast from '../Cast/Cast';
import Button from '../UI/Button/Button';
import styles from './Paginator.module.css';

const contentPerPage = CONTENTPERPAGE;

const CastPaginator = ({ dataArr }) => {
  const [currPage, setCurrPage] = useState(1);
  const currContent = dataArr.slice(
    contentPerPage * currPage - contentPerPage,
    contentPerPage * currPage
  );

  const pages = Math.ceil(dataArr.length / contentPerPage);

  const leftClickHandler = () => {
    if (currPage === 1) return;
    setCurrPage(currPage - 1);
  };

  const rightClickHandler = () => {
    if (currPage === pages) return;
    setCurrPage(currPage + 1);
  };

  return (
    <div className={styles.paginator}>
      <div className={styles.row}>
        <Button className={styles.leftBtn} onClick={leftClickHandler}>
          {currPage > 1 && <FontAwesomeIcon icon={['fas', 'chevron-left']} />}
        </Button>

        {currContent.map((content) => {
          return (
            <Cast
              id={content.id}
              name={content.name}
              character={content.character}
              profile_path={content.profile_path}
              key={content.id}
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

CastPaginator.propTypes = {
  dataArr: PropTypes.array,
};

export default CastPaginator;
