import React from "react";
import { Play, ArrowRight, Sparkles, Heart, Star, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#5EC1E8]/5 to-[#A5C85A]/5 overflow-hidden">
      {/* Decorative Background Elements - Enhanced with Interactive Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle outline icons in background */}
        <div className="absolute top-10 left-[5%] opacity-10 animate-float">
          <Sparkles className="w-16 h-16 text-[#2CA4A4]" strokeWidth={1} />
        </div>
        <div className="absolute top-32 right-[8%] opacity-10 animate-float-delayed">
          <Star className="w-20 h-20 text-[#FFC94B]" strokeWidth={1} />
        </div>
        <div className="absolute bottom-40 left-[15%] opacity-10 animate-float">
          <Heart className="w-14 h-14 text-[#8B5FBF]" strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 right-[12%] opacity-10 animate-float-delayed">
          <Zap className="w-12 h-12 text-[#A5C85A]" strokeWidth={1} />
        </div>

        {/* Floating colorful shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FFC94B] rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#8B5FBF] rotate-45 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#2CA4A4] rounded-full animate-bounce-delayed shadow-lg"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#A5C85A] rounded-full animate-ping"></div>
        <div className="absolute bottom-60 right-1/4 w-5 h-5 bg-[#5EC1E8]/40 rounded-full animate-pulse-slow"></div>

        {/* Rainbow arc decoration - inspired by the image */}
        <div className="absolute top-8 right-[20%] hidden lg:block opacity-50 hover:opacity-70 transition-opacity duration-300">
          <svg
            width="140"
            height="90"
            viewBox="0 0 120 80"
            className="animate-float"
          >
            <path
              d="M 10 70 Q 60 10, 110 70"
              stroke="#5EC1E8"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 15 70 Q 60 18, 105 70"
              stroke="#2CA4A4"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 20 70 Q 60 26, 100 70"
              stroke="#FFC94B"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 25 70 Q 60 34, 95 70"
              stroke="#A5C85A"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Circular navigation arrows similar to the image */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <button className="w-14 h-14 rounded-full border-2 border-[#8B5FBF]/30 flex items-center justify-center hover:bg-[#8B5FBF]/10 hover:border-[#8B5FBF] transition-all duration-300 hover:scale-110 group">
            <ArrowRight className="w-6 h-6 text-[#8B5FBF] rotate-180 group-hover:scale-110 transition-transform" />
          </button>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <button className="w-14 h-14 rounded-full border-2 border-[#8B5FBF]/30 flex items-center justify-center hover:bg-[#8B5FBF]/10 hover:border-[#8B5FBF] transition-all duration-300 hover:scale-110 group">
            <ArrowRight className="w-6 h-6 text-[#8B5FBF] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Scroll to top button like in the image */}
        <div className="absolute bottom-8 right-8">
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FFC94B] transition-all duration-300 hover:scale-110 group">
            <ArrowRight className="w-5 h-5 text-[#2CA4A4] -rotate-90 group-hover:text-white group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-6rem)] py-8 lg:py-12">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fadeInUp z-10">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span
                  className="inline-block text-[#2CA4A4] hover:scale-125 hover:-rotate-3 hover:skew-y-2 transition-all duration-500 cursor-pointer animate-tickerWord hover:text-[#5EC1E8] hover:drop-shadow-lg"
                  style={{
                    animationDelay: "0s",
                    animationDuration: "6s",
                  }}
                >
                  Smart
                </span>{" "}
                <span className="inline-block">
                  <span className="relative inline-block group cursor-pointer">
                    <span
                      className="bg-gradient-to-r from-[#8B5FBF] via-[#FFC94B] to-[#5EC1E8] bg-clip-text text-transparent hover:from-[#5EC1E8] hover:via-[#A5C85A] hover:to-[#8B5FBF] transition-all duration-700 animate-tickerWord hover:scale-125 inline-block hover:drop-shadow-2xl"
                      style={{
                        animationDelay: "1s",
                        animationDuration: "6s",
                        backgroundSize: "200% auto",
                      }}
                    >
                      Starts
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-[#FFC94B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-drawLine group-hover:animate-pulse"
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
                    {/* Multiple sparkle effects on hover */}
                    <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125">
                      <Sparkles className="w-6 h-6 text-[#FFC94B] animate-spin-slow" />
                    </span>
                    <span className="absolute -top-1 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <Star className="w-5 h-5 text-[#5EC1E8] animate-pulse" />
                    </span>
                    <span className="absolute -bottom-1 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <Heart className="w-4 h-4 text-[#8B5FBF] animate-bounce" />
                    </span>
                  </span>
                </span>{" "}
                <span
                  className="inline-block text-[#8B5FBF] hover:scale-125 hover:rotate-3 hover:-skew-y-2 transition-all duration-500 cursor-pointer animate-tickerWord hover:text-[#FFC94B] hover:drop-shadow-lg"
                  style={{
                    animationDelay: "2s",
                    animationDuration: "6s",
                  }}
                >
                  Here
                </span>
              </h1>

              <div className="space-y-3">
                <p
                  className="text-base sm:text-lg lg:text-xl text-[#2F3E3E]/70 max-w-2xl leading-relaxed group cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="inline-block hover:text-[#2CA4A4] hover:scale-105 transition-all duration-300">
                    A holistic learning platform
                  </span>{" "}
                  <span className="inline-block hover:text-[#5EC1E8] hover:scale-105 transition-all duration-300">
                    for kids aged
                  </span>{" "}
                  <span className="inline-block font-semibold text-[#8B5FBF] hover:scale-110 hover:text-[#FFC94B] transition-all duration-300">
                    4 to 18
                  </span>
                  .{" "}
                  <span className="inline-block hover:text-[#A5C85A] hover:scale-105 transition-all duration-300">
                    Build
                  </span>{" "}
                  <span className="inline-block hover:text-[#2CA4A4] hover:scale-105 hover:font-semibold transition-all duration-300">
                    wisdom
                  </span>
                  ,{" "}
                  <span className="inline-block hover:text-[#5EC1E8] hover:scale-105 hover:font-semibold transition-all duration-300">
                    character
                  </span>
                  ,{" "}
                  <span className="inline-block hover:text-[#FFC94B] hover:scale-105 hover:font-semibold transition-all duration-300">
                    creativity
                  </span>
                  ,{" "}
                  <span className="inline-block hover:text-[#8B5FBF] hover:scale-105 transition-all duration-300">
                    and smart money habits
                  </span>{" "}
                  <span className="inline-block hover:text-[#A5C85A] hover:scale-105 transition-all duration-300">
                    from the start
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button className="group relative bg-gradient-to-r from-[#8B5FBF] to-[#5EC1E8] hover:from-[#5EC1E8] hover:to-[#8B5FBF] text-white font-bold px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10">View More</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button className="group bg-white hover:bg-gradient-to-r hover:from-[#2CA4A4] hover:to-[#5EC1E8] text-[#2CA4A4] hover:text-white border-2 border-[#2CA4A4] hover:border-transparent font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span>Try a Demo Lesson</span>
              </button>
            </div>

            {/* Stats or badges - Enhanced with hover effects */}
            <div className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8">
              <div className="group text-center bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <div className="text-3xl lg:text-4xl font-bold text-[#2CA4A4] group-hover:scale-125 transition-transform duration-300">
                  9
                </div>
                <div className="text-xs lg:text-sm text-[#2F3E3E]/70 font-medium mt-1">
                  Life Domains
                </div>
              </div>
              <div className="group text-center bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <div className="text-3xl lg:text-4xl font-bold text-[#A5C85A] group-hover:scale-125 transition-transform duration-300">
                  4-18
                </div>
                <div className="text-xs lg:text-sm text-[#2F3E3E]/70 font-medium mt-1">
                  Age Range
                </div>
              </div>
              <div className="group text-center bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <div className="text-3xl lg:text-4xl font-bold text-[#8B5FBF] group-hover:scale-125 transition-transform duration-300">
                  100%
                </div>
                <div className="text-xs lg:text-sm text-[#2F3E3E]/70 font-medium mt-1">
                  Holistic
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration with Enhanced Interactivity */}
          <div className="relative animate-fadeInRight group">
            <div className="relative rounded-3xl overflow-visible">
              {/* Main image container with hover effects */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[550px] bg-gradient-to-br from-[#FAF7F2] to-[#5EC1E8]/10 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>

                {/* Floating interactive elements */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-[#FFC94B] rounded-full animate-bounce-slow shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                <div className="absolute top-24 left-8 w-7 h-7 bg-[#5EC1E8]/60 rounded-full animate-pulse-slow hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                <div className="absolute bottom-24 right-12 w-5 h-5 bg-[#A5C85A] rounded-full animate-bounce-delayed shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                <div className="absolute top-1/3 right-16 w-6 h-6 bg-[#8B5FBF]/50 rounded-full animate-float hover:scale-125 transition-transform duration-300 cursor-pointer"></div>

                {/* Central play button with enhanced interactivity */}
                <div className="absolute inset-0 flex items-center justify-center group/play cursor-pointer">
                  <div className="relative">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 w-28 h-28 bg-white/20 rounded-full animate-ping-slow"></div>
                    <div className="absolute inset-0 w-28 h-28 bg-white/10 rounded-full animate-ping-slower"></div>

                    {/* Main play button */}
                    <div className="relative w-28 h-28 bg-white/95 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center group-hover/play:bg-gradient-to-br group-hover/play:from-[#8B5FBF] group-hover/play:to-[#5EC1E8] transition-all duration-500 group-hover/play:scale-125 group-hover/play:rotate-12">
                      <Play
                        className="w-12 h-12 text-[#8B5FBF] group-hover/play:text-white group-hover/play:scale-110 transition-all duration-300 ml-1"
                        fill="currentColor"
                      />
                    </div>

                    {/* Text below button */}
                    <p className="absolute top-full mt-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-[#2F3E3E] whitespace-nowrap group-hover/play:text-[#8B5FBF] transition-colors duration-300">
                      Watch Our Story
                    </p>
                  </div>
                </div>

                {/* Bottom decorative wave */}
                <svg
                  className="absolute bottom-0 left-0 w-full h-24 text-[#5EC1E8] opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,30 C100,60 200,0 300,30 C350,45 400,15 400,30 L400,60 L0,60 Z"
                    fill="currentColor"
                  />
                </svg>

                {/* Circular blob background - animated */}
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FAF7F2] via-[#FFC94B]/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              </div>

              {/* Decorative floating dots with hover effects */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#FFC94B] rounded-full shadow-lg hover:scale-150 transition-all duration-300 cursor-pointer animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#8B5FBF] rounded-full shadow-lg hover:scale-150 transition-all duration-300 cursor-pointer animate-bounce-slow"></div>
              <div className="absolute top-1/4 -left-6 w-6 h-6 bg-[#2CA4A4] rounded-full shadow-lg hover:scale-150 transition-all duration-300 cursor-pointer animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
