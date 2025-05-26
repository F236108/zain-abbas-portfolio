
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0 will-change-transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/3 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/2 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.015, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      {/* Elegant decorative elements */}
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/4 blur-xl opacity-40"></div>
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.015)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      
      {/* Subtle accent lines */}
      <div className="hidden md:block absolute top-16 left-1/3 h-[200px] w-[1px] bg-gradient-to-b from-transparent via-primary/15 to-transparent"></div>
      <div className="hidden md:block absolute bottom-16 right-1/3 h-[150px] w-[1px] bg-gradient-to-b from-transparent via-accent/15 to-transparent"></div>
    </motion.div>
  );
};

export default HeroBackground;
