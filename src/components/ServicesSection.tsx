
import React, { useEffect, useRef } from 'react';
import { BookOpen, Code, Briefcase, Wrench } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      title: "Technical Tutoring",
      description: "One-on-one and group tutoring in electrical engineering topics and C++ programming with customized lesson plans and exercises.",
      icon: <BookOpen size={32} className="text-primary" />
    },
    {
      title: "Project Development Assistance",
      description: "Support in developing engineering projects involving circuit design and programming, from concept to implementation.",
      icon: <Code size={32} className="text-accent" />
    },
    {
      title: "Teacher Assistance",
      description: "Preparing materials, grading assignments, and engaging with students to enhance their learning experience.",
      icon: <Briefcase size={32} className="text-primary" />
    },
    {
      title: "Basic Technical Consulting",
      description: "Troubleshooting and optimizing academic projects with practical solutions and performance improvements.",
      icon: <Wrench size={32} className="text-accent" />
    }
  ];

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

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in-up">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card reveal modern-card p-8 hover-glow group ${
                index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 font-manrope group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
