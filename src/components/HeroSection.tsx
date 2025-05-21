
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const profile = profileRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const decoration = decorationRef.current;

    if (profile && title && subtitle && cta && decoration) {
      profile.classList.add('animate-fade-in');
      decoration.classList.add('animate-fade-in');
      
      setTimeout(() => {
        title.classList.add('animate-fade-in');
      }, 200);
      
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
      }, 400);
      
      setTimeout(() => {
        cta.classList.add('animate-fade-in');
      }, 600);
    }
    
    // Add parallax scroll effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Calculate transform values for parallax effect
  const decorationTransform = `translateY(${scrollPosition * 0.1}px)`;
  const profileTransform = `translateY(${-scrollPosition * 0.05}px) rotate(${scrollPosition * 0.02}deg)`;
  const contentTransform = `translateY(${scrollPosition * 0.03}px)`;

  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
    >
      {/* Enhanced Background decorations with parallax effect */}
      <div 
        ref={decorationRef} 
        className="absolute inset-0 opacity-0"
        style={{ transform: decorationTransform, transition: 'transform 0.1s ease-out' }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-electric/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-vibrant/5 blur-3xl animate-pulse"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-electric/10 blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-2/3 w-24 h-24 rounded-full bg-neon/10 blur-xl animate-pulse"></div>
        <div className="hidden md:block absolute top-16 left-1/3 h-[200px] w-[1px] bg-gradient-to-b from-transparent via-electric/30 to-transparent"></div>
        <div className="hidden md:block absolute bottom-16 right-1/3 h-[150px] w-[1px] bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className="order-2 lg:order-1"
            style={{ transform: contentTransform, transition: 'transform 0.1s ease-out' }}
          >
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 opacity-0"
            >
              <span className="block">Hi, I'm</span>
              <span className="gradient-text text-5xl sm:text-6xl md:text-7xl">Zain Abbas</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 leading-relaxed"
            >
              Electrical Engineering Student at <span className="highlight font-medium">FAST NUCES</span> with expertise in 
              <span className="highlight font-medium"> C++ programming</span> and <span className="highlight font-medium">circuit design</span>.
            </p>
            
            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <button 
                onClick={scrollToContact} 
                className="btn-primary flex items-center gap-2 group"
              >
                Contact Me 
                <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={scrollToPortfolio} 
                className="btn-secondary flex items-center gap-2 group"
              >
                View My Work
                <Briefcase size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-12 hidden md:flex gap-3 items-center">
              <div className="h-[1px] w-12 bg-electric/50"></div>
              <p className="text-sm text-gray-400 italic">Crafting electrical solutions for tomorrow's challenges</p>
            </div>
          </div>
          
          <div 
            className="order-1 lg:order-2 flex justify-center"
            style={{ transform: profileTransform, transition: 'transform 0.1s ease-out' }}
          >
            <div className="relative">
              {/* Enhanced glowing effects */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-electric via-neon to-vibrant rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-electric rounded-full blur-3xl opacity-10 animate-pulse"></div>
              
              {/* Profile hexagon frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-electric to-vibrant rounded-full p-1 opacity-80">
                  <div className="absolute inset-0.5 bg-card rounded-full"></div>
                </div>
                
                <img 
                  ref={profileRef}
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3" 
                  alt="Zain Abbas" 
                  className={cn(
                    "w-64 h-64 md:w-80 md:h-80 object-cover rounded-full opacity-0 z-10 relative",
                    "border-4 border-background shadow-[0_0_15px_rgba(0,234,255,0.5)]"
                  )}
                />
              </div>
              
              {/* Enhanced tech-themed decoration elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-electric/20 backdrop-blur-sm 
                            border border-electric/30 flex items-center justify-center
                            animate-glow">
                <div className="w-3 h-3 bg-electric rounded-full"></div>
                <div className="absolute w-full h-full rounded-full border-2 border-dashed border-electric/30 animate-spin-slow"></div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-neon/10 backdrop-blur-sm 
                            border border-neon/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-neon rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
