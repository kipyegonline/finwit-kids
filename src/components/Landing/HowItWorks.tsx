import React from "react";
import {
  User,
  Smile,
  GraduationCap,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import sophia from "@/assets/sophia.jpg";
import leo from "@/assets/leo.jpg";
import { useNavigate } from "react-router-dom";
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: User,
      title: "Parent",
      description: "Access resources and track your child's progress.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
      hoverColor: "group-hover:bg-[#2CA4A4]/20",
    },
    {
      icon: Smile,
      title: "Child",
      description: "Engage in interactive lessons and activities.",
      color: "from-[#FFC94B] to-[#A5C85A]",
      bgColor: "bg-[#FFC94B]/10",
      hoverColor: "group-hover:bg-[#FFC94B]/20",
    },
    {
      icon: GraduationCap,
      title: "Teacher",
      description:
        "Guide students through the curriculum and monitor their development.",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
      hoverColor: "group-hover:bg-[#8B5FBF]/20",
    },
  ];

  const testimonials = [
    {
      image: sophia, // You'll replace this with your actual image path
      quote: "Finwit Kids changed how my child learns...",
      name: "Sophia, Parent",
      role: "Parent",
    },
    {
      image: leo, // You'll replace this with your actual image path
      quote:
        "I love the lessons and activities! They're so much fun and I'm learning a lot.",
      name: "Leo, Child",
      role: "Child",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#A5C85A]/5 rounded-full blur-xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-40 left-16 w-3 h-3 bg-[#8B5FBF] rounded-full animate-bounce"></div>
        <div className="absolute bottom-80 right-32 w-2 h-2 bg-[#2CA4A4] rounded-full animate-pulse"></div>
        <div
          className="absolute top-96 left-1/3 w-4 h-4 bg-[#FFC94B] rotate-45 animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFC94B] to-[#A5C85A] mx-auto rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.title}
                  className={`group relative text-center animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                    {/* Icon container */}
                    <div
                      className={`relative w-16 h-16 ${step.bgColor} ${step.hoverColor} rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8 text-[#2CA4A4] group-hover:text-[#2F3E3E] transition-colors duration-300" />

                      {/* Floating dot */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFC94B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                    ></div>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${step.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                    ></div>
                  </div>

                  {/* Connection line (hidden on mobile, shown on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-12 z-10">
                      <div className="flex items-center justify-center h-16">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Choose a Plan Button */}
          <div
            className="text-center animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => navigate("/learning-plans")}
              className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Choose a Plan
            </button>
          </div>

          {/* Teacher-Guided Support Add-on */}
          <div
            className="mt-12 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#2CA4A4]/10 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-lg font-semibold text-[#2F3E3E] mb-2">
                  Teacher-Guided Support (Add-on)
                </h4>
                <p className="text-[#2F3E3E]/70">
                  Get additional guidance from certified educators
                </p>
              </div>
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="animate-fadeInUp" style={{ animationDelay: "1s" }}>
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-4">
              Testimonials
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20 animate-fadeInUp`}
                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Image placeholder */}
                  <div className="relative w-44 h-44 bg-gradient-to-br from-[#5EC1E8]/20 to-[#2CA4A4]/20 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* You can replace this div with an actual img tag */}
                    <div className="w-full h-full bg-gradient-to-br from-[#2CA4A4] to-[#5EC1E8] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#FFC94B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-[#2F3E3E]/90 leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="space-y-1">
                    <p className="font-semibold text-[#2F3E3E]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#2F3E3E]/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2CA4A4]/5 to-[#5EC1E8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-[#2CA4A4] rounded-full"></div>
            <div className="w-2 h-2 bg-[#2CA4A4]/30 rounded-full"></div>
            <div className="w-2 h-2 bg-[#2CA4A4]/30 rounded-full"></div>
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
