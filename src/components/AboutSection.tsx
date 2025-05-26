
import React from 'react';
import { Code, Cpu, GraduationCap, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2">
            <p className="text-lg mb-8 leading-relaxed">
              I am an aspiring <span className="highlight">Electrical Engineer</span> with a passion 
              for applying engineering principles to solve real-world problems. Currently pursuing my 
              B.Sc. in Electrical Engineering at FAST National University of Computer and Emerging Sciences, 
              I blend theoretical knowledge with hands-on experience in circuit design and programming.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              My academic journey has equipped me with strong analytical skills and technical proficiency 
              in various domains of electrical engineering. I particularly enjoy working with microcontrollers, 
              designing electronic circuits, and developing software applications that interface with hardware.
            </p>
            
            <p className="text-lg leading-relaxed">
              Beyond academics, I'm committed to continuous learning and staying updated with emerging 
              technologies in the field. My goal is to contribute to innovations that make a positive 
              impact on society through elegant engineering solutions.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-md card-hover border">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="flex items-start mb-6">
              <GraduationCap className="text-primary mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-semibold">B.Sc. Electrical Engineering</h4>
                <p className="text-muted-foreground">FAST NUCES Faisalabad</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Cpu className="text-primary mr-3" size={20} />
                <span>Circuit Design & Analysis</span>
              </li>
              <li className="flex items-center">
                <Code className="text-accent mr-3" size={20} />
                <span>C++ Programming</span>
              </li>
              <li className="flex items-center">
                <Lightbulb className="text-primary mr-3" size={20} />
                <span>Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
