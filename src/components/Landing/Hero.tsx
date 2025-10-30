import React from "react";
import { Play, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#5EC1E8]/10 to-[#A5C85A]/10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FFC94B] rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#8B5FBF] rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#2CA4A4] rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#A5C85A] rounded-full animate-ping"></div>

        {/* Wave pattern */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-white/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 300,0 450,60 C600,120 750,0 900,60 C1050,120 1200,0 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F3E3E] leading-tight">
                <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
                  Smart
                </span>{" "}
                <span className="relative text-[#A5C85A]">
                  Starts
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#FFC94B]"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8 T200,8"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>{" "}
                <span className="text-[#A5C85A] hidden">Mind</span>{" "}
                <span className="text-[#8B5FBF]">Here</span>{" "}
                <span className="text-[#2CA4A4] hidden">Mission</span>
              </h1>

              <p className="text-lg text-[#2F3E3E]/80 max-w-2xl leading-relaxed">
                A holistic learning platform for kids aged 4 to 18. Build
                wisdom, character, creativity, and smart money habits from the
                start.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Get Started (for Parents)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="group bg-white hover:bg-[#2CA4A4] text-[#2CA4A4] hover:text-white border-2 border-[#2CA4A4] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Try a Demo Lesson</span>
              </button>
            </div>

            {/* Stats or badges */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2CA4A4]">9</div>
                <div className="text-sm text-[#2F3E3E]/70">Life Domains</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#A5C85A]">4-18</div>
                <div className="text-sm text-[#2F3E3E]/70">Age Range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B5FBF]">100%</div>
                <div className="text-sm text-[#2F3E3E]/70">Holistic</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/20 rounded-3xl p-8 backdrop-blur-sm">
              {/* Dolphin and children illustration placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-[#5EC1E8] to-[#2CA4A4] rounded-2xl overflow-hidden shadow-2xl">
                {/* Decorative elements representing the dolphin and children */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-20 left-8 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-12 w-4 h-4 bg-[#A5C85A] rounded-full animate-bounce delay-200"></div>

                {/* Central content representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto bg-white/20 rounded-full mb-4 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium">Watch Our Story</p>
                  </div>
                </div>

                {/* Bottom wave */}
                <svg
                  className="absolute bottom-0 left-0 w-full h-16 text-[#2CA4A4]"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,30 C100,60 200,0 300,30 C350,45 400,15 400,30 L400,60 L0,60 Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>

              {/* Decorative dots around the card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFC94B] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
