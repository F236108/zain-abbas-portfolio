
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-primary/10 blur-2xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-accent/10 blur-xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </motion.div>
  );
};

export default HeroBackground;
