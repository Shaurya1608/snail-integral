import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroInitiatives from '../../components/initiatives/HeroInitiatives';
import InitiativesIntro from '../../components/initiatives/InitiativesIntro';
import BrandCommSummit from '../../components/initiatives/BrandCommSummit';
import BioAgriConference from '../../components/initiatives/BioAgriConference';
import CoffeeTableBook from '../../components/initiatives/CoffeeTableBook';
import SnailShowPodcast from '../../components/initiatives/SnailShowPodcast';
import SnailShowNewsletter from '../../components/initiatives/SnailShowNewsletter';
import BroaderVision from '../../components/initiatives/BroaderVision';
import InitiativesCTA from '../../components/initiatives/InitiativesCTA';

export const metadata = {
  title: 'Other Initiatives | Brand R.Comm Summit, Snail Show Podcast and Bio-Agri Next Conference',
  description: 'Explore Snail Integral\'s flagship initiatives including the Brand R.Comm Summit, Bio-Agri Next Global Conference, The Snail Show Podcast, Coffee Table Book, and Weekly Newsletter driving change in agriculture and business communication across India.',
  keywords: 'Brand R.Comm Summit India, agriculture communication summit, Bio-Agri Next conference, Snail Show podcast agriculture, agriculture newsletter India, rural communication platform India, agri business events India',
};

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroInitiatives />
        <InitiativesIntro />
        <BrandCommSummit />
        <BioAgriConference />
        <CoffeeTableBook />
        <SnailShowPodcast />
        <SnailShowNewsletter />
        <BroaderVision />
        <InitiativesCTA />
      </main>
      <Footer />
    </div>
  );
}
