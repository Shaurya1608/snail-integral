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
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <AboutPreview />
        <IndustriesWeServe />
        <ServicesOverview />
        <WhyChooseUs />
        <Process />
        <InitiativesPreview />
        <ClientLogos />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

