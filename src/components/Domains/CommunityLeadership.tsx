import React from "react";
import {
  ArrowRight,
  Users,
  Heart,
  TreePine,
  Scale,
  Shield,
  Lightbulb,
  Globe,
} from "lucide-react";

// Child Component 1: Volunteer Opportunities
const VolunteerOpportunities: React.FC = () => {
  const opportunities = [
    {
      title: "Local Park Cleanup",
      description:
        "Join community efforts to maintain and beautify our local parks and shoreline areas.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Senior Center Visits",
      description:
        "Spend quality time with elderly residents, creating crafts and sharing stories.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Community Garden Project",
      description:
        "Help grow fresh produce while learning about sustainable agriculture.",
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#2CA4A4]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#A5C85A]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-[#2CA4A4]/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-[#2CA4A4]" />
            <span className="text-sm font-medium text-[#2CA4A4]">
              Community & Leadership
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Community & Leadership
          </h1>

          <p className="text-lg text-[#2CA4A4] font-medium max-w-4xl mx-auto">
            Engage community minds, nurture service-oriented hearts through
            volunteering, young leaders' clubs, and mentorship programs. Prepare
            children to become healthy role models for their community, nation,
            and world.
          </p>
        </div>

        {/* Volunteer Opportunities Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Volunteer Opportunities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={opportunity.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/20 to-[#A5C85A]/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Heart className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-xs">{opportunity.title}</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-pulse"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${opportunity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${opportunity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: Young Leaders' Clubs
const YoungLeadersClubs: React.FC = () => {
  const clubs = [
    {
      title: "Environmental Club",
      description:
        "Eco-warriors focused on sustainability initiatives and environmental awareness.",
      color: "bg-[#A5C85A]",
    },
    {
      title: "Social Justice Club",
      description:
        "Student activists focused on social justice topics affecting their community.",
      color: "bg-[#FFC94B]",
    },
    {
      title: "Community Service Club",
      description:
        "Organizing service projects and partnerships to serve others.",
      color: "bg-[#2CA4A4]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#8B5FBF] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Young Leaders' Clubs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <div
              key={club.title}
              className={`group relative text-center animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Club card */}
              <div className="bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                {/* Club logo placeholder */}
                <div
                  className={`relative h-32 ${club.color} rounded-xl mb-6 overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      {club.title === "Environmental Club" && (
                        <TreePine className="w-16 h-16 mx-auto mb-2" />
                      )}
                      {club.title === "Social Justice Club" && (
                        <Scale className="w-16 h-16 mx-auto mb-2" />
                      )}
                      {club.title === "Community Service Club" && (
                        <Shield className="w-16 h-16 mx-auto mb-2" />
                      )}
                      <p className="text-xs font-bold opacity-80">
                        {club.title.split(" ")[0]}
                      </p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {club.title}
                  </h3>
                  <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {club.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2CA4A4]/5 to-[#5EC1E8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Mentorship Programs & Global Citizenship
const MentorshipAndGlobal: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#8B5FBF]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mentorship Programs */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-12 text-center animate-fadeInUp">
            Mentorship Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Peer Mentorship */}
            <div className="group relative text-center animate-fadeInUp">
              <div className="bg-[#2CA4A4] hover:bg-[#5EC1E8] rounded-2xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                {/* Icon placeholder */}
                <div className="relative h-24 w-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-white">
                  <h3 className="text-2xl font-bold mb-4">MENTORSHIP</h3>
                  <h4 className="text-lg font-semibold">Peer Mentorship</h4>
                  <p className="text-white/90 leading-relaxed">
                    Older students mentor younger kids in guidance and support
                    to enhance personal growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Adult Mentorship */}
            <div
              className="group relative text-center animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-[#A5C85A] hover:bg-[#2CA4A4] rounded-2xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                {/* Icon placeholder */}
                <div className="relative h-24 w-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-white/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-white">
                  <h3 className="text-2xl font-bold mb-4">ADULT</h3>
                  <h4 className="text-lg font-semibold">Adult Mentorship</h4>
                  <p className="text-white/90 leading-relaxed">
                    Experienced adults guide teens in career paths, personal
                    insights and dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Citizenship & Local Involvement */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Globe className="w-8 h-8 text-[#2CA4A4]" />
                <h2 className="text-2xl font-bold text-[#2F3E3E]">
                  Global Citizenship & Local Involvement
                </h2>
              </div>

              <p className="text-lg text-[#2F3E3E]/80 leading-relaxed max-w-3xl mx-auto">
                Engage children in projects that promote global awareness while
                focusing on making a positive impact in our local community.
                Learn how local actions connect to global change.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Explore Global Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Local Impact Stories</span>
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
const CommunityLeadership: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <VolunteerOpportunities />
      <YoungLeadersClubs />
      <MentorshipAndGlobal />

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

export default CommunityLeadership;
