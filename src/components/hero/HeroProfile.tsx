
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroProfileProps {
  isInView: boolean;
}

const HeroProfile = ({ isInView }: HeroProfileProps) => {
  return (
    <motion.div 
      className="order-1 lg:order-2 flex justify-center will-change-transform"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Simplified glowing effect */}
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-electric via-neon to-vibrant rounded-full blur-2xl opacity-15 will-change-transform"
          animate={{
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        ></motion.div>
        
        {/* Profile frame with optimized animations */}
        <motion.div className="relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-br from-electric to-vibrant rounded-full opacity-60">
            <div className="absolute inset-0.5 bg-card rounded-full"></div>
          </div>
          
          <motion.img 
            src="https://i.postimg.cc/j2dxy1vN/2.jpg" 
            alt="Zain Abbas" 
            className={cn(
              "w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 relative will-change-transform",
              "border-4 border-background"
            )}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transform: 'translate3d(0, 0, 0)' }}
          />
        </motion.div>
        
        {/* Optimized decoration elements */}
        <motion.div 
          className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-electric/15 backdrop-blur-sm 
                    border border-electric/25 flex items-center justify-center will-change-transform"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25, ease: "easeOut" }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <div className="w-3 h-3 bg-electric rounded-full opacity-70"></div>
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-electric/25"></div>
        </motion.div>
        
        <motion.div 
          className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-neon/10 backdrop-blur-sm 
                    border border-neon/15 flex items-center justify-center z-20 will-change-transform"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.3, ease: "easeOut" }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <div className="w-2 h-2 bg-neon rounded-full"></div>
        </motion.div>
        
        {/* Static circuit lines for better performance */}
        <div className="absolute w-20 h-0.5 bg-electric/25 -right-16 top-1/3 opacity-50">
          <div className="absolute right-0 w-2 h-2 rounded-full bg-electric opacity-70"></div>
        </div>
        
        <div className="absolute w-16 h-0.5 bg-neon/25 -left-12 top-2/3 opacity-50">
          <div className="absolute left-0 w-2 h-2 rounded-full bg-neon opacity-70"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProfile;
