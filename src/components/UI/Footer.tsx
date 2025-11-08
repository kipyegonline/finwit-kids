import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../../assets/finwit_kids_logo_clear.png";
const Footer: React.FC = () => {
  const footerLinks = {
    main: [
      { name: "About", href: "/about-us" },
      { name: "Domains", href: "/#domains" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "#blog" },
      { name: "Events", href: "#events" },
      { name: "Contact", href: "/contact-us" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#facebook",
      label: "Facebook",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: Instagram,
      href: "#instagram",
      label: "Instagram",
      color: "hover:text-[#E4405F]",
    },
    {
      icon: Youtube,
      href: "#youtube",
      label: "YouTube",
      color: "hover:text-[#FF0000]",
    },
  ];

  return (
    <footer className="bg-[#FAF7F2] border-t border-gray-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#2CA4A4]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC94B]/5 rounded-full blur-2xl"></div>

        {/* Floating dots */}
        <div className="absolute top-8 left-20 w-2 h-2 bg-[#A5C85A] rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-32 w-3 h-3 bg-[#5EC1E8] rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-20 w-2 h-2 bg-[#8B5FBF] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-2 animate-fadeInUp">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-20 h-20  rounded-full flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>
              <span className="text-[#2F3E3E] font-bold text-lg">
                Finwit Kids
              </span>
            </div>
            <p className="text-[#2F3E3E]/70 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering children from all backgrounds to thrive across nine
              essential domains of development, anchored in Godly values.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-white hover:bg-[#2CA4A4]/10 rounded-full flex items-center justify-center text-[#2F3E3E]/60 ${social.color} transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md group`}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2 md:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <h4 className="font-semibold text-[#2F3E3E] mb-4">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={footerLinks.main[0].href}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      {footerLinks.main[0].name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={footerLinks.main[5].href}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      {footerLinks.main[5].name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <h4 className="font-semibold text-[#2F3E3E] mb-4">Programs</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={footerLinks.main[1].href}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      {footerLinks.main[1].name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={footerLinks.main[2].href}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      {footerLinks.main[2].name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <h4 className="font-semibold text-[#2F3E3E] mb-4">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={footerLinks.main[3].href}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      {footerLinks.main[3].name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={footerLinks.main[4].href}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      {footerLinks.main[4].name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/community"}
                      className="text-[#2F3E3E]/70 hover:text-[#2CA4A4] text-sm transition-colors duration-200 relative group"
                    >
                      Community
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Bottom Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-[#2F3E3E]/60 text-sm">
              © 2024 Finwit Kids. All rights reserved.
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6">
            <a
              href="#privacy"
              className="text-[#2F3E3E]/60 hover:text-[#2CA4A4] text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-[#2F3E3E]/60 hover:text-[#2CA4A4] text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-[#2F3E3E]/60 hover:text-[#2CA4A4] text-sm transition-colors duration-200"
            >
              Cookie Policy
            </a>
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
    </footer>
  );
};

export default Footer;
