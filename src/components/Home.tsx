import DomainsSection from "@/components/Landing/Domains";
import HeroSection from "@/components/Landing/Hero";
import HowItWorksSection from "@/components/Landing/HowItWorks";
import NewsletterSection from "@/components/Landing/Newsletter";
import WhyFinwitKidsSection from "@/components/Landing/WhyFinwitKids";
import Header from "@/components/UI/header";
import React from "react";
//import { useSearchParams } from "react-router-dom";

const Home = () => {
  React.useEffect(() => {
    const searchParams = location.search;
    if (searchParams) {
      const domains = document.getElementById("domains");
      domains?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <main className="min-h-screen border-green">
      <Header />
      <HeroSection />
      <WhyFinwitKidsSection />
      <DomainsSection />
      <HowItWorksSection />
      <NewsletterSection />
    </main>
  );
};

export default Home;
