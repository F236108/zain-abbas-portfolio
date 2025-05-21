
import React from 'react';
import { Code, Cpu, GraduationCap, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6">
              I am an aspiring <span className="highlight">Electrical Engineer</span> with a passion 
              for applying engineering principles to solve real-world problems. Currently pursuing my 
              B.Sc. in Electrical Engineering at FAST National University of Computer and Emerging Sciences, 
              I blend theoretical knowledge with hands-on experience in circuit design and programming.
            </p>
            
            <p className="text-lg mb-6">
              My academic journey has equipped me with strong analytical skills and technical proficiency 
              in various domains of electrical engineering. I particularly enjoy working with microcontrollers, 
              designing electronic circuits, and developing software applications that interface with hardware.
            </p>
            
            <p className="text-lg">
              Beyond academics, I'm committed to continuous learning and staying updated with emerging 
              technologies in the field. My goal is to contribute to innovations that make a positive 
              impact on society through elegant engineering solutions.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
            <h3 className="text-xl font-bold mb-4 border-b border-border pb-2">Education</h3>
            <div className="flex items-start mt-4">
              <GraduationCap className="mr-3 text-electric flex-shrink-0" />
              <div>
                <h4 className="font-medium">B.Sc. Electrical Engineering</h4>
                <p className="text-gray-400">FAST NUCES Faisalabad</p>
                <p className="text-sm text-gray-500">Expected Graduation: 2027</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 border-b border-border pb-2 mt-8">Core Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Cpu className="mr-3 text-electric flex-shrink-0" />
                <span>Circuit Design & Analysis</span>
              </li>
              <li className="flex items-start">
                <Code className="mr-3 text-electric flex-shrink-0" />
                <span>C++ Programming</span>
              </li>
              <li className="flex items-start">
                <Lightbulb className="mr-3 text-electric flex-shrink-0" />
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
