import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");

      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#5EC1E8]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#A5C85A]/5 rounded-full blur-xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-[#8B5FBF] rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#2CA4A4] rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 left-20 w-4 h-4 bg-[#FFC94B] rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Decorative lines */}
        <svg
          className="absolute top-0 left-0 w-full h-32 text-[#2CA4A4]/5"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 300,0 450,60 C600,120 750,0 900,60 C1050,120 1200,0 1200,60 L1200,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6 leading-tight">
            Stay smart. Get tips for growing{" "}
            <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
              brilliant kids.
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#FFC94B] via-[#A5C85A] to-[#2CA4A4] mx-auto rounded-full"></div>
        </div>

        {/* Newsletter Form */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          {!isSubscribed ? (
            <div className="max-w-md mx-auto">
              <div className="relative group">
                <div className="flex bg-[#FAF7F2] border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-[#2CA4A4]/30">
                  {/* Email Input */}
                  <div className="flex items-center flex-1 px-4">
                    <Mail className="w-5 h-5 text-[#2CA4A4] mr-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent text-[#2F3E3E] placeholder-[#2F3E3E]/60 focus:outline-none text-sm"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email}
                    className="bg-[#FFC94B] hover:bg-[#A5C85A] disabled:bg-gray-300 text-[#2F3E3E] font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-md hover:shadow-lg flex items-center space-x-2 min-w-[120px] justify-center"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-[#2F3E3E]/30 border-t-[#2F3E3E] rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Focus ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#2CA4A4] opacity-0 group-focus-within:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Privacy notice */}
              <p className="text-xs text-[#2F3E3E]/60 mt-4 leading-relaxed">
                Join hundreds of parents receiving weekly tips, activities, and
                insights to help their children thrive.
                <br />
                No spam, unsubscribe anytime.
              </p>
            </div>
          ) : (
            /* Success Message */
            <div className="max-w-md mx-auto animate-fadeInUp">
              <div className="bg-gradient-to-r from-[#A5C85A]/10 to-[#2CA4A4]/10 border border-[#A5C85A]/30 rounded-2xl p-8">
                <div className="w-16 h-16 bg-[#A5C85A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2F3E3E] mb-2">
                  Welcome aboard! 🎉
                </h3>
                <p className="text-[#2F3E3E]/80">
                  You're now subscribed to our newsletter. Get ready for amazing
                  parenting tips and insights!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div
          className="mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: "📚",
                title: "Weekly Tips",
                description: "Expert advice on child development and learning",
              },
              {
                icon: "🎯",
                title: "Activities",
                description: "Fun, educational activities for the whole family",
              },
              {
                icon: "💡",
                title: "Insights",
                description:
                  "Research-backed strategies for raising brilliant kids",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="group text-center animate-fadeInUp"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FAF7F2] to-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 border border-[#2CA4A4]/10">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="font-semibold text-[#2F3E3E] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-[#2F3E3E]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
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

export default NewsletterSection;
