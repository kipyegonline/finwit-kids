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
} from "lucide-react";
import Logo from "../../assets/finwit_kids_logo_clear.png";
import LogoFin from "../../assets/fwk_clear.png";
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

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about-us", icon: Info },
    { name: "Programs", href: "/programs", icon: GraduationCap },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Community", href: "/community", icon: Users },
    { name: "Contact us", href: "/contact-us", icon: Contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-none mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20  rounded-full flex items-center justify-center">
                <img src={Logo} alt="Finwit Kids Logo" className="w-20 h-20" />
              </div>
              <span className="text-[#2F3E3E] font-bold text-lg hidden">
                Finwit Kids
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-end space-x-8 ">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 font-medium transition-all duration-300 relative group whitespace-nowrap px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-[#2CA4A4] bg-[#2CA4A4]/10 shadow-sm"
                        : "text-[#2F3E3E] hover:text-[#2CA4A4] hover:bg-[#2CA4A4]/5"
                    }`}
                  >
                    <IconComponent
                      size={18}
                      className={`transition-all duration-300 ${
                        isActive ? "text-[#2CA4A4]" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.name}</span>
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-0.5 bg-[#2CA4A4] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>
            <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap ml-4">
              Get Started....
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2F3E3E] hover:text-[#2CA4A4] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`block md:hidden transition-all duration-300 ease-in-out  ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-[#2CA4A4] bg-[#2CA4A4]/10 border-l-4 border-[#2CA4A4]"
                      : "text-[#2F3E3E] hover:text-[#2CA4A4] hover:bg-[#FAF7F2] hover:translate-x-1"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent
                    size={20}
                    className={`transition-transform duration-300 ${
                      isActive ? "text-[#2CA4A4]" : "group-hover:scale-110"
                    }`}
                  />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            <div className="px-4">
              <button className="w-full bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
