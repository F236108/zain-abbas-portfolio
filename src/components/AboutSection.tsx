
import React from 'react';
import { Code, Cpu, GraduationCap, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2">
            <p className="text-lg mb-8 leading-relaxed font-normal">
              I am an aspiring <span className="highlight">Electrical Engineer</span> with a passion 
              for applying engineering principles to solve real-world problems. Currently pursuing my 
              B.Sc. in Electrical Engineering at FAST National University of Computer and Emerging Sciences, 
              I blend theoretical knowledge with hands-on experience in circuit design and programming.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed font-normal">
              My academic journey has equipped me with strong analytical skills and technical proficiency 
              in various domains of electrical engineering. I particularly enjoy working with microcontrollers, 
              designing electronic circuits, and developing software applications that interface with hardware.
            </p>
            
            <p className="text-lg leading-relaxed font-normal">
              Beyond academics, I'm committed to continuous learning and staying updated with emerging 
              technologies in the field. My goal is to contribute to innovations that make a positive 
              impact on society through elegant engineering solutions.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] card-hover border border-gray-100/50">
            <h3 className="text-xl font-semibold mb-6 border-b border-border pb-3">Education</h3>
            <div className="flex items-start mt-6">
              <div className="p-2 bg-primary/5 rounded-xl mr-4">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">B.Sc. Electrical Engineering</h4>
                <p className="text-muted-foreground font-normal">FAST NUCES Faisalabad</p>
                <p className="text-sm text-muted-foreground mt-1">Expected Graduation: 2027</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 border-b border-border pb-3 mt-10">Core Skills</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="p-2 bg-primary/5 rounded-xl mr-4">
                  <Cpu size={20} className="text-primary" />
                </div>
                <span className="font-medium">Circuit Design & Analysis</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-accent/5 rounded-xl mr-4">
                  <Code size={20} className="text-accent" />
                </div>
                <span className="font-medium">C++ Programming</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-primary/5 rounded-xl mr-4">
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <span className="font-medium">Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
