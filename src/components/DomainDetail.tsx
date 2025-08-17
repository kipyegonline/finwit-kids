import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Users } from "lucide-react";
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
} from "lucide-react";
import Header from "./UI/header";
import Footer from "./UI/Footer";

const DomainDetail = () => {
  const { domain } = useParams<{ domain: string }>();
  console.log(domain);

  // Domain data mapping
  const domainData: Record<
    string,
    {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
      color: string;
      bgColor: string;
      fullDescription: string;
      keyTopics: string[];
      ageGroups: Record<string, string>;
    }
  > = {
    "financial-literacy": {
      icon: DollarSign,
      title: "Financial Literacy",
      description:
        "Building a strong foundation in financial literacy and responsible money management.",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
      fullDescription:
        "Our Financial Literacy program teaches children the fundamentals of money management, saving, investing, and making smart financial decisions. Through interactive lessons and real-world scenarios, kids learn the value of money and develop healthy financial habits that will serve them throughout their lives.",
      keyTopics: [
        "Understanding Money and Currency",
        "Saving and Budgeting",
        "Introduction to Investing",
        "Smart Spending Decisions",
        "Entrepreneurship Basics",
        "Financial Goal Setting",
      ],
      ageGroups: {
        "4-7":
          "Basic money recognition, counting coins, understanding wants vs needs",
        "8-12": "Saving strategies, simple budgeting, introduction to banking",
        "13-18":
          "Advanced budgeting, investing concepts, entrepreneurship, financial planning",
      },
    },
    "spiritual-growth": {
      icon: Cross,
      title: "Spiritual Growth (Christianity)",
      description:
        "Nurturing spiritual development through Christian values and teachings.",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
      bgColor: "bg-[#8B5FBF]/10",
      fullDescription:
        "Our Spiritual Growth program is rooted in Christian values, helping children develop a strong spiritual foundation. Through Bible stories, prayer, worship, and Christian principles, children learn about God's love, develop moral character, and understand their purpose in life.",
      keyTopics: [
        "Bible Stories and Teachings",
        "Prayer and Worship",
        "Christian Values and Morals",
        "Service to Others",
        "Faith Development",
        "Character Building",
      ],
      ageGroups: {
        "4-7": "Simple Bible stories, basic prayers, understanding God's love",
        "8-12":
          "Bible study, developing personal faith, Christian values in daily life",
        "13-18":
          "Deep theological concepts, personal relationship with God, Christian leadership",
      },
    },
    "emotional-mental-wellbeing": {
      icon: Heart,
      title: "Emotional & Mental Well-being",
      description:
        "Promoting emotional intelligence, resilience, and positive mental health.",
      color: "from-[#FFC94B] to-[#A5C85A]",
      bgColor: "bg-[#FFC94B]/10",
      fullDescription:
        "Our Emotional & Mental Well-being program focuses on developing emotional intelligence, building resilience, and maintaining positive mental health. Children learn to understand and manage their emotions, develop coping strategies, and build strong social skills.",
      keyTopics: [
        "Emotional Intelligence",
        "Stress Management",
        "Building Resilience",
        "Social Skills Development",
        "Self-Awareness",
        "Positive Thinking",
      ],
      ageGroups: {
        "4-7":
          "Identifying emotions, basic coping strategies, friendship skills",
        "8-12":
          "Emotional regulation, conflict resolution, building confidence",
        "13-18":
          "Advanced emotional intelligence, stress management, mental health awareness",
      },
    },
    "creative-arts--craft": {
      icon: Palette,
      title: "Creative Arts & Craft",
      description:
        "Encouraging creativity, self-expression, and appreciation for the arts and crafts.",
      color: "from-[#8B5FBF] to-[#5EC1E8]",
      bgColor: "bg-[#8B5FBF]/10",
      fullDescription:
        "Our Creative Arts & Craft program nurtures creativity and self-expression through various artistic mediums. Children explore painting, drawing, crafting, and other creative activities that develop fine motor skills, imagination, and artistic appreciation.",
      keyTopics: [
        "Drawing and Painting Techniques",
        "Crafting with Various Materials",
        "Art History and Appreciation",
        "Creative Problem Solving",
        "Self-Expression Through Art",
        "Fine Motor Skill Development",
      ],
      ageGroups: {
        "4-7": "Basic drawing, simple crafts, color recognition, creative play",
        "8-12":
          "Advanced art techniques, mixed media projects, art history basics",
        "13-18":
          "Professional art skills, portfolio development, art career exploration",
      },
    },
    "science--innovation": {
      icon: Microscope,
      title: "Science & Innovation",
      description:
        "Exploring scientific concepts and fostering innovative thinking.",
      color: "from-[#5EC1E8] to-[#2CA4A4]",
      bgColor: "bg-[#5EC1E8]/10",
      fullDescription:
        "Our Science & Innovation program encourages curiosity about the natural world and develops scientific thinking. Through hands-on experiments, observations, and investigations, children learn to ask questions, form hypotheses, and discover how things work.",
      keyTopics: [
        "Scientific Method",
        "Physics and Chemistry Basics",
        "Biology and Life Sciences",
        "Environmental Science",
        "Innovation and Invention",
        "Critical Thinking Skills",
      ],
      ageGroups: {
        "4-7":
          "Simple experiments, nature observation, basic scientific concepts",
        "8-12": "Structured experiments, scientific method, hypothesis testing",
        "13-18":
          "Advanced scientific concepts, research projects, innovation challenges",
      },
    },
    "music-film--media": {
      icon: Music,
      title: "Music, Film & Media",
      description:
        "Developing musical skills, appreciation, and creativity in music, film, and media.",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
      fullDescription:
        "Our Music, Film & Media program develops artistic expression through various media forms. Children learn musical instruments, explore film creation, and understand media literacy while developing creativity and technical skills.",
      keyTopics: [
        "Musical Instrument Training",
        "Music Theory and Composition",
        "Film Production Basics",
        "Media Literacy",
        "Digital Content Creation",
        "Performance and Presentation",
      ],
      ageGroups: {
        "4-7": "Simple instruments, singing, basic rhythm, story creation",
        "8-12": "Instrument lessons, basic recording, simple video projects",
        "13-18": "Advanced music production, film making, media analysis",
      },
    },
    "technology--digital-literacy": {
      icon: Monitor,
      title: "Technology & Digital Literacy",
      description:
        "Understanding technology and developing digital literacy skills.",
      color: "from-[#2CA4A4] to-[#8B5FBF]",
      bgColor: "bg-[#2CA4A4]/10",
      fullDescription:
        "Our Technology & Digital Literacy program prepares children for the digital age. Students learn programming, digital citizenship, and how to use technology effectively and safely while developing problem-solving and computational thinking skills.",
      keyTopics: [
        "Basic Programming Concepts",
        "Digital Citizenship",
        "Internet Safety",
        "Computer Skills",
        "App and Web Development",
        "Technology Ethics",
      ],
      ageGroups: {
        "4-7": "Basic computer skills, internet safety, simple coding games",
        "8-12": "Programming basics, digital projects, online research skills",
        "13-18":
          "Advanced programming, web development, technology entrepreneurship",
      },
    },
    "food--nutrition": {
      icon: Apple,
      title: "Food & Nutrition",
      description:
        "Learning about healthy eating habits and the importance of balanced nutrition.",
      color: "from-[#FFC94B] to-[#5EC1E8]",
      bgColor: "bg-[#FFC94B]/10",
      fullDescription:
        "Our Food & Nutrition program teaches children about healthy eating, cooking skills, and the science of nutrition. Students learn to make informed food choices, understand nutritional labels, and develop practical cooking abilities.",
      keyTopics: [
        "Nutritional Science",
        "Healthy Meal Planning",
        "Cooking Skills",
        "Food Safety",
        "Garden to Table",
        "Cultural Food Traditions",
      ],
      ageGroups: {
        "4-7": "Identifying healthy foods, simple cooking tasks, food groups",
        "8-12": "Meal planning, basic cooking skills, nutrition labels",
        "13-18":
          "Advanced cooking, nutrition science, diet and health connections",
      },
    },
    "agriculture--landscapingoutdoors": {
      icon: TreePine,
      title: "Agriculture & Landscaping/Outdoors",
      description:
        "Connecting with nature, understanding agricultural practices, and promoting outdoor activities.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
      bgColor: "bg-[#A5C85A]/10",
      fullDescription:
        "Our Agriculture & Landscaping/Outdoors program connects children with nature and teaches sustainable practices. Students learn about farming, gardening, environmental stewardship, and outdoor skills while developing a deep appreciation for the natural world.",
      keyTopics: [
        "Sustainable Agriculture",
        "Gardening and Horticulture",
        "Environmental Conservation",
        "Outdoor Survival Skills",
        "Weather and Climate",
        "Ecosystem Understanding",
      ],
      ageGroups: {
        "4-7": "Simple gardening, nature walks, basic plant care",
        "8-12": "Garden planning, composting, outdoor exploration",
        "13-18":
          "Advanced agriculture, landscaping design, environmental science",
      },
    },
    "physical-wellness-play--exercise": {
      icon: Dumbbell,
      title: "Physical Wellness (Play & Exercise)",
      description:
        "Promoting physical fitness, healthy play, and exercise habits.",
      color: "from-[#5EC1E8] to-[#FFC94B]",
      bgColor: "bg-[#5EC1E8]/10",
      fullDescription:
        "Our Physical Wellness program promotes active lifestyles and physical health. Children learn about fitness, nutrition, sports skills, and the importance of regular exercise while developing coordination, strength, and healthy habits.",
      keyTopics: [
        "Fitness and Exercise",
        "Sports Skills Development",
        "Motor Skill Development",
        "Health and Wellness",
        "Team Building",
        "Injury Prevention",
      ],
      ageGroups: {
        "4-7": "Active play, basic motor skills, simple sports activities",
        "8-12": "Organized sports, fitness basics, teamwork skills",
        "13-18": "Advanced fitness training, sports leadership, health science",
      },
    },
    // Add more domains as they are implemented...
    // TODO: Add remaining domains (Community and Leadership, Vernacular & Cultural Identity)
    // Add more domains as needed...
  };

  const currentDomain = domainData[domain || ""];

  if (!currentDomain) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2F3E3E] mb-4">
            Domain Not Found
          </h1>
          <Link
            to="/"
            className="text-[#2CA4A4] hover:text-[#5EC1E8] font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = currentDomain.icon;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-[#2CA4A4] hover:text-[#5EC1E8] font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Domains</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div
                className={`w-20 h-20 ${currentDomain.bgColor} rounded-2xl flex items-center justify-center`}
              >
                <IconComponent className="w-10 h-10 text-[#2CA4A4]" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[#2F3E3E]">
                {currentDomain.title}
              </h1>

              <p className="text-lg text-[#2F3E3E]/80 leading-relaxed">
                {currentDomain.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Learning
                </button>
                <button className="bg-white hover:bg-[#FAF7F2] text-[#2CA4A4] border-2 border-[#2CA4A4] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Download Resources
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br ${currentDomain.color} rounded-3xl p-8 shadow-2xl`}
              >
                <div className="h-64 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <IconComponent className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2F3E3E] mb-4">
              Key Learning Topics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDomain.keyTopics.map((topic: string, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`w-8 h-8 ${currentDomain.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <BookOpen className="w-4 h-4 text-[#2CA4A4]" />
                  </div>
                  <h3 className="font-semibold text-[#2F3E3E]">{topic}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2F3E3E] mb-4">
              Age-Appropriate Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(currentDomain.ageGroups).map(
              ([ageRange, description]) => (
                <div key={ageRange} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${currentDomain.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2F3E3E] mb-3">
                    Ages {ageRange}
                  </h3>
                  <p className="text-[#2F3E3E]/80 leading-relaxed">
                    {description as string}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DomainDetail;
