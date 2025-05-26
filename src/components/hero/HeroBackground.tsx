
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0 will-change-transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary/2 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/2 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.015, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      {/* Elegant decorative elements */}
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-primary/3 blur-2xl opacity-30"></div>
      
      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.008)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"></div>
      
      {/* Minimal accent lines */}
      <div className="hidden md:block absolute top-20 left-1/4 h-[180px] w-[1px] bg-gradient-to-b from-transparent via-primary/8 to-transparent"></div>
      <div className="hidden md:block absolute bottom-20 right-1/4 h-[140px] w-[1px] bg-gradient-to-b from-transparent via-accent/8 to-transparent"></div>
    </motion.div>
  );
};

export default HeroBackground;
