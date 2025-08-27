import React from "react";
import {
  ArrowRight,
  MessageCircle,
  Globe,
  Users,
  Music,
  Award,
  BookOpen,
} from "lucide-react";

// Child Component 1: What Your Child Will Learn
const WhatYourChildWillLearn: React.FC = () => {
  const learningPoints = [
    "Foundational speaking and listening skills in local and global languages",
    "Vocabulary building and pronunciation in age-appropriate chunks",
    "Cultural awareness tied to language learning and identity formation",
    "Reading and writing skills in both vernacular and at least one foreign language",
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#5EC1E8]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-[#5EC1E8]/10 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-[#5EC1E8]" />
            <span className="text-sm font-medium text-[#5EC1E8]">
              Select Domain
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Linguistics: Vernacular and Foreign Languages
          </h1>

          <p className="text-lg text-[#2CA4A4] font-medium max-w-3xl mx-auto">
            Empower your child to speak, read, and appreciate the world through
            languages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2F3E3E]">
                What Your Child Will Learn
              </h2>

              <ul className="space-y-4">
                {learningPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 animate-fadeInUp group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#5EC1E8] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <span className="text-[#2F3E3E]/80 leading-relaxed group-hover:text-[#2F3E3E] transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="group bg-[#5EC1E8] hover:bg-[#2CA4A4] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>View Demo Lesson</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-[#5EC1E8]/10 to-[#2CA4A4]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#5EC1E8]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#5EC1E8]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <div className="flex space-x-2 mb-4 justify-center">
                      <MessageCircle className="w-8 h-8" />
                      <MessageCircle className="w-12 h-12" />
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Children Learning Languages</p>
                  </div>
                </div>

                {/* Floating speech bubbles */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-[#5EC1E8] rounded-full animate-bounce delay-100 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-8 right-8 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2CA4A4] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: How It Works
const HowItWorks: React.FC = () => {
  const workFlows = [
    "Self-guided video and audio lessons for vocabulary and listening practice",
    "Parent-child conversation prompts and storytelling sessions",
    "Access to language tutors for structured learning (optional)",
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#A5C85A] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Placeholder */}
          <div className="relative animate-fadeInLeft order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-[#FFC94B]/10 to-[#A5C85A]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <BookOpen className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Learning Platform Interface</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 left-6 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-8 right-8 w-8 h-8 bg-[#A5C85A] rotate-45 animate-spin"
                  style={{ animationDuration: "4s" }}
                ></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] leading-tight">
                How It Works
              </h2>

              <ul className="space-y-4">
                {workFlows.map((flow, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 animate-fadeInUp group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2CA4A4] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <span className="text-[#2F3E3E]/80 leading-relaxed group-hover:text-[#2F3E3E] transition-colors duration-300">
                      {flow}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="group bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Explore Language Tutors</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Example Activities
const ExampleActivities: React.FC = () => {
  const activities = [
    "Learn and sing songs in local languages including Kikuyu, Kiswahili",
    "Games like 'Find it, the home' across culture through games",
    "Story and literature that emphasize cultural group connections",
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#FFC94B]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#5EC1E8]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#A5C85A] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] leading-tight">
                Example Activities
              </h2>

              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 animate-fadeInUp group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FFC94B] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <Music className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#2F3E3E]/80 leading-relaxed group-hover:text-[#2F3E3E] transition-colors duration-300">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-[#FFC94B]/10 to-[#A5C85A]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Music className="w-8 h-8" />
                      <Users className="w-12 h-12" />
                      <Music className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Children Singing & Playing</p>
                  </div>
                </div>

                {/* Floating music notes */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce flex items-center justify-center">
                  <Music className="w-3 h-3 text-white" />
                </div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#A5C85A] rounded-full animate-pulse flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2CA4A4] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 4: Growth Milestones
const GrowthMilestones: React.FC = () => {
  const milestones = [
    "Oral fluency milestones and pronunciation targets",
    "Reading targets per language",
    'Participation in "My Language Day" celebration events',
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#2CA4A4]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFC94B] rounded-round animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Placeholder */}
          <div className="relative animate-fadeInLeft order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-[#A5C85A]/10 to-[#2CA4A4]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Award className="w-12 h-12" />
                      <MessageCircle className="w-16 h-16" />
                    </div>
                    <p className="text-sm">Achievement & Growth Tracking</p>
                  </div>
                </div>

                {/* Floating achievement elements */}
                <div className="absolute top-8 right-8 w-10 h-10 bg-[#A5C85A] rounded-full flex items-center justify-center animate-bounce">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#2CA4A4] rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFC94B] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#5EC1E8] rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] leading-tight">
                Growth Milestones
              </h2>

              <ul className="space-y-4">
                {milestones.map((milestone, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 animate-fadeInUp group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#A5C85A] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#2F3E3E]/80 leading-relaxed group-hover:text-[#2F3E3E] transition-colors duration-300">
                      {milestone}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="group bg-[#A5C85A] hover:bg-[#2CA4A4] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Track Progress</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 5: Lingo Explorers Club
const LingoExplorersClub: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#2CA4A4]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#5EC1E8]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Lingo Explorers Club
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Club banner */}
          <div className="relative bg-[#2CA4A4] rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            {/* Banner design */}
            <div className="text-center text-white space-y-6">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#8B5FBF] rounded-t-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 translate-x-20 w-16 h-4 bg-[#8B5FBF] rounded-t-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-x-20 w-16 h-4 bg-[#8B5FBF] rounded-t-lg"></div>
              </div>

              <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-4xl font-bold mb-4">LINGO</h3>
                <h4 className="text-2xl font-semibold mb-2">EXPLORERS</h4>
                <h4 className="text-2xl font-semibold">CLUB</h4>
              </div>

              {/* Club member illustrations placeholder */}
              <div className="flex justify-center space-x-4 mt-8">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>

              <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                Join our exclusive club where young language enthusiasts come
                together to practice, play, and celebrate linguistic diversity
                through interactive games, cultural exchanges, and peer
                learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button className="bg-white text-[#2CA4A4] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Join the Club</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-[#FFC94B] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Explore Activities</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const LinguisticsVernacular: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <WhatYourChildWillLearn />
      <HowItWorks />
      <ExampleActivities />
      <GrowthMilestones />
      <LingoExplorersClub />

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

export default LinguisticsVernacular;
