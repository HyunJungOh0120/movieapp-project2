import React from 'react';
import useGenreLoad from '../../Helpers/useGenreLoad';
import CategoryBoard from '../Boards/CategoryBoard/CategoryBoard';
import { useMain } from '../MainProvider';
import Paginator from '../Paginator/Paginator';
import styles from './ListBoard.module.css';

const ListBoard = () => {
  const { status, movieGenres } = useMain();
  const { listStatus, lists: movieLists } = useGenreLoad(
    'movie',
    movieGenres,
    status
  );
  return (
    <div className={styles.listBoard}>
      {listStatus === 'idle' && <div>Idle</div>}
      {listStatus === 'loading' && <div>Loading...</div>}
      {listStatus === 'resolved' && (
        <>
          {movieLists.map((data) => (
            <CategoryBoard key={Math.random()}>
              <Paginator
                dataArr={data.list}
                category={data.genre.name}
                size="small"
              />
            </CategoryBoard>
          ))}{' '}
        </>
      )}
    </div>
  );
};

export default ListBoard;
