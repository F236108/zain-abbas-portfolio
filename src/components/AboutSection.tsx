
import React, { useEffect, useRef } from 'react';
import { Code, Cpu, GraduationCap, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-background">
      <div className="section-container">
        <h2 className="section-title fade-in-up">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg mb-8 leading-relaxed reveal text-foreground/90 font-manrope">
              I am an aspiring <span className="highlight">Electrical Engineer</span> with a passion 
              for applying engineering principles to solve real-world problems. Currently pursuing my 
              B.Sc. in Electrical Engineering at FAST National University of Computer and Emerging Sciences, 
              I blend theoretical knowledge with hands-on experience in circuit design and programming.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed reveal text-muted-foreground font-manrope">
              My academic journey has equipped me with strong analytical skills and technical proficiency 
              in various domains of electrical engineering. I particularly enjoy working with microcontrollers, 
              designing electronic circuits, and developing software applications that interface with hardware.
            </p>
            
            <p className="text-lg leading-relaxed reveal text-muted-foreground font-manrope">
              Beyond academics, I'm committed to continuous learning and staying updated with emerging 
              technologies in the field. My goal is to contribute to innovations that make a positive 
              impact on society through elegant engineering solutions.
            </p>
          </div>
          
          <div className="modern-card p-8 hover-glow reveal group">
            <h3 className="text-xl font-semibold mb-6 font-manrope group-hover:text-primary transition-colors duration-300">
              Education
            </h3>
            <div className="flex items-start mb-8 group">
              <div className="p-2 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold font-manrope">B.Sc. Electrical Engineering</h4>
                <p className="text-muted-foreground">FAST NUCES Faisalabad</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 font-manrope group-hover:text-primary transition-colors duration-300">
              Core Skills
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center group/skill">
                <div className="p-2 rounded-lg bg-primary/10 mr-3 group-hover/skill:bg-primary/20 transition-colors duration-300">
                  <Cpu className="text-primary" size={18} />
                </div>
                <span className="font-manrope group-hover/skill:text-primary transition-colors duration-300">
                  Circuit Design & Analysis
                </span>
              </li>
              <li className="flex items-center group/skill">
                <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover/skill:bg-accent/20 transition-colors duration-300">
                  <Code className="text-accent" size={18} />
                </div>
                <span className="font-manrope group-hover/skill:text-accent transition-colors duration-300">
                  C++ Programming
                </span>
              </li>
              <li className="flex items-center group/skill">
                <div className="p-2 rounded-lg bg-primary/10 mr-3 group-hover/skill:bg-primary/20 transition-colors duration-300">
                  <Lightbulb className="text-primary" size={18} />
                </div>
                <span className="font-manrope group-hover/skill:text-primary transition-colors duration-300">
                  Problem Solving
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
