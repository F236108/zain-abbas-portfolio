
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Optimized animated background elements with transform3d for GPU acceleration */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-electric/5 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.6, 0.5]
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
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon/5 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.4, 0.5, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      {/* Static decorative elements for better performance */}
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-electric/10 blur-xl opacity-40"></div>
      
      {/* Static lines for better performance */}
      <div className="hidden md:block absolute top-16 left-1/3 h-[200px] w-[1px] bg-gradient-to-b from-transparent via-electric/30 to-transparent"></div>
      <div className="hidden md:block absolute bottom-16 right-1/3 h-[150px] w-[1px] bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>
      
      {/* Optimized grid for better performance */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,234,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,234,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
    </motion.div>
  );
};

export default HeroBackground;
