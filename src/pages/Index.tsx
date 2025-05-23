import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/hero'; // Updated import path
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AdminAccessButton from '../components/AdminAccessButton';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Zain Abbas | Electrical Engineering Portfolio";
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
    </div>
  );
};

export default Index;
