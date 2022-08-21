import React from 'react'
import { motion } from 'framer-motion';

const AnimatedPage = ({ childern }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -400 }}
      transition={{ duration: 0.5 }}
    >
      {childern}
    </motion.div>
  )
}

export default AnimatedPage