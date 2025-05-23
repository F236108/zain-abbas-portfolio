
import React from 'react';
import { Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroContentProps {
  isInView: boolean;
  scrollToContact: () => void;
  scrollToPortfolio: () => void;
}

const HeroContent = ({ isInView, scrollToContact, scrollToPortfolio }: HeroContentProps) => {
  // Optimized animation variants for 60fps
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className="order-2 lg:order-1"
      custom={0}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1 
        custom={1}
        variants={fadeInUpVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
      >
        <motion.span 
          className="block"
          custom={1}
          variants={fadeInUpVariants}
        >
          Hi, I'm
        </motion.span>
        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.span 
            className="gradient-text text-5xl sm:text-6xl md:text-7xl block will-change-transform"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring",
              damping: 15,
              stiffness: 120,
              delay: 0.3
            }}
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            Zain Abbas
          </motion.span>
        </motion.div>
      </motion.h1>
      
      <motion.p 
        custom={2}
        variants={fadeInUpVariants}
        className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
      >
        Electrical Engineering Student at <span className="highlight font-medium">FAST NUCES</span> with expertise in 
        <span className="highlight font-medium"> C++ programming</span> and <span className="highlight font-medium">circuit design</span>.
      </motion.p>
      
      <motion.div 
        custom={3}
        variants={fadeInUpVariants}
        className="flex flex-wrap gap-4"
      >
        <motion.button 
          onClick={scrollToContact} 
          className="btn-primary flex items-center gap-2 group relative overflow-hidden will-change-transform"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <motion.span className="absolute inset-0 bg-gradient-to-r from-electric to-neon opacity-30" 
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          Contact Me 
          <Mail size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
        
        <motion.button 
          onClick={scrollToPortfolio} 
          className="btn-secondary flex items-center gap-2 group animated-border will-change-transform"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          View My Work
          <Briefcase size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </motion.div>
      
      <motion.div 
        custom={4}
        variants={fadeInUpVariants}
        className="mt-12 hidden md:flex gap-3 items-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }} 
          className="h-[1px] bg-electric/50"
        ></motion.div>
        <p className="text-sm text-gray-400 italic">Crafting electrical solutions for tomorrow's challenges</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
