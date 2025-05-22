
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, -150]);
  
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
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Enhanced Background decorations with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-electric/5 blur-3xl"
          style={{ y: y1 }}
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
          style={{ y: y2 }}
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
          style={{ y: y3 }}
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
        
        {/* Animated lines */}
        <div className="hidden md:block absolute top-16 left-1/3 h-[200px] w-[1px] bg-gradient-to-b from-transparent via-electric/30 to-transparent"></div>
        <div className="hidden md:block absolute bottom-16 right-1/3 h-[150px] w-[1px] bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>
        
        {/* New Grid Lines for modern tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,234,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,234,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* New animated particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-electric/50"
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: i * 2
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
              
              {/* New circuit lines */}
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
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
