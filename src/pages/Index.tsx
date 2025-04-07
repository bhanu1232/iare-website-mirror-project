
import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import NewsTicker from '@/components/NewsTicker';
import AboutSection from '@/components/AboutSection';
import AcademicsSection from '@/components/AcademicsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSlider />
      <NewsTicker />
      <AboutSection />
      <AcademicsSection />
      <FacilitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
