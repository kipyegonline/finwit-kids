import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/finwit_kids_logo_clear.png";
import LogoFin from "../../assets/fwk_clear.png";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Programs", href: "#programs" },
    { name: "Resources", href: "#resources" },
    { name: "Community", href: "#community" },
    { name: "About Us", href: "#about" },
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
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20  rounded-full flex items-center justify-center">
              <img src={Logo} alt="Finwit Kids Logo" className="w-20 h-20" />
            </div>
            <span className="text-[#2F3E3E] font-bold text-lg hidden">
              Finwit Kids
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-end space-x-8 ">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#2F3E3E] hover:text-[#2CA4A4] font-medium transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#2CA4A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-[#2F3E3E] hover:text-[#2CA4A4] hover:bg-[#FAF7F2] rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
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
