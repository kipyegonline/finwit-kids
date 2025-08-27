import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  Users,
  Palette,
  Lightbulb,
  Heart,
  DollarSign,
  Cross,
  Music,
  Monitor,
  Apple,
  TreePine,
  Activity,
  BookOpen,
  Globe,
} from "lucide-react";

// Child Component 1: Starter Bundles
const StarterBundles: React.FC = () => {
  const bundles = [
    {
      title: "Brilliance Pack (Character & Values)",
      description:
        "Spiritual Growth, Social & Emotional Wellbeing, Life Skills",
      icon: Star,
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
      price: "KES 5,500/month or KES 55,000/year",
    },
    {
      title: "Expression Pack (Expression & Culture)",
      description: "Creative Arts & Craft, Music, Linguistics",
      icon: Palette,
      color: "from-[#FFC94B] to-[#5EC1E8]",
      bgColor: "bg-[#FFC94B]/10",
      price: "KES 5,500/month or KES 55,000/year",
    },
    {
      title: "Explorer Pack (Innovation & Discovery)",
      description:
        "Science & Innovation, Food & Nutrition, Technology & Digital Literacy, Agriculture & Outdoors",
      icon: Lightbulb,
      color: "from-[#2CA4A4] to-[#A5C85A]",
      bgColor: "bg-[#2CA4A4]/10",
      price: "KES 5,500/month or KES 55,000/year",
    },
    {
      title: "Essentials Pack (Smart Living Skills)",
      description: "Financial Literacy, Food & Nutrition, Physical Wellness",
      icon: Heart,
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
      price: "KES 5,500/month or KES 55,000/year",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFC94B]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#8B5FBF] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Choose a perfect Learning Plan
          </h1>
          <p className="text-lg text-[#2F3E3E]/80 max-w-4xl mx-auto leading-relaxed">
            Each domain contains carefully designed learning paths tailored to
            specific ages — from early learners to teens. The number of lessons,
            complexity, and level of parental involvement varies per domain.
            This allows you to find content that fits your child's interests,
            pace, and learning goals.
          </p>
        </div>

        {/* Flexible subscriptions */}
        <div
          className="text-center mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-4">
            Flexible subscriptions that grow with your child.
          </h2>
        </div>

        {/* Try our Starter Bundles */}
        <div
          className="mb-16 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-xl font-bold text-[#2F3E3E] mb-2">
            Try our Starter Bundles
          </h3>
          <p className="text-[#2F3E3E]/80 mb-8">
            Each themed bundle gives your child access to 3 related domains for
            just KES 5,500/month or KES 55,000/year — saving you more when paid
            annually.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((bundle, index) => {
              const IconComponent = bundle.icon;
              return (
                <div
                  key={bundle.title}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 ${bundle.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-[#2CA4A4]" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#2F3E3E] text-sm leading-tight group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {bundle.title}
                    </h4>
                    <p className="text-xs text-[#2F3E3E]/70 leading-relaxed">
                      {bundle.description}
                    </p>
                    <p className="text-xs font-medium text-[#2CA4A4]">
                      {bundle.price}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${bundle.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${bundle.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subscribe button */}
        <div
          className="text-center mb-16 animate-fadeInUp"
          style={{ animationDelay: "1s" }}
        >
          <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Subscribe to this Bundle
          </button>
        </div>

        {/* Additional Options */}
        <div
          className="space-y-4 animate-fadeInUp"
          style={{ animationDelay: "1.2s" }}
        >
          <button className="w-full text-left bg-white hover:bg-[#2CA4A4]/5 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#2CA4A4]/20">
            <span className="font-medium text-[#2F3E3E]">
              Try a Demo Lesson
            </span>
          </button>
          <button className="w-full text-left bg-white hover:bg-[#2CA4A4]/5 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#2CA4A4]/20">
            <span className="font-medium text-[#2F3E3E]">
              Customize My Plan
            </span>
          </button>
          <button className="w-full text-left bg-white hover:bg-[#2CA4A4]/5 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#2CA4A4]/20">
            <span className="font-medium text-[#2F3E3E]">
              Select Individual Modules
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: Individual Modules
const IndividualModules: React.FC = () => {
  const modules = [
    {
      title: "Financial Literacy",
      price: "KES 4,000/month",
      icon: DollarSign,
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Spiritual Growth",
      price: "KES 4,000/month",
      icon: Cross,
      color: "from-[#8B5FBF] to-[#2CA4A4]",
    },
    {
      title: "Social & Emotional Wellbeing",
      price: "KES 4,000/month",
      icon: Users,
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Creative Arts & Craft",
      price: "KES 4,000/month",
      icon: Palette,
      color: "from-[#8B5FBF] to-[#5EC1E8]",
    },
    {
      title: "Science & Innovation",
      price: "KES 4,000/month",
      icon: Lightbulb,
      color: "from-[#5EC1E8] to-[#2CA4A4]",
    },
    {
      title: "Music",
      price: "KES 4,000/month",
      icon: Music,
      color: "from-[#A5C85A] to-[#FFC94B]",
    },
    {
      title: "Technology & Digital Literacy",
      price: "KES 4,000/month",
      icon: Monitor,
      color: "from-[#2CA4A4] to-[#8B5FBF]",
    },
    {
      title: "Food & Nutrition",
      price: "KES 4,000/month",
      icon: Apple,
      color: "from-[#FFC94B] to-[#5EC1E8]",
    },
    {
      title: "Agriculture & Outdoors",
      price: "KES 4,000/month",
      icon: TreePine,
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Physical Wellness",
      price: "KES 4,000/month",
      icon: Activity,
      color: "from-[#5EC1E8] to-[#FFC94B]",
    },
    {
      title: "Life Skills",
      price: "KES 4,000/month",
      icon: Heart,
      color: "from-[#8B5FBF] to-[#A5C85A]",
    },
    {
      title: "Linguistics",
      price: "KES 4,200/month",
      icon: Globe,
      color: "from-[#2CA4A4] to-[#FFC94B]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFC94B] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Individual Modules
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.title}
                className={`group relative text-center bg-[#FAF7F2] hover:bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <IconComponent className="w-5 h-5 text-[#2CA4A4]" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#2F3E3E] text-xs leading-tight group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {module.title}
                  </h4>
                  <p className="text-xs font-medium text-[#2CA4A4]">
                    {module.price}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r ${module.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Parent Component
const LearningPlans: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <StarterBundles />
      <IndividualModules />

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

export default LearningPlans;
