
import React from 'react';
import { Briefcase, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface HeroContentProps {
  isInView: boolean;
  scrollToContact: () => void;
  scrollToPortfolio: () => void;
}

const HeroContent = ({ isInView, scrollToContact, scrollToPortfolio }: HeroContentProps) => {
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
          custom={2}
          variants={fadeInUpVariants}
        >
          Hi, I'm
        </motion.span>
        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.span 
            className="gradient-text text-5xl sm:text-6xl md:text-7xl block"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: 0.5
            }}
          >
            Zain Abbas
          </motion.span>
        </motion.div>
      </motion.h1>
      
      <motion.p 
        custom={4}
        variants={fadeInUpVariants}
        className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
      >
        Electrical Engineering Student at <span className="highlight font-medium">FAST NUCES</span> with expertise in 
        <span className="highlight font-medium"> C++ programming</span> and <span className="highlight font-medium">circuit design</span>.
      </motion.p>
      
      <motion.div 
        custom={5}
        variants={fadeInUpVariants}
        className="flex flex-wrap gap-4"
      >
        <motion.button 
          onClick={scrollToContact} 
          className="btn-primary flex items-center gap-2 group relative overflow-hidden"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 0 15px rgba(0, 234, 255, 0.5)"
          }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span className="absolute inset-0 bg-gradient-to-r from-electric to-neon opacity-30" 
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1 }}
          />
          Contact Me 
          <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
        
        <motion.button 
          onClick={scrollToPortfolio} 
          className="btn-secondary flex items-center gap-2 group animated-border"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          View My Work
          <Briefcase size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      
      <motion.div 
        custom={6}
        variants={fadeInUpVariants}
        className="mt-12 hidden md:flex gap-3 items-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ delay: 1.2, duration: 0.8 }} 
          className="h-[1px] bg-electric/50"
        ></motion.div>
        <p className="text-sm text-gray-400 italic">Crafting electrical solutions for tomorrow's challenges</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
