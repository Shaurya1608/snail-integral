import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroServices from '../../components/services/HeroServices';
import HowWeAreStructured from '../../components/services/HowWeAreStructured';
import ServicePillars from '../../components/services/ServicePillars';
import ProcessServices from '../../components/services/ProcessServices';
import ServicesCTA from '../../components/services/ServicesCTA';

export const metadata = {
  title: 'Our Services | Brand Consulting, Digital Marketing and PR Agency India',
  description: 'Snail Integral offers end-to-end brand consulting, digital marketing, public relations, video production, event management, and business consulting services across agriculture, corporate, and FMCG sectors in India.',
  keywords: 'brand consulting services India, corporate communication services, digital marketing agency India, public relations agency, video production agency India, event management company India, SEO and performance marketing India',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f9fbf7] font-sans antialiased text-[#1a1a1a]">
      <Navbar />
      
      <main className="flex min-h-screen flex-col justify-between">
        <HeroServices />
        <HowWeAreStructured />
        <ServicePillars />
        <ProcessServices />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
}
