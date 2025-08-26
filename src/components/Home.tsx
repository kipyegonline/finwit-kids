import DomainsSection from "@/components/Landing/Domains";
import HeroSection from "@/components/Landing/Hero";
import HowItWorksSection from "@/components/Landing/HowItWorks";
import NewsletterSection from "@/components/Landing/Newsletter";
import WhyFinwitKidsSection from "@/components/Landing/WhyFinwitKids";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/header";

const Home = () => {
  return (
    <main className="min-h-screen border-green">
      <Header />
      <HeroSection />
      <WhyFinwitKidsSection />
      <DomainsSection />
      <HowItWorksSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Home;
