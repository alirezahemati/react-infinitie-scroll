import { motion } from 'framer-motion';

function Search() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -400 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl text-violet-700 font-bold capitalize dark:text-white transition duration-500">
          Search
        </h1>
      </div>
    </motion.div>
  );
}

export default Search;
