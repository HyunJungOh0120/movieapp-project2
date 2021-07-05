import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import CategoryBoard from '../CategoryBoard/CategoryBoard';
import Paginator from '../Paginator/Paginator';
import styles from './ListBoard.module.css';

const ListBoard = ({ data }) => {
  const containerRef = useRef(null);
  //  const [isVisible, setIsVisible] = useState(false);

  // const callbackFunc = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0,
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunc, options);
  //   if (containerRef.current) observer.observe(containerRef.current);

  //   return () => {
  //     if (containerRef.current) observer.unobserve(containerRef.current);
  //   };
  // }, [containerRef, options]);

  return (
    <div className={styles.listBoard}>
      <CategoryBoard>
        <Paginator
          dataArr={data}
          mediaType="movie"
          category="Popular Movies"
          size="small"
        />
      </CategoryBoard>

      <div ref={containerRef}>
        <CategoryBoard>
          <Paginator
            dataArr={data}
            mediaType="movie"
            category="Tv Shows on Air"
            size="small"
          />
        </CategoryBoard>
      </div>

      <div ref={containerRef}>
        <CategoryBoard>
          <Paginator
            dataArr={data}
            mediaType="movie"
            category="Movies Now Playing"
            size="small"
          />
        </CategoryBoard>
      </div>
    </div>
  );
};

ListBoard.propTypes = {
  data: PropTypes.array,
};

export default ListBoard;
