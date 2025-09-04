import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ScrollToTop from "./common/ScrolltoTop";
import FinancialLiteracy from "./Domains/FinancialLitercay";
import AgricultureOutdoors from "./Domains/Agriculture";
import CommunityLeadership from "./Domains/CommunityLeadership";
import FoodNutrition from "./Domains/FoodNutrition";
import LinguisticsVernacular from "./Domains/Linguistics";
import PhysicalWellness from "./Domains/PhysicalWellness";
import EmotionalMentalWellbeing from "./Domains/EmotionalWellbeing";
import CreativeArtsCraft from "./Domains/CreativeArts";
import SpiritualGrowth from "./Domains/SpiritualGrowth";

const DomainDetail = () => {
  const { domain } = useParams<{ domain: string }>();

  const currentDomain = true;

  if (!currentDomain) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <ScrollToTop />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2F3E3E] mb-4">
            Domain Not Found
          </h1>
          <Link
            to="/"
            className="text-[#2CA4A4] hover:text-[#5EC1E8] font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-4  pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Back Navigation */}
          <Link
            to={`/?domain=${domain}`}
            className="inline-flex items-center space-x-2 text-[#2CA4A4] hover:text-[#5EC1E8] font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Domains</span>
          </Link>
          {domain === "financial-literacy" && <FinancialLiteracy />}
          {domain === "financial-literacy" && <FinancialLiteracy />}
          {domain === "agriculture-landscapingoutdoors" && (
            <AgricultureOutdoors />
          )}
          {domain === "community-and-leadership" && <CommunityLeadership />}
          {domain === "food-nutrition" && <FoodNutrition />}
          {domain === "vernacular-cultural-identity" && (
            <LinguisticsVernacular />
          )}
          {domain === "physical-wellness-play-exercise" && <PhysicalWellness />}
          {domain === "emotional-mental-well-being" && (
            <EmotionalMentalWellbeing />
          )}
          {domain === "creative-arts-craft" && <CreativeArtsCraft />}
          {domain === "spiritual-growth-christianity" && <SpiritualGrowth />}
        </div>
      </section>
    </div>
  );
};

export default DomainDetail;
