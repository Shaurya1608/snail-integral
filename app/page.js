import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import IndustriesWeServe from "../components/IndustriesWeServe";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import InitiativesPreview from "../components/InitiativesPreview";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import ContactCards from "../components/ContactCards";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Snail Integral | Brand Consulting and Corporate Communication Agency India',
  description: 'Snail Integral is a multi-sector brand consulting and corporate communication agency in India. We serve agriculture, corporate, FMCG, manufacturing, and government sectors with strategy, digital marketing, PR, and creative solutions.',
  keywords: 'brand consulting agency India, corporate communication agency, multi-sector brand strategy, agriculture brand consulting, business communication services India',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <ClientLogos />
        <AboutPreview />
        <IndustriesWeServe />
        <ServicesOverview />
        <WhyChooseUs />
        <Process />
        <InitiativesPreview />
        <Testimonials />
        <FinalCTA />
        <ContactCards />
      </main>
      <Footer />
    </>
  );
}

