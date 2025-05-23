
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroProfileProps {
  isInView: boolean;
}

const HeroProfile = ({ isInView }: HeroProfileProps) => {
  return (
    <motion.div 
      className="order-1 lg:order-2 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Simplified glowing effect */}
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-electric via-neon to-vibrant rounded-full blur-2xl opacity-20"
          animate={{
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Profile frame with reduced animations */}
        <motion.div className="relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-br from-electric to-vibrant rounded-full opacity-70">
            <div className="absolute inset-0.5 bg-card rounded-full"></div>
          </div>
          
          <motion.img 
            src="https://i.postimg.cc/j2dxy1vN/2.jpg" 
            alt="Zain Abbas" 
            className={cn(
              "w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 relative",
              "border-4 border-background"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Simplified decoration elements */}
        <motion.div 
          className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-electric/20 backdrop-blur-sm 
                    border border-electric/30 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="w-3 h-3 bg-electric rounded-full opacity-80"></div>
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-electric/30"></div>
        </motion.div>
        
        <motion.div 
          className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-neon/10 backdrop-blur-sm 
                    border border-neon/20 flex items-center justify-center z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <div className="w-2 h-2 bg-neon rounded-full"></div>
        </motion.div>
        
        {/* Static circuit lines for better performance */}
        <div className="absolute w-20 h-0.5 bg-electric/30 -right-16 top-1/3 opacity-60">
          <div className="absolute right-0 w-2 h-2 rounded-full bg-electric opacity-80"></div>
        </div>
        
        <div className="absolute w-16 h-0.5 bg-neon/30 -left-12 top-2/3 opacity-60">
          <div className="absolute left-0 w-2 h-2 rounded-full bg-neon opacity-80"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProfile;
