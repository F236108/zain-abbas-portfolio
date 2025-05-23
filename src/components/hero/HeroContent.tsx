
import React from 'react';
import { Briefcase, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroContentProps {
  isInView: boolean;
  scrollToContact: () => void;
  scrollToPortfolio: () => void;
}

const HeroContent = ({ isInView, scrollToContact, scrollToPortfolio }: HeroContentProps) => {
  // Optimized animation variants for 60fps
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20, willChange: 'transform, opacity' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const handleDownloadCV = () => {
    // Create a download link for CV
    const link = document.createElement('a');
    link.href = '/cv-zain-abbas.pdf'; // You'll need to add this file to public folder
    link.download = 'Zain_Abbas_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      className="order-2 lg:order-1 will-change-transform"
      custom={0}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1 
        custom={1}
        variants={fadeInUpVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 will-change-transform"
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
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span 
            className="gradient-text text-5xl sm:text-6xl md:text-7xl block will-change-transform"
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 150,
              delay: 0.2
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
        className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed will-change-transform"
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
            transition: { duration: 0.15, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <motion.span className="absolute inset-0 bg-gradient-to-r from-electric to-neon opacity-30" 
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          Contact Me 
          <Mail size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
        </motion.button>
        
        <motion.button 
          onClick={scrollToPortfolio} 
          className="btn-secondary flex items-center gap-2 group animated-border will-change-transform"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.15, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          View My Work
          <Briefcase size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
        </motion.button>

        <motion.button 
          onClick={handleDownloadCV} 
          className="btn-secondary flex items-center gap-2 group border-vibrant text-vibrant hover:bg-vibrant hover:text-black will-change-transform"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.15, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          Download CV
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-150" />
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
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }} 
          className="h-[1px] bg-electric/50"
        ></motion.div>
        <p className="text-sm text-gray-400 italic">Crafting electrical solutions for tomorrow's challenges</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
