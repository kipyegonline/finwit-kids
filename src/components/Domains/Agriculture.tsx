import React from "react";
import {
  ArrowRight,
  TreePine,
  Leaf,
  Binoculars,
  Target,
  Bike,
  Search,
  BookOpen,
  Tractor,
  Mountain,
  Flower,
  Droplets,
} from "lucide-react";

// Child Component 1: Gardening Kits
const GardeningKits: React.FC = () => {
  const kits = [
    {
      title: "Kids' Gardening Starter Kit",
      description:
        "Everything young gardeners need to start their green journey",
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Eco-Friendly Gardening Set",
      description:
        "Sustainable tools and materials for environmentally conscious kids",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Miniature Garden Kit",
      description: "Perfect for small spaces and apartment living",
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#A5C85A]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-[#A5C85A]/10 px-4 py-2 rounded-full mb-6">
            <TreePine className="w-4 h-4 text-[#A5C85A]" />
            <span className="text-sm font-medium text-[#A5C85A]">
              Agriculture & Outdoors
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Agriculture & Outdoors
          </h1>
        </div>

        {/* Gardening Kits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Gardening Kits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {kits.map((kit, index) => (
              <div
                key={kit.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#A5C85A]/20 to-[#2CA4A4]/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Leaf className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-xs">{kit.title}</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#A5C85A] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#2CA4A4] rounded-full animate-pulse"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${kit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {kit.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                    {kit.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${kit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: Nature Walk Ideas & Outdoor Play Activities
const NatureAndPlay: React.FC = () => {
  const natureWalks = [
    { title: "Forest Exploration", icon: TreePine },
    { title: "Leaf Identification Walk", icon: Leaf },
    { title: "Bird Watching Adventure", icon: Binoculars },
  ];

  const playActivities = [
    { title: "Soccer Skills Practice", icon: Target },
    { title: "Bike Riding Fun", icon: Bike },
    { title: "Nature Scavenger Hunt", icon: Search },
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
        {/* Nature Walk Ideas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Nature Walk Ideas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {natureWalks.map((walk, index) => {
              const IconComponent = walk.icon;
              return (
                <div
                  key={walk.title}
                  className={`group flex items-center space-x-4 bg-[#FAF7F2] hover:bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#A5C85A]/30`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-[#A5C85A]/20 hover:bg-[#A5C85A]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-[#A5C85A]" />
                  </div>
                  <span className="font-medium text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {walk.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Outdoor Play Activities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Outdoor Play Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {playActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={activity.title}
                  className={`group flex items-center space-x-4 bg-[#FAF7F2] hover:bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#5EC1E8]/30`}
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-[#5EC1E8]/20 hover:bg-[#5EC1E8]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-[#5EC1E8]" />
                  </div>
                  <span className="font-medium text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {activity.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Educational Content & Partner Farm Visits
const EducationalAndVisits: React.FC = () => {
  const educationalContent = [
    { title: "Introduction to Farming", icon: Tractor },
    { title: "Animal Care Basics", icon: TreePine },
    { title: "Sustainability for Kids", icon: Leaf },
  ];

  const partnerVisits = [
    {
      title: "Local Farm Tour",
      color: "bg-gray-100",
      textColor: "text-[#2F3E3E]",
    },
    {
      title: "Dairy Farm Experience",
      color: "bg-[#2CA4A4]",
      textColor: "text-white",
    },
    {
      title: "Organic Farming Workshop",
      color: "bg-[#A5C85A]",
      textColor: "text-white",
    },
  ];

  const fieldTrips = [
    { title: "Nature Reserve Exploration", icon: Mountain },
    { title: "Botanical Garden Visit", icon: Flower },
    { title: "Zoo Adventure", icon: TreePine },
  ];

  const homeProjects = [
    { title: "Backyard Garden Setup", icon: Leaf },
    { title: "Seed Planting Activity", icon: TreePine },
    { title: "Water Conservation Project", icon: Droplets },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#2CA4A4]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#FFC94B]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#A5C85A] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Educational Content */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Educational Content
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {educationalContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div
                  key={content.title}
                  className={`group flex items-center space-x-4 bg-white hover:bg-[#FAF7F2] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/30`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-[#2CA4A4]/20 hover:bg-[#2CA4A4]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-[#2CA4A4]" />
                  </div>
                  <span className="font-medium text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {content.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Farm Visits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Partner Farm Visits
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerVisits.map((visit, index) => (
              <div
                key={visit.title}
                className={`group ${visit.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span
                  className={`font-medium ${visit.textColor} group-hover:font-semibold transition-all duration-300`}
                >
                  {visit.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Field Trips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Field Trips
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {fieldTrips.map((trip, index) => {
              const IconComponent = trip.icon;
              return (
                <div
                  key={trip.title}
                  className={`group flex items-center space-x-4 bg-white hover:bg-[#5EC1E8]/10 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#5EC1E8]/30`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-[#5EC1E8]/20 hover:bg-[#5EC1E8]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-[#5EC1E8]" />
                  </div>
                  <span className="font-medium text-[#2F3E3E] group-hover:text-[#5EC1E8] transition-colors duration-300">
                    {trip.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Home-Based Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Home-Based Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {homeProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className={`group flex items-center space-x-4 bg-white hover:bg-[#A5C85A]/10 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-[#A5C85A]/30`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-[#A5C85A]/20 hover:bg-[#A5C85A]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-[#A5C85A]" />
                  </div>
                  <span className="font-medium text-[#2F3E3E] group-hover:text-[#A5C85A] transition-colors duration-300">
                    {project.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const AgricultureOutdoors: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <GardeningKits />
      <NatureAndPlay />
      <EducationalAndVisits />

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

export default AgricultureOutdoors;
