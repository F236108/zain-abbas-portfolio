
import React, { useState, useEffect, useRef } from 'react';
import { Link, ExternalLink, Code, Lightbulb, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1500&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Traffic Light Control System",
      description: "Multisim simulation of a traffic light control system with timed sequences and pedestrian crossings.",
      icon: <Cpu className="text-vibrant" size={24} />,
      category: "simulation",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Line Following Robot",
      description: "Autonomous robot built with Arduino and infrared sensors that can detect and follow a black line on a contrasting surface.",
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 70,
        damping: 10
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const filterItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="section-container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={titleVariants}
        >
          My Portfolio
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap gap-2 mt-8 mb-10 justify-center md:justify-start"
          variants={filterVariants}
        >
          {['all', 'software', 'hardware', 'simulation'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-electric text-black'
                  : 'bg-secondary text-gray-300 hover:bg-opacity-70'
              }`}
              variants={filterItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover glass-card"
              variants={itemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              custom={index}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 234, 255, 0.1), 0 10px 10px -5px rgba(0, 234, 255, 0.04)" 
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >
              <div className="h-48 relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute top-0 right-0 bg-background/80 backdrop-blur-sm p-2 rounded-bl-lg"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.3 }}
                >
                  {project.icon}
                </motion.div>
              </div>
              
              <motion.div 
                className="p-5"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {project.link ? (
                  <motion.a 
                    href={project.link}
                    className="inline-flex items-center text-electric hover:text-electric/80 transition-colors gap-1"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                ) : (
                  <motion.span 
                    className="inline-flex items-center text-gray-500 gap-1"
                    whileHover={{ x: 3 }}
                  >
                    Project Details Coming Soon <Link size={16} />
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
