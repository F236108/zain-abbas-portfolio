
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Optimized animated background elements for 90hz */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/6 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-primary/12 blur-2xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-accent/12 blur-xl"
        animate={{
          x: [0, 15, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle grid pattern with better contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"></div>
      
      {/* Additional floating elements for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/60"
        animate={{
          y: [0, -30, 0],
          opacity: [0.8, 0.3, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-accent/50"
        animate={{
          x: [0, 25, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default HeroBackground;
