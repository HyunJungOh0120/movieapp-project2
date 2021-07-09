import { useEffect, useState } from 'react';
import { getJSON, getRandomNumsArrays, setInfo } from './Helpers';
import { getListByGenreUrl } from './Urls';

const useGenreLoad = (mediaType, genresList, contextStatus) => {
  // movieGenres [{id, name},{...}...]  []
  const controller = new AbortController();
  const { signal } = controller;
  const [listStatus, setListStatus] = useState('idle');
  const [lists, setLists] = useState([]);
  useEffect(() => {
    // 3 each
    // index [1,3,6] genre[1].name
    const randomGenresIndexes = getRandomNumsArrays(genresList, 5); // [2,4,8]

    const getLists = async () => {
      try {
        setListStatus('loading');
        const randomUrls = randomGenresIndexes.map((index) =>
          getListByGenreUrl(mediaType, genresList[index].id)
        ); //[url,url,url]
        const data = await Promise.all([
          ...randomUrls.map((url) => getJSON(url, signal)),
        ]);
        const results = data.map((data) => data.results);

        setLists(setInfo(results, genresList, randomGenresIndexes, mediaType));
        setListStatus('resolved');
      } catch (error) {
        console.log(error);
        setListStatus('error');
      }
    };
    getLists();
    return () => {
      setTimeout(() => {
        controller.abort();
      }, 4000);
    };
  }, [contextStatus]);

  return { listStatus, lists };
};

export default useGenreLoad;
