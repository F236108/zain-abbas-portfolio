
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/hero';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AdminAccessButton from '../components/AdminAccessButton';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Zain Abbas | Electrical Engineering Portfolio";
    
    // Add page enter animation
    document.body.classList.add('page-enter');
    
    // Cleanup animation class after animation completes
    const timer = setTimeout(() => {
      document.body.classList.remove('page-enter');
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <AdminAccessButton />
      <ThemeToggle />
    </div>
  );
};

export default Index;
