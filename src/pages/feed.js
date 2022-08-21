import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import AnimatedPage from '../components/layout/AnimatedPage';
import { motion } from 'framer-motion';
import LoaderSpinner from './../components/common/LoaderSpinner';
import CardLoader from './../components/common/CardLoader';
import FeedCard from '../components/feed/FeedCard';

const fetchData = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `https://uniplato.staging.uniplato.us/api/v1/mock-data?limit=10&page=${pageParam}`,
  );
  return response.data.data;
};

function Feed() {
  const { data, hasNextPage, fetchNextPage, error, isFetchingNextPage } =
    useInfiniteQuery('feeds', fetchData, {
      getNextPageParam: (lastPage, pages) => {
        const nextPage = lastPage.page + 1;
        const totalPages = lastPage.totalPages;
        return nextPage <= totalPages ? nextPage : false;
      },
    });

  useEffect(() => {
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (hasNextPage) await fetchNextPage();
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (error) return <h3 className="text-red-600 text-2xl">Something went wrong!</h3>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -400 }}
      transition={{
        transition: {
          when: 'afterChildren',
        },
        duration: 0.5,
      }}
    >
      <div className="flex flex-col justify-center items-center p-10 max-w-md">
        <h1 className="text-3xl text-violet-700 dark:text-white transition duration-500 font-bold capitalize mb-5">Feeds</h1>
        <ul>
          {data &&
            data.pages.map((page) => {
              return page.data.map((item) => {
                return (
                  <li key={item.id} className="mb-10">
                    <FeedCard card={item} />
                  </li>
                );
              });
            })}
        </ul>
        {isFetchingNextPage && (
          <>
            <LoaderSpinner />
            <CardLoader />
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Feed;
