
import React, { useState } from 'react';
import { Link, ExternalLink, Code, Lightbulb, Cpu } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  image: string;
  link?: string;
}

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Scientific Calculator",
      description: "C++ application with advanced math operations supporting complex calculations and function plotting.",
      icon: <Code className="text-electric" size={24} />,
      category: "software",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Contact Book",
      description: "Console-based contact management system in C++ with CRUD operations and search functionality.",
      icon: <Code className="text-electric" size={24} />,
      category: "software",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1174&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Automatic Street Light System",
      description: "Hardware project using LDRs and transistors to automatically control street lights based on ambient light.",
      icon: <Lightbulb className="text-neon" size={24} />,
      category: "hardware",
      image: "https://images.unsplash.com/photo-1695842902331-546302a8195f?auto=format&fit=crop&q=80&w=1154&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Traffic Light Control System",
      description: "Multisim simulation of a traffic light control system with timed sequences and pedestrian crossings.",
      icon: <Cpu className="text-vibrant" size={24} />,
      category: "simulation",
      image: "https://images.unsplash.com/photo-1520453714393-9b80f0551cca?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Robot",
      description: "Basic task automation and movement control robot built using Arduino and servo motors.",
      icon: <Cpu className="text-vibrant" size={24} />,
      category: "hardware",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
    },
    {
      id: 6,
      title: "Transformer Model",
      description: "Step-up/step-down transformer demonstration with voltage regulation and efficiency testing.",
      icon: <Lightbulb className="text-neon" size={24} />,
      category: "hardware",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="flex flex-wrap gap-2 mt-8 mb-10 justify-center md:justify-start">
          {['all', 'software', 'hardware', 'simulation'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                filter === category
                  ? 'bg-electric text-black'
                  : 'bg-secondary text-gray-300 hover:bg-opacity-70'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-card rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="h-48 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-background/80 backdrop-blur-sm p-2 rounded-bl-lg">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {project.link ? (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-electric hover:text-electric/80 transition-colors gap-1"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center text-gray-500 gap-1">
                    Project Details Coming Soon <Link size={16} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
