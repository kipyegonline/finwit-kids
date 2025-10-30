import React from "react";
import {
  ArrowRight,
  Eye,
  Heart,
  Users,
  Award,
  Target,
  Lightbulb,
  Layers,
  TrendingUp,
  Fish,
  Cross,
  PartyPopper,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Child Component 1: Vision and Mission
const VisionAndMission: React.FC = () => {
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
            About Us
          </h1>
          <p className="text-lg text-[#2F3E3E]/70 max-w-2xl mx-auto">
            Empowering the next generation with wisdom, values, and financial
            literacy
          </p>
        </div>

        {/* Vision and Mission Cards - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInLeft overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2CA4A4]/5 to-[#5EC1E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-[#2CA4A4]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#5EC1E8]/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Icon Section */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2CA4A4] to-[#5EC1E8] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFC94B] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#A5C85A] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4 text-center group-hover:text-[#2CA4A4] transition-colors duration-300">
                Our Vision
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] mx-auto mb-6 rounded-full"></div>

              {/* Content */}
              <p className="text-[#2F3E3E]/80 text-center leading-relaxed">
                Every child lives the{" "}
                <span className="font-semibold text-[#2CA4A4]">
                  Finwit lifestyle
                </span>{" "}
                of smart decisions from childhood to adulthood.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInRight overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5FBF]/5 to-[#FFC94B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-[#8B5FBF]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#FFC94B]/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Icon Section */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B5FBF] to-[#FFC94B] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#2CA4A4] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#5EC1E8] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4 text-center group-hover:text-[#8B5FBF] transition-colors duration-300">
                Our Mission
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#FFC94B] mx-auto mb-6 rounded-full"></div>

              {/* Content */}
              <p className="text-[#2F3E3E]/80 text-center leading-relaxed">
                Raise a generation of{" "}
                <span className="font-semibold text-[#8B5FBF]">
                  wise, value-driven, creative
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#8B5FBF]">
                  financially-savvy
                </span>{" "}
                children through holistic, modular learning.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#FFC94B] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>
        </div>

        {/* Illustration Section - Full width below cards on mobile, side by side on desktop */}
        <div
          className="mt-12 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Illustration */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/20">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Lightbulb className="w-20 h-20 mx-auto mb-4 text-[#2CA4A4]" />
                      <p className="text-sm font-medium">
                        Vision & Mission Illustration
                      </p>
                    </div>
                  </div>

                  {/* Floating animated elements */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-[#2CA4A4] rounded-full animate-bounce"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#5EC1E8] rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Key Values */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-[#2F3E3E] mb-6">
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Heart,
                      label: "Value-Driven",
                      color: "from-[#2CA4A4] to-[#5EC1E8]",
                    },
                    {
                      icon: Award,
                      label: "Excellence",
                      color: "from-[#8B5FBF] to-[#FFC94B]",
                    },
                    {
                      icon: Lightbulb,
                      label: "Innovation",
                      color: "from-[#FFC94B] to-[#A5C85A]",
                    },
                    {
                      icon: Users,
                      label: "Community",
                      color: "from-[#A5C85A] to-[#2CA4A4]",
                    },
                  ].map((value, index) => (
                    <div
                      key={value.label}
                      className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-[#2F3E3E]">
                        {value.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: Our Philosophy
const OurPhilosophy: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8B5FBF]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFC94B] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image Placeholder */}
          <div className="relative animate-fadeInLeft order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-[#A5C85A]/10 to-[#8B5FBF]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-64 bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <Lightbulb className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Philosophy & Values</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 left-6 w-6 h-6 bg-[#A5C85A] rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-8 right-8 w-8 h-8 bg-[#8B5FBF] rotate-45 animate-spin"
                  style={{ animationDuration: "4s" }}
                ></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFC94B] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#2CA4A4] rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2F3E3E] flex items-center space-x-3">
                <Heart className="w-6 h-6 text-[#2CA4A4]" />
                <span>Our Philosophy</span>
              </h2>

              <div className="space-y-4 text-[#2F3E3E]/80 leading-relaxed">
                <p>
                  We believe in a holistic approach to child development,
                  recognizing that true success encompasses more than just
                  academic achievement. Our programs are designed to foster
                  critical thinking, creativity, emotional intelligence, and a
                  strong moral foundation rooted in Christian values. We aim to
                  equip children with the tools to make informed decisions, lead
                  with integrity, and contribute meaningfully to their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 3: What Makes Us Unique
const WhatMakesUsUnique: React.FC = () => {
  const uniqueFeatures = [
    {
      icon: Layers,
      title: "11 Learning Domains",
      description:
        "Comprehensive development including Financial Wellness, Emotional Intelligence, and Technology",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
      iconBg: "bg-[#2CA4A4]/20",
      delay: "0s",
    },
    {
      icon: TrendingUp,
      title: "Three Growth Tiers",
      description:
        "Finwit Kids (4–12), Finwit Teens (13–18), and Finwit Adults (18+)",
      color: "from-[#FFC94B] to-[#A5C85A]",
      bgColor: "bg-[#FFC94B]/10",
      iconBg: "bg-[#FFC94B]/20",
      delay: "0.1s",
    },
    {
      icon: Fish,
      title: "Dolphin Mascot",
      description:
        "A friendly companion that grows with the learner through each stage",
      color: "from-[#5EC1E8] to-[#8B5FBF]",
      bgColor: "bg-[#5EC1E8]/10",
      iconBg: "bg-[#5EC1E8]/20",
      delay: "0.2s",
    },
    {
      icon: Cross,
      title: "Christian-Based Values",
      description:
        "Spiritual development rooted in Christian principles and teachings",
      color: "from-[#8B5FBF] to-[#A5C85A]",
      bgColor: "bg-[#8B5FBF]/10",
      iconBg: "bg-[#8B5FBF]/20",
      delay: "0.3s",
    },
    {
      icon: PartyPopper,
      title: "Transition Celebrations",
      description:
        "Special milestone ceremonies honoring growth and achievement at each age tier",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
      iconBg: "bg-[#A5C85A]/20",
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#2CA4A4]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[#FFC94B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#8B5FBF]/5 rounded-full blur-2xl animate-bounce"></div>

        {/* Floating decorative dots */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#5EC1E8] rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-16 w-2 h-2 bg-[#A5C85A] rounded-full animate-bounce"></div>
        <div
          className="absolute top-60 right-1/3 w-4 h-4 bg-[#FFC94B] rotate-45"
          style={{ animation: "spin 6s linear infinite" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-full border border-[#2CA4A4]/20">
              <Award className="w-5 h-5 text-[#2CA4A4]" />
              <span className="text-sm font-semibold text-[#2CA4A4]">
                Our Differentiators
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
              Unique
            </span>
          </h2>
          <p className="text-lg text-[#2F3E3E]/70 max-w-3xl mx-auto">
            Discover the distinctive features that set Finwit Kids apart in
            holistic child development
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FFC94B] via-[#A5C85A] to-[#2CA4A4] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Features Grid - Responsive: Vertical on mobile, Horizontal grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {uniqueFeatures.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#2CA4A4]/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                {/* Background gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Floating background decoration */}
                <div
                  className={`absolute -top-2 -right-2 w-16 h-16 ${feature.bgColor} rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 opacity-50`}
                ></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-5">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}
                    >
                      <IconComponent className="w-8 h-8 text-[#2F3E3E] group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Floating accent dot */}
                    <div className="absolute top-0 left-12 w-3 h-3 bg-[#FFC94B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#A5C85A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Card number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#2CA4A4] to-[#5EC1E8] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-16 text-center animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-gradient-to-r from-[#2CA4A4]/5 via-[#5EC1E8]/5 to-[#FFC94B]/5 rounded-3xl p-8 border border-[#2CA4A4]/10 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Experience the Finwit Difference?
            </h3>
            <p className="text-[#2F3E3E]/70 mb-6 max-w-2xl mx-auto">
              Join thousands of families who trust Finwit Kids for
              comprehensive, faith-based child development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] hover:from-[#5EC1E8] hover:to-[#2CA4A4] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-white hover:bg-[#FAF7F2] text-[#2CA4A4] hover:text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl border border-[#2CA4A4]/20">
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 4: Meet the Founder
const MeetTheFounder: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#5EC1E8]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6 flex items-center justify-center space-x-3">
            <Users className="w-8 h-8 text-[#2CA4A4]" />
            <span>Meet the Founder</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Founder Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  {/* Image placeholder */}
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#2CA4A4]/20 to-[#5EC1E8]/20 rounded-2xl overflow-hidden shadow-lg">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                      <div className="text-center text-[#2F3E3E]/50">
                        <Users className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">Sarah Johnson</p>
                      </div>
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-2xl border-4 border-[#2CA4A4]/20"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#A5C85A] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-[#2F3E3E] mb-2">
                    Sarah Johnson
                  </h3>
                  <p className="text-[#2CA4A4] font-medium">Founder & CEO</p>
                </div>

                <div className="space-y-4 text-[#2F3E3E]/80 leading-relaxed">
                  <p>
                    Sarah Johnson is a passionate educator and entrepreneur with
                    a deep commitment to children's holistic development. With
                    over 15 years in education and business development, Sarah
                    founded Finwit Kids to provide a platform that integrates
                    faith-based principles with practical life skills.
                  </p>

                  <p>
                    Sarah's vision is to create a generation of confident,
                    compassionate, and capable young leaders who can navigate
                    the complexities of the modern world while staying rooted in
                    strong values and contributing positively to society around
                    the world.
                  </p>
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-[#2CA4A4]/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-[#2CA4A4]" />
                    <span className="text-sm font-medium text-[#2F3E3E]">
                      15+ Years Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#A5C85A]/10 px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4 text-[#A5C85A]" />
                    <span className="text-sm font-medium text-[#2F3E3E]">
                      Child Development Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Join Our Mission?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Discover how Finwit Kids can empower your child's journey toward
              becoming a confident, capable, and compassionate leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  navigate("/programs");
                }}
                className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <VisionAndMission />
      <OurPhilosophy />
      <WhatMakesUsUnique />
      <MeetTheFounder />

      <style>{`
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

export default AboutUs;
