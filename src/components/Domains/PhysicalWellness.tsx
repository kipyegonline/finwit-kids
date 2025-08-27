import React from "react";
import {
  ArrowRight,
  Sun,
  Zap,
  Moon,
  Heart,
  Dumbbell,
  Users,
  Music,
  Target,
  Activity,
} from "lucide-react";

// Child Component 1: Daily Movement Routines
const DailyMovementRoutines: React.FC = () => {
  const routines = [
    {
      title: "Morning Stretch",
      description: "Start your day with a gentle stretch routine.",
      color: "from-[#FFC94B] to-[#A5C85A]",
      icon: Sun,
    },
    {
      title: "Afternoon Energy Boost",
      description: "Get moving with a fun and energetic workout.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
      icon: Zap,
    },
    {
      title: "Evening Wind Down",
      description: "Relax and unwind with a calming dance session.",
      color: "from-[#5EC1E8] to-[#8B5FBF]",
      icon: Moon,
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFC94B]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#5EC1E8]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#A5C85A] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-[#5EC1E8]/10 px-4 py-2 rounded-full mb-6">
            <Activity className="w-4 h-4 text-[#5EC1E8]" />
            <span className="text-sm font-medium text-[#5EC1E8]">
              Physical Wellness
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Physical Wellness
          </h1>
        </div>

        {/* Daily Movement Routines Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp">
            Daily Movement Routines
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {routines.map((routine, index) => {
              const IconComponent = routine.icon;
              return (
                <div
                  key={routine.title}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#5EC1E8]/20 to-[#A5C85A]/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#5EC1E8]/10">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-xs">{routine.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#5EC1E8] rounded-full animate-pulse"></div>

                    {/* Hover gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${routine.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#5EC1E8] transition-colors duration-300">
                      {routine.title}
                    </h3>
                    <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                      {routine.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${routine.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
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

// Child Component 2: Child-Safe Workout Plans
const ChildSafeWorkoutPlans: React.FC = () => {
  const workoutPlans = [
    {
      title: "Yoga for Kids",
      description: "Improve flexibility and mindfulness with our yoga pose.",
      color: "from-[#8B5FBF] to-[#5EC1E8]",
      icon: Heart,
    },
    {
      title: "Cardio Fun",
      description: "Heart-healthy fun exercise with fun cardio exercises.",
      color: "from-[#2CA4A4] to-[#A5C85A]",
      icon: Zap,
    },
    {
      title: "Strength Building",
      description:
        "Build strength and endurance with age-appropriate workouts.",
      color: "from-[#FFC94B] to-[#5EC1E8]",
      icon: Dumbbell,
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
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Child-Safe Workout Plans
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workoutPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.title}
                className={`group relative text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Workout card */}
                <div className="bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#5EC1E8]/20">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#5EC1E8]/10 to-[#2CA4A4]/10 rounded-xl mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-xs">{plan.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-bounce"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#5EC1E8] transition-colors duration-300">
                      {plan.title}
                    </h3>
                    <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${plan.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
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

// Child Component 3: Dance Activities
const DanceActivities: React.FC = () => {
  const danceActivities = [
    {
      title: "Hip Hop Groove",
      description: "Express yourself to cool moves and express energy.",
      color: "from-[#2F3E3E] to-[#8B5FBF]",
      icon: Music,
    },
    {
      title: "Ballet Basics",
      description: "Develop fine motor skills, elegance and grace of ballet.",
      color: "from-[#FFC94B] to-[#5EC1E8]",
      icon: Heart,
    },
    {
      title: "Zumba Kids",
      description: "Dance to the rhythm with our fun Zumba classes.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
      icon: Users,
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#FFC94B]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#8B5FBF]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#5EC1E8] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Dance Activities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {danceActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.title}
                className={`group relative text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Dance card */}
                <div className="bg-white hover:bg-[#FAF7F2] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#FFC94B]/20">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#FFC94B]/10 to-[#8B5FBF]/10 rounded-xl mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-xs">{activity.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#8B5FBF] rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#FFC94B] transition-colors duration-300">
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

// Child Component 4: Sports & Body Confidence
const SportsAndBodyConfidence: React.FC = () => {
  const sports = [
    {
      title: "Soccer Skills",
      description: "Master the basics of soccer and improve your skills.",
      color: "from-[#A5C85A] to-[#2CA4A4]",
      icon: Target,
    },
    {
      title: "Basketball Drills",
      description: "Practice dribbling, shooting, and passing in basketball.",
      color: "from-[#FFC94B] to-[#A5C85A]",
      icon: Activity,
    },
    {
      title: "Gymnastics Fun",
      description:
        "Explore the world of gymnastics with fun and safe activities.",
      color: "from-[#5EC1E8] to-[#8B5FBF]",
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5C85A]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#5EC1E8] rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Sports & Body Confidence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sports.map((sport, index) => {
            const IconComponent = sport.icon;
            return (
              <div
                key={sport.title}
                className={`group relative text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Sport card */}
                <div className="bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/10 to-[#A5C85A]/10 rounded-xl mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-xs">{sport.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-bounce"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {sport.title}
                    </h3>
                    <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sport.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${sport.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
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

// Child Component 5: Age-Appropriate Fitness Challenges
const AgeFitnessLengthenes: React.FC = () => {
  const challenges = [
    {
      title: "Jumping Jacks Challenge",
      description: "See how many jumping jacks you can do in 2 minutes.",
      color: "from-[#FFC94B] to-[#5EC1E8]",
    },
    {
      title: "Push-Up Power",
      description: "Test your strength with age push-up challenge.",
      color: "from-[#2CA4A4] to-[#A5C85A]",
    },
    {
      title: "Squat Squad",
      description: "Join the squat squad and build your leg muscles.",
      color: "from-[#8B5FBF] to-[#5EC1E8]",
    },
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
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Age-Appropriate Fitness Challenges
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className={`group relative text-center animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Challenge card */}
              <div className="bg-white hover:bg-[#FAF7F2] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/10 to-[#FFC94B]/10 rounded-xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Dumbbell className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-xs">{challenge.title}</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#FFC94B] rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${challenge.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${challenge.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Parent Component
const PhysicalWellness: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <DailyMovementRoutines />
      <ChildSafeWorkoutPlans />
      <DanceActivities />
      <SportsAndBodyConfidence />
      <AgeFitnessLengthenes />

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

export default PhysicalWellness;
