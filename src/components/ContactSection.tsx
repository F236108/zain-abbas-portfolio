
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Instagram, SendHorizontal, ExternalLink } from 'lucide-react';
import { toast } from "sonner";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="text-electric" size={24} />,
      title: "University Email",
      value: "F236108@cfd.nu.edu.pk",
      link: "mailto:F236108@cfd.nu.edu.pk"
    },
    {
      icon: <Mail className="text-electric" size={24} />,
      title: "Personal Email",
      value: "zainabbasm416@gmail.com",
      link: "mailto:zainabbasm416@gmail.com"
    },
    {
      icon: <Phone className="text-electric" size={24} />,
      title: "Phone",
      value: "+92-346-4040192",
      link: "tel:+923464040192"
    },
    {
      icon: <Linkedin className="text-electric" size={24} />,
      title: "LinkedIn",
      value: "zain-abbas102",
      link: "https://www.linkedin.com/in/zain-abbas102"
    },
    {
      icon: <Instagram className="text-electric" size={24} />,
      title: "Instagram",
      value: "@zain_abbas02",
      link: "https://www.instagram.com/zain_abbas02"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS service integration
    if (formRef.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          toast.success("Message sent successfully!", {
            description: "Thank you for reaching out. I'll get back to you soon."
          });
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
          toast.error("Failed to send message", {
            description: "Please try again later or contact through another method."
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon/5 rounded-full blur-3xl animate-pulse"></div>
      
      <motion.div 
        className="section-container relative z-10"
        initial="hidden"
        animate={animateItems ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={fadeInVariants}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <motion.div variants={containerVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-electric via-neon to-vibrant bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              Feel free to reach out for collaborations, project inquiries, or just a friendly chat about technology and engineering.
            </motion.p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4 
                               group-hover:bg-electric/20 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric to-vibrant opacity-0 
                                  group-hover:opacity-20 transition-opacity duration-300"></div>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-lg hover:text-electric transition-colors flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-lg">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-lg p-6 shadow-lg border border-border/30 backdrop-blur-sm 
                     hover:shadow-[0_0_25px_rgba(0,234,255,0.15)] transition-all duration-500"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              variants={fadeInVariants}
            >
              <img 
                src="https://i.postimg.cc/j2dxy1vN/2.jpg" 
                alt="Zain Abbas" 
                className="w-14 h-14 rounded-full border-2 border-electric/30 object-cover shadow-lg shadow-electric/20" 
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">Send Message</h3>
            </motion.div>

            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div 
                className="mb-4" 
                variants={itemVariants}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-electric 
                           transition-all duration-300 hover:border-electric/50"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-electric
                           transition-all duration-300 hover:border-electric/50"
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-electric
                           transition-all duration-300 hover:border-electric/50 resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 group overflow-hidden relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && (
                    <SendHorizontal 
                      size={18} 
                      className="group-hover:translate-x-1 transition-transform" 
                    />
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-electric via-neon to-electric bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
