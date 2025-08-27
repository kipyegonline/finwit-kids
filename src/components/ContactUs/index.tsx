import React, { useState } from "react";
import {
  Send,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Child Component 1: Contact Form
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center animate-fadeInUp">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#A5C85A]/20">
          <div className="w-16 h-16 bg-[#A5C85A] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#2F3E3E] mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-[#2F3E3E]/80 mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto animate-fadeInUp">
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#2F3E3E] mb-2"
          >
            Your Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-[#2F3E3E]/40" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-[#2F3E3E]/50 focus:outline-none focus:ring-2 focus:ring-[#2CA4A4]/20 focus:border-[#2CA4A4] transition-colors duration-200 ${
                errors.name
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            />
            {errors.name && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
            )}
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#2F3E3E] mb-2"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-[#2F3E3E]/40" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-[#2F3E3E]/50 focus:outline-none focus:ring-2 focus:ring-[#2CA4A4]/20 focus:border-[#2CA4A4] transition-colors duration-200 ${
                errors.email
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            />
            {errors.email && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
            )}
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#2F3E3E] mb-2"
          >
            Subject
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MessageSquare className="h-5 w-5 text-[#2F3E3E]/40" />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter subject"
              className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-[#2F3E3E]/50 focus:outline-none focus:ring-2 focus:ring-[#2CA4A4]/20 focus:border-[#2CA4A4] transition-colors duration-200 ${
                errors.subject
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            />
            {errors.subject && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
            )}
          </div>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#2F3E3E] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            className={`block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-[#2F3E3E]/50 focus:outline-none focus:ring-2 focus:ring-[#2CA4A4]/20 focus:border-[#2CA4A4] resize-none transition-colors duration-200 ${
              errors.message
                ? "border-red-300 bg-red-50"
                : "border-gray-300 bg-white"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#2CA4A4] hover:bg-[#5EC1E8] disabled:bg-[#2CA4A4]/50 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Submit</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Child Component 2: Social Media Links
const SocialMediaLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#instagram",
      color: "hover:bg-pink-500",
      textColor: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#twitter",
      color: "hover:bg-blue-500",
      textColor: "hover:text-blue-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#facebook",
      color: "hover:bg-blue-600",
      textColor: "hover:text-blue-600",
    },
  ];

  return (
    <div
      className="text-center space-y-6 animate-fadeInUp"
      style={{ animationDelay: "0.2s" }}
    >
      <h3 className="text-xl font-bold text-[#2F3E3E]">Connect with Us</h3>
      <p className="text-[#2F3E3E]/80">
        Follow us on social media for the latest updates, tips, and community
        engagement.
      </p>

      <div className="flex justify-center space-x-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              className={`group w-12 h-12 bg-[#FAF7F2] hover:bg-white rounded-xl flex items-center justify-center text-[#2F3E3E]/60 ${social.textColor} transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md border border-gray-100 hover:border-current/20`}
            >
              <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

// Child Component 3: Newsletter Subscription
const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail("");
      setEmailError("");

      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  return (
    <div
      className="text-center space-y-6 animate-fadeInUp"
      style={{ animationDelay: "0.4s" }}
    >
      <h3 className="text-xl font-bold text-[#2F3E3E]">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-[#2F3E3E]/80 max-w-md mx-auto">
        Stay informed about our new programs, resources, and special offers by
        subscribing to our newsletter.
      </p>

      {!isSubscribed ? (
        <div className="max-w-sm mx-auto">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#2F3E3E]/40" />
              </div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-[#2F3E3E]/50 focus:outline-none focus:ring-2 focus:ring-[#2CA4A4]/20 focus:border-[#2CA4A4] transition-colors duration-200 ${
                  emailError
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 bg-white"
                }`}
              />
              {emailError && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
              )}
            </div>
            {emailError && (
              <p className="text-sm text-red-600 flex items-center justify-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {emailError}
              </p>
            )}
            <button
              onClick={handleSubscribe}
              disabled={isSubscribing}
              className="w-full bg-[#FFC94B] hover:bg-[#A5C85A] disabled:bg-[#FFC94B]/50 text-[#2F3E3E] font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              {isSubscribing ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#2F3E3E]/30 border-t-[#2F3E3E] rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#A5C85A]/10 border border-[#A5C85A]/30 rounded-xl p-6 max-w-sm mx-auto">
          <CheckCircle className="w-8 h-8 text-[#A5C85A] mx-auto mb-3" />
          <h4 className="font-semibold text-[#2F3E3E] mb-2">
            Successfully Subscribed!
          </h4>
          <p className="text-sm text-[#2F3E3E]/80">
            Thank you for joining our newsletter.
          </p>
        </div>
      )}
    </div>
  );
};

// Parent Component
const ContactUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <section className="py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#2CA4A4]/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#FFC94B]/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#5EC1E8] rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-[#2F3E3E]/80 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Reach out to us with any questions or
              feedback. Our team is dedicated to providing prompt and helpful
              assistance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-12">
              <SocialMediaLinks />
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </main>
  );
};

export default ContactUs;
