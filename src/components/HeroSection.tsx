
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      id="home" 
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Background decorations with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-electric/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-vibrant/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Additional decorative elements */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-electric/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="hidden md:block absolute top-16 left-1/3 h-[200px] w-[1px] bg-gradient-to-b from-transparent via-electric/30 to-transparent"></div>
        <div className="hidden md:block absolute bottom-16 right-1/3 h-[150px] w-[1px] bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>
      </motion.div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
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
              <motion.span 
                className="gradient-text text-5xl sm:text-6xl md:text-7xl"
                custom={3}
                variants={fadeInUpVariants}
              >
                Zain Abbas
              </motion.span>
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
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me 
                <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                onClick={scrollToPortfolio} 
                className="btn-secondary flex items-center gap-2 group"
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
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Enhanced glowing effects */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-electric via-neon to-vibrant rounded-full blur-xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              {/* Profile hexagon frame */}
              <motion.div 
                className="relative"
                variants={pulseVariants}
                animate="pulse"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric to-vibrant rounded-full p-1 opacity-80">
                  <div className="absolute inset-0.5 bg-card rounded-full"></div>
                </div>
                
                <motion.img 
                  src="https://i.postimg.cc/j2dxy1vN/2.jpg" 
                  alt="Zain Abbas" 
                  className={cn(
                    "w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 relative",
                    "border-4 border-background shadow-[0_0_15px_rgba(0,234,255,0.5)]"
                  )}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              
              {/* Enhanced tech-themed decoration elements */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-electric/20 backdrop-blur-sm 
                          border border-electric/30 flex items-center justify-center"
                animate={{
                  boxShadow: ['0 0 5px #00EAFF, 0 0 10px #00EAFF', '0 0 15px #00EAFF, 0 0 20px #00EAFF', '0 0 5px #00EAFF, 0 0 10px #00EAFF'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-3 h-3 bg-electric rounded-full"></div>
                <motion.div 
                  className="absolute w-full h-full rounded-full border-2 border-dashed border-electric/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-neon/10 backdrop-blur-sm 
                          border border-neon/20 flex items-center justify-center"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-2 h-2 bg-neon rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
