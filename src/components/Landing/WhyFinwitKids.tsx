import React from "react";
import { Cross, Users, Clock, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyFinwitKidsSection: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Modular Learning",
      description: "Modular learning across 11 domains + 1 digital portal",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      cardBgColor: "bg-gradient-to-br from-[#8B5FBF] to-[#5EC1E8]",
      iconBgColor: "bg-white/20",
      borderColor: "border-[#8B5FBF]",
      textColor: "text-white",
    },
    {
      icon: Cross,
      title: "Christian Values",
      description:
        "Rooted in Christian principles, fostering spiritual growth and ethical decision-making.",
      color: "from-[#FFC94B] to-[#A5C85A]",
      cardBgColor: "bg-gradient-to-br from-[#FFC94B] to-[#A5C85A]",
      iconBgColor: "bg-white/20",
      borderColor: "border-[#FFC94B]",
      textColor: "text-white",
    },
    {
      icon: Users,
      title: "Parent-Child Co-Learning",
      description:
        "Encourages collaborative learning between parents and children, strengthening family bonds.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      cardBgColor: "bg-gradient-to-br from-[#A855F7] to-[#C084FC]",
      iconBgColor: "bg-white/20",
      borderColor: "border-[#A855F7]",
      textColor: "text-white",
    },
    {
      icon: Clock,
      title: "Age-Progressive Design",
      description:
        "Curriculum adapts to the child's age and developmental stage, ensuring optimal learning.",
      color: "from-[#A5C85A] to-[#FFC94B]",
      cardBgColor: "bg-gradient-to-br from-[#10B981] to-[#34D399]",
      iconBgColor: "bg-white/20",
      borderColor: "border-[#10B981]",
      textColor: "text-white",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFC94B]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#5EC1E8]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#8B5FBF]/10 rounded-full blur-xl"></div>

        {/* Floating dots */}
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-[#A5C85A] rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#FFC94B] rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-16 w-2 h-2 bg-[#2CA4A4] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
              Finwit Kids
            </span>
            ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFC94B] to-[#A5C85A] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-8 ${feature.cardBgColor} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:-rotate-2 border-4 border-dashed ${feature.borderColor} border-opacity-0 hover:border-opacity-30 animate-fadeInUp cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background sparkles */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="absolute w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                </div>

                {/* Icon container */}
                <div
                  className={`relative w-20 h-20 ${feature.iconBgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                >
                  <IconComponent
                    className={`w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
                  />

                  {/* Pulsing ring on hover */}
                  <div className="absolute inset-0 border-4 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <h3
                    className={`text-xl font-bold ${feature.textColor} group-hover:scale-105 transition-transform duration-300 drop-shadow-md`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${feature.textColor} opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300 text-sm`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                {/* Floating decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action section */}
        <div
          className="text-center mt-8 md:mt-32 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Empower Your Child's Future?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Join thousands of families already nurturing well-rounded,
              spiritually grounded children through our comprehensive program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/programs")}
                className="bg-[#2CA4A4] hover:bg-[#A5C85A] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Explore Programs
              </button>
              <button
                onClick={() => navigate("/about-us")}
                className="bg-transparent hover:bg-[#FFC94B] text-[#2CA4A4] hover:text-[#2F3E3E] border-2 border-[#2CA4A4] hover:border-[#FFC94B] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFinwitKidsSection;
