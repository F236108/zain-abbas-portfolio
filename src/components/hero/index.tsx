
import React, { useRef } from 'react';
import { useScroll, useInView } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroProfile from './HeroProfile';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
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
    <section 
      ref={sectionRef} 
      id="home" 
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
    >
      {/* Background components with animations */}
      <HeroBackground />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero content */}
          <HeroContent 
            isInView={isInView} 
            scrollToContact={scrollToContact} 
            scrollToPortfolio={scrollToPortfolio} 
          />
          
          {/* Right side - Profile image */}
          <HeroProfile isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
