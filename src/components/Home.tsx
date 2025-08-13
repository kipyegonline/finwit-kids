import DomainsSection from "./Landing/Domains";
import HeroSection from "./Landing/Hero";
import HowItWorksSection from "./Landing/HowItWorks";
import NewsletterSection from "./Landing/Newsletter";
import WhyFinwitKidsSection from "./Landing/WhyFinwitKids";
import Footer from "./UI/Footer";
import Header from "./UI/header";

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
