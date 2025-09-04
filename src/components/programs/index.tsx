import React, { useState } from "react";
import {
  ArrowRight,
  Calculator,
  Code,
  MessageCircle,
  Palette,
  BookOpen,
  Users,
  Award,
  ChevronDown,
} from "lucide-react";

// Child Component 1: Age Selector and Single Domains
const AgeSelectorAndSingleDomains: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState("6-7 years");

  const ageGroups = ["3-5 years", "6-7 years", "8-12 years", "13-18 years"];

  const singleDomains = [
    {
      title: "Math",
      description: "Develop strong mathematical skills",
      icon: Calculator,
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Coding",
      description: "Learn to code and create",
      icon: Code,
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Communication",
      description: "Improve communication and presentation skills",
      icon: MessageCircle,
      color: "from-[#5EC1E8] to-[#8B5FBF]",
    },
    {
      title: "Design",
      description: "Explore design thinking and creativity",
      icon: Palette,
      color: "from-[#8B5FBF] to-[#FFC94B]",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#2CA4A4]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#FFC94B]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#5EC1E8] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Programs & Packages
          </h1>
          <p className="text-lg text-[#2F3E3E]/80 max-w-2xl mx-auto">
            Choose the perfect learning path for your child
          </p>
        </div>

        {/* Age Selector */}
        <div
          className="flex justify-center mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-100">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedAge === age
                    ? "bg-[#2CA4A4] text-white shadow-md"
                    : "text-[#2F3E3E] hover:bg-[#2CA4A4]/10"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Single Domains */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Single Domains
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {singleDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={domain.title}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Image placeholder */}
                  <div className="relative h-40 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10 rounded-xl mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-xs">{domain.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${domain.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: 4-in-1 Bundles
const FourInOneBundles: React.FC = () => {
  const bundles = [
    {
      title: "Early Learners Bundle",
      description: "Math, Coding, Communication, Design",
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Intermediate Learners Bundle",
      description: "Math, Coding, Communication, Design",
      color: "from-[#FFC94B] to-[#5EC1E8]",
    },
    {
      title: "Advanced Learners Bundle",
      description: "Math, Coding, Communication, Design",
      color: "from-[#2CA4A4] to-[#8B5FBF]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFC94B] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            4-in-1 Bundles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div
              key={bundle.title}
              className={`group relative text-center animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Bundle card */}
              <div className="bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/10 to-[#A5C85A]/10 rounded-xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Users className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-xs">{bundle.title}</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {bundle.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {bundle.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bundle.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${bundle.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Full Access
const FullAccess: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#FFC94B]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#5EC1E8] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Full Access
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative animate-fadeInLeft">
              <div className="relative bg-gradient-to-br from-[#FFC94B]/10 to-[#2CA4A4]/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <BookOpen className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Full Access Dashboard</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#2CA4A4] rounded-full animate-pulse"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fadeInRight">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#2F3E3E]">
                  Full Access
                </h3>
                <p className="text-[#2F3E3E]/80 leading-relaxed">
                  Unlock all courses and resources for all age groups
                </p>
              </div>

              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Choose the perfect program for your child and watch them thrive
              across multiple domains of learning and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const ProgramsPackages: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <AgeSelectorAndSingleDomains />
      <FourInOneBundles />
      <FullAccess />

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </main>
  );
};

export default ProgramsPackages;
