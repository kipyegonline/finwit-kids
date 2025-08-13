import React from "react";
import { Cross, Users, Clock } from "lucide-react";

const WhyFinwitKidsSection: React.FC = () => {
  const features = [
    {
      icon: Cross,
      title: "Christian Values",
      description:
        "Rooted in Christian principles, fostering spiritual growth and ethical decision-making.",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
      borderColor: "border-[#8B5FBF]/20",
    },
    {
      icon: Users,
      title: "Parent-Child Co-Learning",
      description:
        "Encourages collaborative learning between parents and children, strengthening family bonds.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
      borderColor: "border-[#2CA4A4]/20",
    },
    {
      icon: Clock,
      title: "Age-Progressive Design",
      description:
        "Curriculum adapts to the child's age and developmental stage, ensuring optimal learning.",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
      borderColor: "border-[#A5C85A]/20",
    },
  ];

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
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border ${feature.borderColor} animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon container */}
                <div
                  className={`relative w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <IconComponent
                    className={`w-8 h-8 text-[#2CA4A4] group-hover:scale-110 transition-transform duration-300`}
                  />

                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC94B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#2F3E3E]/80 leading-relaxed group-hover:text-[#2F3E3E] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action section */}
        <div
          className="text-center mt-16 animate-fadeInUp"
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
              <button className="bg-[#2CA4A4] hover:bg-[#A5C85A] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Explore Programs
              </button>
              <button className="bg-transparent hover:bg-[#FFC94B] text-[#2CA4A4] hover:text-[#2F3E3E] border-2 border-[#2CA4A4] hover:border-[#FFC94B] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default WhyFinwitKidsSection;
