import React from "react";
import { ArrowRight, ChefHat, Apple, Sprout, Book, Heart } from "lucide-react";

// Child Component 1: Fun Recipes
const FunRecipes: React.FC = () => {
  const recipes = [
    {
      title: "Rainbow Veggie Wraps",
      description:
        "Colorful and nutritious wraps filled with fresh veggies and hummus.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Fruity Yogurt Parfaits",
      description:
        "Layers of yogurt, granola, and fresh fruits for a delightful breakfast or snack.",
      color: "from-[#FFC94B] to-[#5EC1E8]",
    },
    {
      title: "Mini Chicken Skewers",
      description:
        "Grilled chicken skewers with a variety of colorful vegetables.",
      color: "from-[#8B5FBF] to-[#2CA4A4]",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFC94B]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#A5C85A]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#2CA4A4] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-[#A5C85A]/10 px-4 py-2 rounded-full mb-6">
            <Apple className="w-4 h-4 text-[#A5C85A]" />
            <span className="text-sm font-medium text-[#A5C85A]">
              Food & Nutrition
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Food & Nutrition
          </h1>

          <p className="text-lg text-[#2CA4A4] font-medium max-w-3xl mx-auto">
            Nourishing young bodies and minds with fun recipes, cook-alongs, and
            nutritional wisdom rooted in biblical principles.
          </p>
        </div>

        {/* Fun Recipes Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Fun Recipes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div
                key={recipe.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/20 to-[#5EC1E8]/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <ChefHat className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-xs">{recipe.title}</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-pulse"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${recipe.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${recipe.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: Kids' Kitchen
const KidsKitchen: React.FC = () => {
  const activities = [
    {
      title: "Cook-Alongs",
      description:
        "Join our interactive cooking sessions where kids learn to prepare healthy meals.",
      icon: ChefHat,
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Gardening Tips",
      description:
        "Learn how to grow your own fresh and vegetables with our easy gardening tips.",
      icon: Sprout,
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Nutrition Games",
      description:
        "Engaging games that teach kids about the importance of nutrition.",
      icon: Apple,
      color: "from-[#5EC1E8] to-[#8B5FBF]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#8B5FBF] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Kids' Kitchen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.title}
                className={`group relative text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Activity card */}
                <div className="bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-xl mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-xs">{activity.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-bounce"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activity.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${activity.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Nutritional Wisdom & Biblical Principles
const NutritionalWisdom: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#8B5FBF]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#5EC1E8]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] leading-tight">
                Nutritional Wisdom & Biblical Principles
              </h2>

              <p className="text-lg text-[#2F3E3E]/80 leading-relaxed">
                Explore the connection between nutritional health and biblical
                teachings on caring for our bodies. Discover how to make healthy
                choices that honor God and support overall well-being.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#8B5FBF] hover:bg-[#2CA4A4] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Book className="w-5 h-5" />
                <span>Explore Wisdom</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="group bg-[#A5C85A] hover:bg-[#FFC94B] text-[#2F3E3E] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Healthy Living Guide</span>
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fadeInRight">
            <div className="relative bg-gradient-to-br from-[#8B5FBF]/10 to-[#5EC1E8]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#8B5FBF]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#8B5FBF]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Book className="w-12 h-12" />
                      <Heart className="w-16 h-16" />
                    </div>
                    <p className="text-sm">Biblical Nutrition Wisdom</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-10 h-10 bg-[#8B5FBF] rounded-full flex items-center justify-center animate-bounce">
                  <Book className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#A5C85A] rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFC94B] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2CA4A4] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const FoodNutrition: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <FunRecipes />
      <KidsKitchen />
      <NutritionalWisdom />

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

export default FoodNutrition;
