import React, { useState } from "react";
import {
  ArrowRight,
  Cross,
  Heart,
  BookOpen,
  Users,
  Home,
  GraduationCap,
  Award,
  Play,
  ChevronDown,
} from "lucide-react";

// Child Component 1: What Your Child Will Learn
const WhatYourChildWillLearn: React.FC = () => {
  const learningAreas = [
    {
      icon: BookOpen,
      title: "Explorers (4-6)",
      description: "Bible stories, simple prayers, learning kindness.",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
    },
    {
      icon: Cross,
      title: "Trailblazers (7-10)",
      description: "Parables, memory verses, Christian habits.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
    },
    {
      icon: Heart,
      title: "Pathfinders (11-14)",
      description: "Applying faith to challenges, apologetics basics.",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
    },
    {
      icon: Users,
      title: "Vanguards (15-18)",
      description:
        "Leadership in faith, service projects, defending Christian values.",
      color: "from-[#FFC94B] to-[#8B5FBF]",
      bgColor: "bg-[#FFC94B]/10",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#8B5FBF]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#5EC1E8] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center space-x-2 bg-[#8B5FBF]/10 px-4 py-2 rounded-full">
              <Cross className="w-4 h-4 text-[#8B5FBF]" />
              <span className="text-sm font-medium text-[#8B5FBF]">
                Spiritual Growth (Christianity)
              </span>
            </div>
            <button className="text-sm bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-medium px-4 py-2 rounded-full transition-all duration-300">
              Start Learning
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Spiritual Growth (Christianity)
          </h1>

          <p className="text-lg text-[#2CA4A4] font-medium max-w-2xl mx-auto">
            Building faith, values, and character for life.
          </p>

          {/* Faith Community Header Image */}
          <div
            className="relative max-w-2xl mx-auto mt-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-48 bg-gradient-to-br from-[#8B5FBF]/20 to-[#2CA4A4]/20 rounded-2xl overflow-hidden shadow-xl border border-[#8B5FBF]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#8B5FBF]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Cross className="w-8 h-8" />
                    <Heart className="w-12 h-12" />
                    <Users className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Faith Community & Prayer</p>
                </div>
              </div>

              {/* Floating faith elements */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-[#8B5FBF] rounded-full animate-bounce flex items-center justify-center">
                <Cross className="w-3 h-3 text-white" />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#2CA4A4] rounded-full animate-pulse flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="space-y-8 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-2xl font-bold text-[#2F3E3E] text-center">
            What Your Child Will Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className={`group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#8B5FBF]/20`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 ${area.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-[#8B5FBF]" />
                  </div>
                  <h3 className="font-bold text-[#2F3E3E] mb-3 group-hover:text-[#8B5FBF] transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/70 leading-relaxed group-hover:text-[#2F3E3E]/90 transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Explore Curriculum Button */}
          <div className="text-center mt-8">
            <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Curriculum
            </button>
          </div>

          {/* Family Prayer Image */}
          <div
            className="relative max-w-2xl mx-auto mt-12 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative h-40 bg-gradient-to-br from-[#2CA4A4]/20 to-[#A5C85A]/20 rounded-2xl overflow-hidden shadow-xl border border-[#2CA4A4]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-3 mb-3">
                    <Users className="w-6 h-6" />
                    <Heart className="w-8 h-8" />
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <p className="text-sm">Family Bible Study & Prayer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: How It Works & Example Activities
const HowItWorksAndActivities: React.FC = () => {
  const workFlows = [
    {
      icon: BookOpen,
      title: "Self-guided",
      description: "Bible story animations, memory verse apps",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
    },
    {
      icon: Home,
      title: "Parent/Child",
      description: "Family devotion journals",
      color: "from-[#2CA4A4] to-[#A5C85A]",
    },
    {
      icon: GraduationCap,
      title: "Teacher-assisted",
      description: "Sunday school style group sessions, lessons",
      color: "from-[#A5C85A] to-[#FFC94B]",
    },
  ];

  const activities = [
    {
      title: "Explorers",
      description: "Song and story circles",
      ageGroup: "Ages 4-6",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
    },
    {
      title: "Trailblazers",
      description: '"Verse of the Week" games',
      ageGroup: "Ages 7-10",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Pathfinders",
      description: "Write journals applying parables",
      ageGroup: "Ages 11-14",
      color: "from-[#A5C85A] to-[#FFC94B]",
    },
    {
      title: "Vanguards",
      description: "Organize a church youth outreach",
      ageGroup: "Ages 15-18",
      color: "from-[#FFC94B] to-[#8B5FBF]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#8B5FBF]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#2CA4A4]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFC94B] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {workFlows.map((flow, index) => {
              const IconComponent = flow.icon;
              return (
                <div
                  key={flow.title}
                  className={`group relative text-center p-8 bg-[#FAF7F2] hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#8B5FBF]/20`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-[#8B5FBF] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2F3E3E] mb-4 group-hover:text-[#8B5FBF] transition-colors duration-300">
                    {flow.title}
                  </h3>
                  <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {flow.description}
                  </p>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${flow.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>

          {/* Family Worship Image */}
          <div
            className="relative max-w-2xl mx-auto mt-12 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative h-48 bg-gradient-to-br from-[#A5C85A]/20 to-[#8B5FBF]/20 rounded-2xl overflow-hidden shadow-xl border border-[#A5C85A]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Users className="w-10 h-10" />
                    <Cross className="w-12 h-12" />
                    <Heart className="w-10 h-10" />
                  </div>
                  <p className="text-sm">Family Worship & Learning</p>
                </div>
              </div>

              {/* Floating worship elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#A5C85A] rounded-full animate-bounce flex items-center justify-center">
                <Cross className="w-3 h-3 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#8B5FBF] rounded-full animate-pulse flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Example Activities */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 text-center animate-fadeInUp">
            Example Activities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`group relative text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#8B5FBF]/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#8B5FBF]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cross className="w-6 h-6 text-[#8B5FBF]" />
                </div>
                <h3 className="font-bold text-[#2F3E3E] mb-2 group-hover:text-[#8B5FBF] transition-colors duration-300">
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

          {/* View Activities Button */}
          <div className="text-center mt-8">
            <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Activities
            </button>
          </div>

          {/* Children Activity Image */}
          <div
            className="relative max-w-2xl mx-auto mt-12 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative h-40 bg-gradient-to-br from-[#FFC94B]/20 to-[#5EC1E8]/20 rounded-2xl overflow-hidden shadow-xl border border-[#FFC94B]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-3 mb-3">
                    <Users className="w-8 h-8" />
                    <BookOpen className="w-10 h-10" />
                    <Heart className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Children's Ministry & Fellowship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Growth Milestones & Sneak Peek
const MilestonesAndPreview: React.FC = () => {
  const milestones = [
    {
      title: "Badges",
      description: '"Faith Builder," "Prayer Warrior," "Servant Leader"',
      icon: Award,
    },
    {
      title: "Certificates",
      description: "Christian Character Awards",
      icon: BookOpen,
    },
    {
      title: "Events",
      description: "Annual Faith & Service Awards",
      icon: Heart,
    },
  ];

  const ageGroups = [
    {
      title: "Explorers",
      lesson: '"Bible Friends"',
      ageRange: "Ages 4-6",
    },
    {
      title: "Trailblazers",
      lesson: '"Walking with Jesus"',
      ageRange: "Ages 7-10",
    },
    {
      title: "Pathfinders",
      lesson: '"Apologetics 101"',
      ageRange: "Ages 11-14",
    },
    {
      title: "Vanguards",
      lesson: '"Defenders of Faith"',
      ageRange: "Ages 15-18",
    },
  ];

  const [selectedAge, setSelectedAge] = useState("Select");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getSelectedLesson = () => {
    if (selectedAge === "Select") return null;
    return ageGroups.find((group) => group.title === selectedAge);
  };

  const selectedLesson = getSelectedLesson();

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#8B5FBF]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Growth Milestones */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 text-center animate-fadeInUp">
            Growth Milestones
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={milestone.title}
                  className={`group relative text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#8B5FBF]/20`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-[#8B5FBF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-[#8B5FBF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2F3E3E] mb-4 group-hover:text-[#8B5FBF] transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* See Milestones Button */}
          <div className="text-center">
            <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              See Milestones
            </button>
          </div>

          {/* Achievement Children Image */}
          <div
            className="relative max-w-2xl mx-auto mt-12 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative h-48 bg-gradient-to-br from-[#FFC94B]/20 to-[#8B5FBF]/20 rounded-2xl overflow-hidden shadow-xl border border-[#FFC94B]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-2 mb-4">
                    <Award className="w-6 h-6" />
                    <Award className="w-8 h-8" />
                    <Award className="w-10 h-10" />
                    <Award className="w-8 h-8" />
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="text-sm">Children Celebrating Achievements</p>
                </div>
              </div>

              {/* Floating achievement elements */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#8B5FBF] rounded-full animate-pulse flex items-center justify-center">
                <Cross className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sneak Peek by Age Group */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 text-center animate-fadeInUp">
            Sneak Peek by Age Group
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ageGroups.map((group, index) => (
              <div
                key={group.title}
                className={`group relative text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#8B5FBF]/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#8B5FBF]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-[#8B5FBF]" />
                </div>
                <h3 className="font-bold text-[#2F3E3E] mb-2 group-hover:text-[#8B5FBF] transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                  {group.lesson}
                </p>
              </div>
            ))}
          </div>

          {/* Preview Lessons Button */}
          <div className="text-center mb-8">
            <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Preview Lessons
            </button>
          </div>

          {/* Classroom Learning Image */}
          <div
            className="relative max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/20 to-[#A5C85A]/20 rounded-2xl overflow-hidden shadow-xl border border-[#2CA4A4]/10">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                <div className="text-center text-[#2F3E3E]/50">
                  <div className="flex justify-center space-x-4 mb-4">
                    <BookOpen className="w-10 h-10" />
                    <Users className="w-12 h-12" />
                    <Cross className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Children's Bible Study Class</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbearers Club */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#8B5FBF]/10 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[#8B5FBF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cross className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Lightbearers Club
            </h3>
            <p className="text-[#2F3E3E]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kids' faith-building devotionals, prayer challenges, service
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#8B5FBF] hover:bg-[#2CA4A4] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Join Club
              </button>
              <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Demo Lesson</span>
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
const SpiritualGrowth: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <WhatYourChildWillLearn />
      <HowItWorksAndActivities />
      <MilestonesAndPreview />

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

export default SpiritualGrowth;
