import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroAbout from '../../components/about/HeroAbout';
import OurStory from '../../components/about/OurStory';
import MissionVision from '../../components/about/MissionVision';
import CoreValues from '../../components/about/CoreValues';
import WhatWeDoSummary from '../../components/about/WhatWeDoSummary';
import OurImpact from '../../components/about/OurImpact';
import LeadershipTeam from '../../components/about/LeadershipTeam';
import WhyClientsTrustUs from '../../components/about/WhyClientsTrustUs';
import AboutFinalCTA from '../../components/about/AboutFinalCTA';

export const metadata = {
  title: 'About Snail Integral | Brand Consulting and Corporate Communication Agency',
  description: 'Learn about Snail Integral, a multi-sector brand consulting and corporate communication agency with 20 plus years of experience serving agriculture, corporate, FMCG, and government sectors across India.',
  keywords: 'about Snail Integral, brand consulting agency India, corporate communication company India, multi-sector communication agency, brand strategy experts India',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroAbout />
        <OurStory />
        <MissionVision />
        <CoreValues />
        <WhatWeDoSummary />
        <OurImpact />
        <LeadershipTeam />
        <WhyClientsTrustUs />
        <AboutFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
