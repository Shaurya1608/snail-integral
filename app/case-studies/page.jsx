import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";
import AnimatedText from "@/components/AnimatedText";

export const metadata = {
  title: "Case Studies | Snail Integral – Real Results in Agriculture Marketing & PR",
  description: "See how Snail Integral has helped agri-brands, EdTech startups & real estate companies grow through Video Production, PR, Digital Campaigns & Social Media. Explore our case studies.",
  keywords: [
    "Agriculture marketing agency India",
    "Agrochemical brand communication case study",
    "PR agency for agriculture brands",
    "Digital marketing for real estate India",
    "Social media management agri sector",
    "Video production for agri brands",
    "Snail Integral case studies"
  ],
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText delay={0.1}>
            <h1 className="font-sans text-[60px] leading-[0.9] md:text-[110px] lg:text-[140px] font-bold tracking-tighter text-[#6a9a38] mb-6">
              Case studies
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-sm md:text-base text-[#6a9a38]/80 leading-relaxed max-w-2xl mx-auto font-medium">
              Explore how Snail Integral drives growth and maximizes ROI with smart, data-backed campaigns for brands across diverse industries. Real numbers, real impact, real success.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Main Content */}
      <CaseStudiesList />
      
      {/* CTA */}
      <CaseStudiesCTA />

      <Footer />
    </main>
  );
}
