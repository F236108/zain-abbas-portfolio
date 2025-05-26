
import React from 'react';
import { BookOpen, Code, Briefcase, Wrench } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "Technical Tutoring",
      description: "One-on-one and group tutoring in electrical engineering topics and C++ programming with customized lesson plans and exercises.",
      icon: <BookOpen size={40} className="text-primary" />
    },
    {
      title: "Project Development Assistance",
      description: "Support in developing engineering projects involving circuit design and programming, from concept to implementation.",
      icon: <Code size={40} className="text-accent" />
    },
    {
      title: "Teacher Assistance",
      description: "Preparing materials, grading assignments, and engaging with students to enhance their learning experience.",
      icon: <Briefcase size={40} className="text-primary" />
    },
    {
      title: "Basic Technical Consulting",
      description: "Troubleshooting and optimizing academic projects with practical solutions and performance improvements.",
      icon: <Wrench size={40} className="text-accent" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.04)] card-hover border border-gray-100/50"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
