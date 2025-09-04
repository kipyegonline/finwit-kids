import React, { useState } from "react";
import {
  ArrowRight,
  Heart,
  Smile,
  Users,
  Award,
  BookOpen,
  User,
  GraduationCap,
  Brain,
  Target,
  ChevronDown,
} from "lucide-react";

// Child Component 1: What Your Child Will Learn
const WhatYourChildWillLearn: React.FC = () => {
  const learningAreas = [
    {
      icon: Brain,
      title: "Explorers",
      description: "Understanding emotions, learning through play",
      color: "from-[#FFC94B] to-[#A5C85A]",
      bgColor: "bg-[#FFC94B]/10",
    },
    {
      icon: Heart,
      title: "Trailblazers",
      description: "Building empathy, forming healthy relationships",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
    },
    {
      icon: Users,
      title: "Pathfinders",
      description: "Developing confidence, nurturing life skills",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
    },
    {
      icon: Target,
      title: "Vanguards",
      description: "Advanced stress management, peer relationship skills",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
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
          <div className="inline-flex items-center space-x-2 bg-[#2CA4A4]/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#2CA4A4]" />
            <span className="text-sm font-medium text-[#2CA4A4]">
              Emotional & Mental Well-being
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Emotional & Mental Well-being
          </h1>

          <p className="text-lg text-[#2CA4A4] font-medium max-w-2xl mx-auto">
            Building resilience, empathy, and inner strength.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2F3E3E]">
                What Your Child Will Learn
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {learningAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div
                      key={area.title}
                      className={`group relative p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20 animate-fadeInUp`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`w-10 h-10 ${area.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-5 h-5 text-[#2CA4A4]" />
                      </div>
                      <h3 className="font-bold text-[#2F3E3E] text-sm mb-2 group-hover:text-[#2CA4A4] transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-xs text-[#2F3E3E]/70 leading-relaxed group-hover:text-[#2F3E3E]/90 transition-colors duration-300">
                        {area.description}
                      </p>

                      {/* Hover gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <div className="flex space-x-2 mb-4 justify-center">
                      <Heart className="w-8 h-8" />
                      <Users className="w-12 h-12" />
                      <Smile className="w-8 h-8" />
                    </div>
                    <p className="text-sm">
                      Children Building Emotional Skills
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#A5C85A] rounded-full animate-pulse"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
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
    {
      icon: BookOpen,
      title: "Self-guided",
      description: "Interactive emotion games, reflection prompts",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      icon: Users,
      title: "Parent/Child",
      description: "Family check-ins, gratitude journals",
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      icon: GraduationCap,
      title: "Teacher-assisted",
      description: "Group discussions, mindfulness sessions",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Placeholder */}
          <div className="relative animate-fadeInLeft order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-[#A5C85A]/10 to-[#FFC94B]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <BookOpen className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Child Learning Emotional Skills</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 left-6 w-6 h-6 bg-[#A5C85A] rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-8 right-8 w-8 h-8 bg-[#FFC94B] rotate-45 animate-spin"
                  style={{ animationDuration: "4s" }}
                ></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2CA4A4] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#5EC1E8] rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] leading-tight">
                How It Works
              </h2>

              <div className="space-y-4">
                {workFlows.map((flow, index) => {
                  const IconComponent = flow.icon;
                  return (
                    <div
                      key={flow.title}
                      className={`group flex items-start space-x-4 p-4 bg-[#FAF7F2] hover:bg-white rounded-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <IconComponent className="w-6 h-6 text-[#2CA4A4] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                          {flow.title}
                        </h3>
                        <p className="text-sm text-[#2F3E3E]/80 leading-relaxed group-hover:text-[#2F3E3E] transition-colors duration-300">
                          {flow.description}
                        </p>
                      </div>

                      {/* Hover gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${flow.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Example Activities & Growth Milestones
const ActivitiesAndMilestones: React.FC = () => {
  const activities = [
    {
      title: "Explorers",
      description: "Draw 'Today's Feeling Face'",
      ageGroup: "Ages 4-6",
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Trailblazers",
      description: "Play 'Empathy Circles'",
      ageGroup: "Ages 7-10",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Pathfinders",
      description: "Start a mindfulness journal",
      ageGroup: "Ages 11-14",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
    },
    {
      title: "Vanguards",
      description: "Practice deep-breathing exercises",
      ageGroup: "Ages 15-18",
      color: "from-[#A5C85A] to-[#FFC94B]",
    },
  ];

  const milestones = [
    {
      title: "Badges",
      description: '"Empathy Star," "Resilience Hero," "Mindful Leader"',
      icon: Award,
    },
    {
      title: "Certificates",
      description: "Emotional Wellness Stages",
      icon: GraduationCap,
    },
    {
      title: "Events",
      description: "Annual Mental Health & Wellness Fair",
      icon: Heart,
    },
  ];

  const [selectedAge, setSelectedAge] = useState("Select");
  const ageGroups = [
    "Select",
    "Explorers",
    "Trailblazers",
    "Pathfinders",
    "Vanguards",
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getSelectedActivity = () => {
    if (selectedAge === "Select") return null;
    return activities.find((activity) => activity.title === selectedAge);
  };

  const selectedActivity = getSelectedActivity();

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#8B5FBF]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Example Activities */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 text-center animate-fadeInUp">
            Example Activities
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`group relative text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#2CA4A4]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-[#2CA4A4]" />
                </div>
                <h3 className="font-bold text-[#2F3E3E] mb-2 group-hover:text-[#2CA4A4] transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                  {activity.description}
                </p>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activity.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>

          {/* Interactive Children Illustration */}
          <div
            className="relative bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-3xl p-8 backdrop-blur-sm mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative h-64 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/20 rounded-2xl overflow-hidden shadow-xl border border-[#2CA4A4]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Users className="w-8 h-8" />
                    <Heart className="w-12 h-12" />
                    <Smile className="w-10 h-10" />
                    <Brain className="w-8 h-8" />
                    <Award className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Children Supporting Each Other</p>
                </div>
              </div>

              {/* Floating hearts */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-[#A5C85A] rounded-full animate-pulse flex items-center justify-center">
                <Smile className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-8 left-1/3 w-6 h-6 bg-[#5EC1E8] rounded-full animate-bounce delay-200 flex items-center justify-center">
                <Brain className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Growth Milestones */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 text-center animate-fadeInUp">
            Growth Milestones
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={milestone.title}
                  className={`group relative text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-[#2CA4A4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-[#2CA4A4]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2F3E3E] mb-4 group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sneak Peek by Age Group */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 text-center animate-fadeInUp">
            Sneak Peek by Age Group
          </h2>

          <div
            className="max-w-md mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2CA4A4]/20 focus:border-[#2CA4A4] transition-colors duration-200 flex items-center justify-between"
              >
                <span
                  className={
                    selectedAge === "Select"
                      ? "text-[#2F3E3E]/50"
                      : "text-[#2F3E3E]"
                  }
                >
                  {selectedAge}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2F3E3E]/40 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg">
                  {ageGroups.map((group) => (
                    <button
                      key={group}
                      onClick={() => {
                        setSelectedAge(group);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-[#2CA4A4]/10 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {group}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {selectedActivity && (
              <div className="mt-6 p-6 bg-white rounded-xl shadow-lg border border-[#2CA4A4]/10 animate-fadeInUp">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${selectedActivity.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#2F3E3E] text-center mb-2">
                  {selectedActivity.title}
                </h3>
                <p className="text-sm text-[#2F3E3E]/80 text-center mb-2">
                  {selectedActivity.ageGroup}
                </p>
                <p className="text-[#2F3E3E] text-center">
                  {selectedActivity.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Finwit Club */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[#8B5FBF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              MindStrong Club
            </h3>
            <p className="text-[#2F3E3E]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Resilient challenges, mindfulness breaks, peer mentorship board.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#A5C85A] hover:bg-[#2CA4A4] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Select Domain
              </button>
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <span>View Demo Lesson</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const EmotionalMentalWellbeing: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <WhatYourChildWillLearn />
      <HowItWorks />
      <ActivitiesAndMilestones />

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

export default EmotionalMentalWellbeing;
