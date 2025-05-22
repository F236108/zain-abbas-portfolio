
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroProfileProps {
  isInView: boolean;
}

const HeroProfile = ({ isInView }: HeroProfileProps) => {
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <motion.div 
      className="order-1 lg:order-2 flex justify-center"
      custom={0}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative">
        {/* Enhanced glowing effects */}
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-electric via-neon to-vibrant rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        {/* Profile frame with enhanced effects */}
        <motion.div 
          className="relative z-10"
          variants={pulseVariants}
          animate="pulse"
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-br from-electric to-vibrant rounded-full opacity-70"
            animate={{ 
              boxShadow: [
                "0 0 5px rgba(0, 234, 255, 0.5), 0 0 20px rgba(0, 234, 255, 0.3)",
                "0 0 10px rgba(0, 234, 255, 0.7), 0 0 30px rgba(0, 234, 255, 0.5)",
                "0 0 5px rgba(0, 234, 255, 0.5), 0 0 20px rgba(0, 234, 255, 0.3)"
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="absolute inset-0.5 bg-card rounded-full"></div>
          </motion.div>
          
          <motion.img 
            src="https://i.postimg.cc/j2dxy1vN/2.jpg" 
            alt="Zain Abbas" 
            className={cn(
              "w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 relative",
              "border-4 border-background"
            )}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          />
        </motion.div>
        
        {/* Enhanced tech-themed decoration elements */}
        <motion.div 
          className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-electric/20 backdrop-blur-sm 
                    border border-electric/30 flex items-center justify-center overflow-hidden"
          animate={{
            boxShadow: ['0 0 5px #00EAFF, 0 0 10px #00EAFF', '0 0 15px #00EAFF, 0 0 20px #00EAFF', '0 0 5px #00EAFF, 0 0 10px #00EAFF'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.div 
            className="w-3 h-3 bg-electric rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          <motion.div 
            className="absolute w-full h-full rounded-full border-2 border-dashed border-electric/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-electric/10 to-transparent opacity-30"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-neon/10 backdrop-blur-sm 
                    border border-neon/20 flex items-center justify-center z-20"
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            y: [0, -5, 0],
          }}
          transition={{
            scale: { duration: 0.5, delay: 1 },
            y: { 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <motion.div 
            className="w-2 h-2 bg-neon rounded-full"
            animate={{
              boxShadow: [
                "0 0 0px rgba(57, 255, 20, 0.5)",
                "0 0 10px rgba(57, 255, 20, 0.8)",
                "0 0 0px rgba(57, 255, 20, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          ></motion.div>
        </motion.div>
        
        {/* Circuit lines */}
        <motion.div 
          className="absolute w-20 h-0.5 bg-electric/30 -right-16 top-1/3"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="absolute right-0 w-2 h-2 rounded-full bg-electric"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute w-16 h-0.5 bg-neon/30 -left-12 top-2/3 origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div 
            className="absolute left-0 w-2 h-2 rounded-full bg-neon"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroProfile;
