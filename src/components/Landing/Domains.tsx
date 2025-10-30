import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DollarSign,
  Cross,
  Heart,
  Palette,
  Microscope,
  Music,
  Monitor,
  Apple,
  TreePine,
  Dumbbell,
  Users,
  BookOpen,
} from "lucide-react";

const DomainsSection: React.FC = () => {
  // Function to convert domain title to URL slug
  const titleToSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim();
  };

  const domains = [
    {
      icon: DollarSign,
      title: "Financial Literacy",
      description:
        "Building a strong foundation in financial literacy and responsible money management.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
      hoverColor: "group-hover:bg-[#2CA4A4]/20",
    },
    {
      icon: Cross,
      title: "Spiritual Growth (Christianity)",
      description:
        "Nurturing spiritual development through Christian values and teachings.",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
      hoverColor: "group-hover:bg-[#8B5FBF]/20",
    },
    {
      icon: Heart,
      title: "Emotional & Mental Well-being",
      description:
        "Promoting emotional intelligence, resilience, and positive mental health.",
      color: "from-[#FFC94B] to-[#A5C85A]",
      bgColor: "bg-[#FFC94B]/10",
      hoverColor: "group-hover:bg-[#FFC94B]/20",
    },
    {
      icon: Palette,
      title: "Creative Arts & Craft",
      description:
        "Encouraging creativity, self-expression, and appreciation for the arts and crafts.",
      color: "from-[#8B5FBF] to-[#5EC1E8]",
      bgColor: "bg-[#8B5FBF]/10",
      hoverColor: "group-hover:bg-[#8B5FBF]/20",
    },
    {
      icon: Microscope,
      title: "Science & Innovation",
      description:
        "Exploring scientific concepts and fostering innovative thinking.",
      color: "from-[#5EC1E8] to-[#2CA4A4]",
      bgColor: "bg-[#5EC1E8]/10",
      hoverColor: "group-hover:bg-[#5EC1E8]/20",
    },
    {
      icon: Music,
      title: "Music, Film & Media",
      description:
        "Developing musical skills, appreciation, and creativity in music, film, and media.",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
      hoverColor: "group-hover:bg-[#A5C85A]/20",
    },
    {
      icon: Monitor,
      title: "Technology & Digital Literacy",
      description:
        "Understanding technology and developing digital literacy skills.",
      color: "from-[#2CA4A4] to-[#8B5FBF]",
      bgColor: "bg-[#2CA4A4]/10",
      hoverColor: "group-hover:bg-[#2CA4A4]/20",
    },
    {
      icon: Apple,
      title: "Food & Nutrition",
      description:
        "Learning about healthy eating habits and the importance of balanced nutrition.",
      color: "from-[#FFC94B] to-[#5EC1E8]",
      bgColor: "bg-[#FFC94B]/10",
      hoverColor: "group-hover:bg-[#FFC94B]/20",
    },
    {
      icon: TreePine,
      title: "Agriculture & Landscaping/Outdoors",
      description:
        "Connecting with nature, understanding agricultural practices, and promoting outdoor activities.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
      bgColor: "bg-[#A5C85A]/10",
      hoverColor: "group-hover:bg-[#A5C85A]/20",
    },
    {
      icon: Dumbbell,
      title: "Physical Wellness (Play & Exercise)",
      description:
        "Promoting physical fitness, healthy play, and exercise habits.",
      color: "from-[#5EC1E8] to-[#FFC94B]",
      bgColor: "bg-[#5EC1E8]/10",
      hoverColor: "group-hover:bg-[#5EC1E8]/20",
    },
    {
      icon: Users,
      title: "Community and Leadership",
      description: "Developing community engagement and leadership skills.",
      color: "from-[#8B5FBF] to-[#A5C85A]",
      bgColor: "bg-[#8B5FBF]/10",
      hoverColor: "group-hover:bg-[#8B5FBF]/20",
    },
    {
      icon: BookOpen,
      title: "Vernacular & Cultural Identity",
      description:
        "Celebrating and preserving cultural heritage and linguistic diversity.",
      color: "from-[#2CA4A4] to-[#FFC94B]",
      bgColor: "bg-[#2CA4A4]/10",
      hoverColor: "group-hover:bg-[#2CA4A4]/20",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="domains">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#A5C85A]/5 rounded-full blur-xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-[#8B5FBF] rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-[#2CA4A4] rounded-full animate-bounce"></div>
        <div
          className="absolute top-80 right-16 w-4 h-4 bg-[#FFC94B] rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
              12 Domains
            </span>{" "}
            of Development
          </h2>
          <p className="text-lg text-[#2F3E3E]/80 max-w-3xl mx-auto mb-8">
            Finwit Kids goes beyond academics to nurture the whole child. Each
            domain is designed to be engaging, age-appropriate, and build on
            what children learned the year before. Choose individual domains or
            the full curriculum
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FFC94B] via-[#A5C85A] to-[#2CA4A4] mx-auto rounded-full"></div>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            const domainSlug = titleToSlug(domain.title);
            return (
              <Link
                key={domain.title}
                to={`/domains-of-development/${domainSlug}`}
                className="block"
              >
                <div
                  className={`group relative p-6 bg-[#FAF7F2] hover:bg-white rounded-2xl border border-gray-100 hover:border-[#2CA4A4]/20 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon container */}
                  <div
                    className={`relative w-14 h-14 ${domain.bgColor} ${domain.hoverColor} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-7 h-7 text-[#2CA4A4] group-hover:text-[#2F3E3E] transition-colors duration-300" />

                    {/* Floating dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC94B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300 leading-tight">
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
                    className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${domain.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                  ></div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#A5C85A] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="bg-gradient-to-r from-[#FAF7F2] to-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Explore All Domains?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Discover how our comprehensive approach helps children thrive in
              every aspect of life through engaging, age-appropriate learning
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/programs")}
                className="bg-[#2CA4A4] hover:bg-[#A5C85A] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                View All Programs
              </button>
              <button className="bg-[#FFC94B] hover:bg-[#5EC1E8] text-[#2F3E3E] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Download Curriculum Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

export default DomainsSection;
