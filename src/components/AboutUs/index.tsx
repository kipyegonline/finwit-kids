import React from "react";
import {
  ArrowRight,
  Eye,
  Heart,
  Users,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2F3E3E] flex items-center space-x-3">
                <Eye className="w-6 h-6 text-[#2CA4A4]" />
                <span>Our Vision and Mission</span>
              </h2>

              <div className="space-y-4 text-[#2F3E3E]/80 leading-relaxed">
                <p>
                  At Finwit Kids, our vision is to empower children with the
                  knowledge and skills to navigate the complexities of the
                  modern world. Our mission is to provide a holistic development
                  platform that nurtures their intellectual, emotional, and
                  spiritual growth, preparing them for a future of purpose and
                  impact.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-64 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <Target className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Vision & Mission Illustration</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-[#2CA4A4] rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse"></div>
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

// Child Component 3: Meet the Founder
const MeetTheFounder: React.FC = () => {
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
              <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
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
      <MeetTheFounder />

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

export default AboutUs;
