import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroContact from '../../components/contact/HeroContact';
import ContactIntro from '../../components/contact/ContactIntro';
import ContactCards from '../../components/contact/ContactCards';
import AddressMap from '../../components/contact/AddressMap';
import ContactForm from '../../components/contact/ContactForm';
import SocialLinks from '../../components/contact/SocialLinks';
import ClosingLine from '../../components/contact/ClosingLine';

export const metadata = {
  title: 'Contact Snail Integral | Brand Consulting and Communication Agency Noida India',
  description: 'Get in touch with Snail Integral for brand consulting, corporate communication, digital marketing, public relations, and event management services. Located in Noida, serving clients across India.',
  keywords: 'contact Snail Integral, brand consulting agency Noida, corporate communication agency contact, marketing agency Greater Noida, brand strategy agency India contact',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroContact />
        <ContactIntro />
        <ContactCards />
        <AddressMap />
        <ContactForm />
        <SocialLinks />
        <ClosingLine />
      </main>
      <Footer />
    </div>
  );
}
