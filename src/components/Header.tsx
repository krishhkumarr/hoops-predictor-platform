
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      className="w-full py-6 px-4 md:px-8 flex justify-center items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="text-xs uppercase tracking-widest font-medium text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Basketball Prediction Platform
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-4xl font-light tracking-tight text-center mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          March Madness Predictor
        </motion.h1>
        <motion.div 
          className="h-px w-20 bg-primary/30 mt-3"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
