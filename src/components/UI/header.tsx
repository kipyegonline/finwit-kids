import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  GraduationCap,
  BookOpen,
  Users,
  Contact,
  DollarSign,
} from "lucide-react";
import Logo from "../../assets/finwit_kids_logo_clear.png";
import { Link, useLocation } from "react-router-dom";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const NoSign = () => null;

  const mainNavItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about-us", icon: Info },
    { name: "Programs", href: "/programs", icon: GraduationCap },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Community", href: "/community", icon: Users },
  ];

  const actionNavItems = [
    { name: "Pricing", href: "/pricing", icon: NoSign },
    // { name: "Contact", href: "/contact-us", icon: Contact },
  ];

  const allNavItems = [...mainNavItems, ...actionNavItems];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
          {/* Logo - Left Side */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img src={Logo} alt="Finwit Kids Logo" className="w-16 h-16" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Center and Right */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {/* Main Navigation Items */}
            <nav className="flex items-center space-x-1">
              {mainNavItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1.5 font-medium transition-all duration-300 relative group whitespace-nowrap px-4 py-2.5 rounded-lg ${
                      isActive
                        ? "text-[#2CA4A4] bg-[#2CA4A4]/10"
                        : "text-[#2F3E3E] hover:text-[#2CA4A4] hover:bg-[#2CA4A4]/5"
                    }`}
                  >
                    <IconComponent
                      size={18}
                      className={`transition-all duration-300 ${
                        isActive ? "text-[#2CA4A4]" : "group-hover:scale-110"
                      }`}
                    />
                    <span className="text-sm">{item.name}</span>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] transition-transform duration-300 rounded-full ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="h-8 w-px bg-[#2CA4A4]/20"></div>

            {/* Action Items */}
            <div className="flex items-center space-x-2">
              {actionNavItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                const isPricing = item.name === "Pricing";
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1.5 font-medium transition-all duration-300 relative group whitespace-nowrap px-4 py-2.5 rounded-lg ${
                      isActive
                        ? isPricing
                          ? "text-white bg-gradient-to-r from-[#FFC94B] to-[#A5C85A] shadow-md"
                          : "text-[#2CA4A4] bg-[#2CA4A4]/10"
                        : isPricing
                        ? "text-[#2F3E3E] bg-[#FFC94B]/20 hover:bg-gradient-to-r hover:from-[#FFC94B] hover:to-[#A5C85A] hover:text-white hover:shadow-md"
                        : "text-[#2F3E3E] hover:text-[#2CA4A4] hover:bg-[#2CA4A4]/5"
                    }`}
                  >
                    <IconComponent
                      size={18}
                      className={`transition-all duration-300 ${
                        isActive && isPricing
                          ? "text-white"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span className="text-sm font-semibold">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              to="/pricing"
              className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl whitespace-nowrap text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2F3E3E] hover:text-[#2CA4A4] transition-colors duration-200 p-2 rounded-lg hover:bg-[#2CA4A4]/5"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`block lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-2xl mt-2 shadow-xl border border-[#2CA4A4]/10">
            {/* Main Nav Items */}
            <div className="space-y-1">
              {allNavItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                const isPricing = item.name === "Pricing";
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? isPricing
                          ? "text-white bg-gradient-to-r from-[#FFC94B] to-[#A5C85A] shadow-md"
                          : "text-[#2CA4A4] bg-[#2CA4A4]/10 border-l-4 border-[#2CA4A4]"
                        : isPricing
                        ? "text-[#2F3E3E] bg-[#FFC94B]/10 hover:bg-[#FFC94B]/20"
                        : "text-[#2F3E3E] hover:text-[#2CA4A4] hover:bg-[#FAF7F2] hover:translate-x-1"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent
                      size={20}
                      className={`transition-transform duration-300 ${
                        isActive && isPricing
                          ? "text-white"
                          : isActive
                          ? "text-[#2CA4A4]"
                          : ""
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#2CA4A4]/20 to-transparent mx-4"></div>

            {/* CTA Button */}
            <div className="px-4 pt-2">
              <Link
                to="/pricing"
                className="w-full flex items-center justify-center bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
