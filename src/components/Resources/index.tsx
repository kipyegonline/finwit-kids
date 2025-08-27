import React from "react";
import {
  Download,
  FileText,
  Palette,
  Clipboard,
  Home,
  Shield,
  MessageCircle,
  Heart,
  BookOpen,
  FlaskConical,
  Gamepad2,
  Monitor,
} from "lucide-react";

// Child Component 1: Free Downloads
const FreeDownloads: React.FC = () => {
  const downloads = [
    {
      title: "Worksheets",
      description: "Engaging worksheets to reinforce learning concepts",
      icon: FileText,
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Devotionals",
      description: "Inspiring devotionals to nurture spiritual growth",
      icon: Heart,
      color: "from-[#8B5FBF] to-[#2CA4A4]",
    },
    {
      title: "Coloring Pages",
      description: "Fun coloring pages to spark creativity",
      icon: Palette,
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Activity Sheets",
      description: "Exciting activity sheets for hands-on learning",
      icon: Clipboard,
      color: "from-[#A5C85A] to-[#5EC1E8]",
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
            Resources
          </h1>
          <p className="text-lg text-[#2F3E3E]/80 max-w-4xl mx-auto leading-relaxed">
            Explore a wealth of free resources designed to support your child's
            holistic development. From engaging worksheets to insightful parent
            guides, we've got everything you need to nurture your child's growth
            at home.
          </p>
        </div>

        {/* Free Downloads */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Free Downloads
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download, index) => {
              const IconComponent = download.icon;
              return (
                <div
                  key={download.title}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20 cursor-pointer`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Image placeholder */}
                  <div className="relative h-32 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10 rounded-xl mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-10 h-10 mx-auto mb-2" />
                        <p className="text-xs">{download.title}</p>
                      </div>
                    </div>

                    {/* Download icon overlay */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-[#2CA4A4] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Download className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {download.title}
                    </h3>
                    <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                      {download.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${download.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${download.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
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

// Child Component 2: Parent Guides
const ParentGuides: React.FC = () => {
  const guides = [
    {
      title: "Home Learning Guide",
      description: "Tips and strategies for effective home learning",
      icon: Home,
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Discipline Guide",
      description: "Positive discipline techniques",
      icon: Shield,
      color: "from-[#2F3E3E] to-[#8B5FBF]",
    },
    {
      title: "Communication Guide",
      description: "Enhancing communication with your child",
      icon: MessageCircle,
      color: "from-[#FFC94B] to-[#5EC1E8]",
    },
    {
      title: "Emotional Support Guide",
      description: "Supporting your child's emotional well-being",
      icon: Heart,
      color: "from-[#8B5FBF] to-[#A5C85A]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8B5FBF]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFC94B] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Parent Guides
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <div
                key={guide.title}
                className={`group relative bg-[#FAF7F2] hover:bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="relative h-40 bg-gradient-to-br from-[#2CA4A4]/10 to-[#A5C85A]/10 rounded-xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#2F3E3E]/50">
                      <IconComponent className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-xs">{guide.title}</p>
                    </div>
                  </div>

                  {/* Download icon overlay */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#2CA4A4] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Download className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${guide.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${guide.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Recommendations
const Recommendations: React.FC = () => {
  const recommendations = [
    {
      title: "Recommended Books",
      description: "Curated list of books to enhance learning",
      icon: BookOpen,
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Educational Products",
      description: "Top educational products for kids",
      icon: FlaskConical,
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Learning Toys",
      description: "Fun and educational toys for all ages",
      icon: Gamepad2,
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Online Courses",
      description: "Online courses to supplement learning",
      icon: Monitor,
      color: "from-[#5EC1E8] to-[#8B5FBF]",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#5EC1E8]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#FFC94B]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#A5C85A] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Recommendations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {recommendations.map((rec, index) => {
            const IconComponent = rec.icon;
            return (
              <div
                key={rec.title}
                className={`group relative bg-white hover:bg-[#FAF7F2] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="relative h-32 bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#2F3E3E]/50">
                      <IconComponent className="w-10 h-10 mx-auto mb-2" />
                      <p className="text-xs">{rec.title}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {rec.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                    {rec.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${rec.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${rec.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Need More Resources?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our support team and
              we'll help you find the perfect resources for your child's
              learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Contact Support
              </button>
              <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Browse All Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const Resources: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <FreeDownloads />
      <ParentGuides />
      <Recommendations />

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

export default Resources;
