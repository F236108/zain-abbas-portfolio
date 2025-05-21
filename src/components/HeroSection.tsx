
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const profile = profileRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (profile && title && subtitle && cta) {
      profile.classList.add('animate-fade-in');
      
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

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 opacity-0"
            >
              <span className="block">Hi, I'm</span>
              <span className="gradient-text">Zain Abbas</span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0"
            >
              Electrical Engineering Student at <span className="highlight">FAST NUCES</span> with expertise in 
              <span className="highlight"> C++ programming</span> and <span className="highlight">circuit design</span>.
            </p>
            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Contact Me <ArrowRight size={18} />
              </button>
              <a href="#portfolio" className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-electric rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                ref={profileRef}
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3" 
                alt="Zain Abbas" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-electric opacity-0 z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
