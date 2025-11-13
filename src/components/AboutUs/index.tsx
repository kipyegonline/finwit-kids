import React from "react";
import {
  ArrowRight,
  Eye,
  Heart,
  Users,
  Award,
  Target,
  Lightbulb,
  Layers,
  TrendingUp,
  Fish,
  Cross,
  PartyPopper,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Child Component 1: Vision and Mission
const VisionAndMission: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Animated SVG Background - Vision & Mission Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient
              id="visionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#5EC1E8", stopOpacity: 0.3 }}
              />
            </linearGradient>
            <linearGradient
              id="missionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#8B5FBF", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FFC94B", stopOpacity: 0.35 }}
              />
            </linearGradient>
            <linearGradient
              id="valueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#A5C85A", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0.35 }}
              />
            </linearGradient>
            <radialGradient id="glowVision" cx="50%" cy="50%">
              <stop
                offset="0%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0 }}
              />
            </radialGradient>
            <radialGradient id="glowMission" cx="50%" cy="50%">
              <stop
                offset="0%"
                style={{ stopColor: "#8B5FBF", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8B5FBF", stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>

          {/* Floating Eye icons (Vision theme) */}
          {[...Array(4)].map((_, i) => {
            const x = 200 + i * 280;
            const y = 150 + (i % 2) * 250;
            const dur = 8 + i;
            return (
              <g key={`eye-${i}`} opacity="0.35">
                {/* Eye outline */}
                <ellipse
                  cx={x}
                  cy={y}
                  rx="35"
                  ry="22"
                  fill="none"
                  stroke="#2CA4A4"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-20; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </ellipse>
                {/* Pupil */}
                <circle cx={x} cy={y} r="8" fill="#2CA4A4">
                  <animate
                    attributeName="r"
                    values="8;10;8"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-20; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Target icons (Mission theme) */}
          {[...Array(5)].map((_, i) => {
            const x = 150 + i * 240;
            const y = 550 + (i % 2) * 150;
            const dur = 7 + i * 0.5;
            return (
              <g key={`target-${i}`} opacity="0.4">
                <circle
                  cx={x}
                  cy={y}
                  r="30"
                  fill="none"
                  stroke="#8B5FBF"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="r"
                    values="30;35;30"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill="none"
                  stroke="#8B5FBF"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="r"
                    values="20;23;20"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={x} cy={y} r="10" fill="#8B5FBF">
                  <animate
                    attributeName="r"
                    values="10;12;10"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.8;0.5"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,15; 0,0`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Lightbulb icons (Innovation theme) */}
          {[...Array(6)].map((_, i) => {
            const x = (i * 210 + 120) % 1080;
            const y = (i * 140 + 200) % 650;
            const dur = 6 + i;
            return (
              <g key={`bulb-${i}`} opacity="0.35">
                {/* Bulb */}
                <ellipse
                  cx={x}
                  cy={y}
                  rx="18"
                  ry="22"
                  fill="url(#missionGradient)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </ellipse>
                {/* Base */}
                <rect
                  x={x - 10}
                  y={y + 18}
                  width="20"
                  height="10"
                  rx="2"
                  fill="#FFC94B"
                  opacity="0.6"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                {/* Glow lines */}
                <line
                  x1={x - 25}
                  y1={y - 10}
                  x2={x - 35}
                  y2={y - 15}
                  stroke="#FFC94B"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1={x + 25}
                  y1={y - 10}
                  x2={x + 35}
                  y2={y - 15}
                  stroke="#FFC94B"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1={x}
                  y1={y - 30}
                  x2={x}
                  y2={y - 40}
                  stroke="#FFC94B"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            );
          })}

          {/* Award stars (Excellence theme) */}
          {[...Array(12)].map((_, i) => {
            const x = (i * 150 + 80) % 1120;
            const y = (i * 95 + 120) % 680;
            const size = 10 + (i % 3) * 5;
            const dur = 5 + (i % 4);
            return (
              <g key={`award-star-${i}`} opacity="0.45">
                <polygon
                  points={`${x},${y - size} ${x + size * 0.3},${
                    y - size * 0.3
                  } ${x + size},${y} ${x + size * 0.3},${y + size * 0.3} ${x},${
                    y + size
                  } ${x - size * 0.3},${y + size * 0.3} ${x - size},${y} ${
                    x - size * 0.3
                  },${y - size * 0.3}`}
                  fill="#FFC94B"
                  stroke="#FFC94B"
                  strokeWidth="1"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y}`}
                    to={`360 ${x} ${y}`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </polygon>
              </g>
            );
          })}

          {/* Connected hearts (Value-driven theme) */}
          {[...Array(4)].map((_, i) => {
            const x = 250 + i * 270;
            const y = 350;
            const dur = 7 + i;
            return (
              <g key={`heart-${i}`} opacity="0.4">
                <path
                  d={`M ${x} ${y + 12} C ${x} ${y} ${x - 12} ${y - 12} ${
                    x - 12
                  } ${y - 12} C ${x - 12} ${y - 18} ${x - 5} ${y - 24} ${x} ${
                    y - 18
                  } C ${x + 5} ${y - 24} ${x + 12} ${y - 18} ${x + 12} ${
                    y - 12
                  } C ${x + 12} ${y - 12} ${x} ${y} ${x} ${y + 12} Z`}
                  fill="#EC4899"
                  stroke="#EC4899"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.2;1"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </path>
              </g>
            );
          })}

          {/* Flowing path lines (Journey/Mission) */}
          <path
            d="M 100,400 Q 300,350 500,400 T 900,400 T 1100,400"
            stroke="#2CA4A4"
            strokeWidth="3"
            fill="none"
            opacity="0.35"
            strokeDasharray="12,8"
          >
            <animate
              attributeName="d"
              values="M 100,400 Q 300,350 500,400 T 900,400 T 1100,400; M 100,400 Q 300,450 500,400 T 900,400 T 1100,400; M 100,400 Q 300,350 500,400 T 900,400 T 1100,400"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Glowing orbs for ambiance */}
          <circle cx="200" cy="180" r="120" fill="url(#glowVision)">
            <animate
              attributeName="r"
              values="120;150;120"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1000" cy="620" r="110" fill="url(#glowMission)">
            <animate
              attributeName="r"
              values="110;140;110"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="600" cy="400" r="100" fill="#A5C85A" opacity="0.15">
            <animate
              attributeName="r"
              values="100;130;100"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Sparkle crosses */}
          {[...Array(20)].map((_, i) => {
            const cx = (i * 85 + 60) % 1140;
            const cy = (i * 67 + 90) % 710;
            const dur = 3 + (i % 4) * 0.5;
            return (
              <g key={`sparkle-${i}`} opacity="0.5">
                <circle cx={cx} cy={cy} r="2.5" fill="#5EC1E8">
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="2.5;5;2.5"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <line
                  x1={cx}
                  y1={cy - 8}
                  x2={cx}
                  y2={cy + 8}
                  stroke="#5EC1E8"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1={cx - 8}
                  y1={cy}
                  x2={cx + 8}
                  y2={cy}
                  stroke="#5EC1E8"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            );
          })}

          {/* Rising arrows (Growth/Progress) */}
          {[...Array(5)].map((_, i) => {
            const x = 200 + i * 200;
            const dur = 8 + i;
            return (
              <g key={`arrow-${i}`} opacity="0.4">
                <path
                  d={`M${x},700 L${x},600 M${x - 10},615 L${x},600 L${
                    x + 10
                  },615`}
                  stroke="#A5C85A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-650; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}

          {/* Circular dots pattern */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const cx = 600 + Math.cos(angle) * 250;
            const cy = 400 + Math.sin(angle) * 250;
            return (
              <circle
                key={`dot-${i}`}
                cx={cx}
                cy={cy}
                r="4"
                fill="#8B5FBF"
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  values="4;7;4"
                  dur="6s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.7;0.3"
                  dur="6s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            About Us
          </h1>
          <p className="text-lg text-[#2F3E3E]/70 max-w-2xl mx-auto">
            Empowering the next generation with wisdom, values, and financial
            literacy
          </p>
        </div>

        {/* Vision and Mission Cards - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInLeft overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2CA4A4]/5 to-[#5EC1E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-[#2CA4A4]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#5EC1E8]/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Icon Section */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2CA4A4] to-[#5EC1E8] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFC94B] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#A5C85A] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4 text-center group-hover:text-[#2CA4A4] transition-colors duration-300">
                Our Vision
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] mx-auto mb-6 rounded-full"></div>

              {/* Content */}
              <p className="text-[#2F3E3E]/80 text-center leading-relaxed">
                Every child lives the{" "}
                <span className="font-semibold text-[#2CA4A4]">
                  Finwit lifestyle
                </span>{" "}
                of smart decisions from childhood to adulthood.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInRight overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5FBF]/5 to-[#FFC94B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-[#8B5FBF]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#FFC94B]/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Icon Section */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B5FBF] to-[#FFC94B] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#2CA4A4] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#5EC1E8] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4 text-center group-hover:text-[#8B5FBF] transition-colors duration-300">
                Our Mission
              </h3>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#FFC94B] mx-auto mb-6 rounded-full"></div>

              {/* Content */}
              <p className="text-[#2F3E3E]/80 text-center leading-relaxed">
                Raise a generation of{" "}
                <span className="font-semibold text-[#8B5FBF]">
                  wise, value-driven, creative
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#8B5FBF]">
                  financially-savvy
                </span>{" "}
                children through holistic, modular learning.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#8B5FBF] to-[#FFC94B] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>
        </div>

        {/* Illustration Section - Full width below cards on mobile, side by side on desktop */}
        <div
          className="mt-12 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative bg-gradient-to-br from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Illustration */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/20">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Lightbulb className="w-20 h-20 mx-auto mb-4 text-[#2CA4A4]" />
                      <p className="text-sm font-medium">
                        Vision & Mission Illustration
                      </p>
                    </div>
                  </div>

                  {/* Floating animated elements */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-[#2CA4A4] rounded-full animate-bounce"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#FFC94B] rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#5EC1E8] rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Key Values */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-[#2F3E3E] mb-6">
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Heart,
                      label: "Value-Driven",
                      color: "from-[#2CA4A4] to-[#5EC1E8]",
                    },
                    {
                      icon: Award,
                      label: "Excellence",
                      color: "from-[#8B5FBF] to-[#FFC94B]",
                    },
                    {
                      icon: Lightbulb,
                      label: "Innovation",
                      color: "from-[#FFC94B] to-[#A5C85A]",
                    },
                    {
                      icon: Users,
                      label: "Community",
                      color: "from-[#A5C85A] to-[#2CA4A4]",
                    },
                  ].map((value, index) => (
                    <div
                      key={value.label}
                      className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-[#2F3E3E]">
                        {value.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 2: Our Philosophy
const OurPhilosophy: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated SVG Background - Philosophy Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="philoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#A5C85A", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#8B5FBF", stopOpacity: 0.35 }} />
            </linearGradient>
            <linearGradient id="philoGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#FFC94B", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#2CA4A4", stopOpacity: 0.35 }} />
            </linearGradient>
            <radialGradient id="glowPhilo" cx="50%" cy="50%">
              <stop offset="0%" style={{ stopColor: "#A5C85A", stopOpacity: 0.25 }} />
              <stop offset="100%" style={{ stopColor: "#A5C85A", stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="glowWisdom" cx="50%" cy="50%">
              <stop offset="0%" style={{ stopColor: "#8B5FBF", stopOpacity: 0.25 }} />
              <stop offset="100%" style={{ stopColor: "#8B5FBF", stopOpacity: 0 }} />
            </radialGradient>
          </defs>

          {/* Brain/thinking icons (Critical Thinking) */}
          {[...Array(5)].map((_, i) => {
            const x = 180 + i * 240;
            const y = 200 + (i % 2) * 250;
            const dur = 7 + i * 0.5;
            return (
              <g key={`brain-${i}`} opacity="0.4">
                {/* Brain outline */}
                <ellipse cx={x} cy={y} rx="30" ry="35" fill="none" stroke="#8B5FBF" strokeWidth="2.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </ellipse>
                {/* Brain segments */}
                <path
                  d={`M${x - 15},${y - 10} Q${x},${y - 5} ${x + 15},${y - 10}`}
                  stroke="#8B5FBF"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </path>
                <path
                  d={`M${x - 15},${y + 10} Q${x},${y + 5} ${x + 15},${y + 10}`}
                  stroke="#8B5FBF"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </path>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,-15; 0,0`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Palette/creativity icons (Creativity) */}
          {[...Array(6)].map((_, i) => {
            const x = (i * 200 + 140) % 1060;
            const y = (i * 130 + 180) % 640;
            const dur = 8 + i;
            return (
              <g key={`palette-${i}`} opacity="0.35">
                {/* Palette shape */}
                <ellipse cx={x} cy={y} rx="28" ry="20" fill="url(#philoGradient1)" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </ellipse>
                {/* Paint dots */}
                <circle cx={x - 12} cy={y - 6} r="4" fill="#FFC94B">
                  <animate attributeName="r" values="4;6;4" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={x + 8} cy={y - 4} r="4" fill="#2CA4A4">
                  <animate attributeName="r" values="4;6;4" dur={`${dur}s`} begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx={x - 6} cy={y + 8} r="4" fill="#EC4899">
                  <animate attributeName="r" values="4;6;4" dur={`${dur}s`} begin="0.6s" repeatCount="indefinite" />
                </circle>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${x} ${y}`}
                  to={`360 ${x} ${y}`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Hearts with pulse (Emotional Intelligence) */}
          {[...Array(8)].map((_, i) => {
            const x = (i * 180 + 120) % 1080;
            const y = (i * 110 + 150) % 650;
            const dur = 6 + i * 0.5;
            return (
              <g key={`emotion-heart-${i}`} opacity="0.4">
                <path
                  d={`M ${x} ${y + 10} C ${x} ${y} ${x - 10} ${y - 10} ${x - 10} ${y - 10} C ${x - 10} ${y - 15} ${x - 4} ${y - 20} ${x} ${y - 15} C ${x + 4} ${y - 20} ${x + 10} ${y - 15} ${x + 10} ${y - 10} C ${x + 10} ${y - 10} ${x} ${y} ${x} ${y + 10} Z`}
                  fill="#EC4899"
                  stroke="#EC4899"
                  strokeWidth="1.5"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.3;1"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </path>
                {/* Pulse rings */}
                <circle cx={x} cy={y} r="15" fill="none" stroke="#EC4899" strokeWidth="2" opacity="0.3">
                  <animate attributeName="r" values="15;25;15" dur={`${dur}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Crosses (Christian Values) */}
          {[...Array(10)].map((_, i) => {
            const x = (i * 140 + 100) % 1100;
            const y = (i * 90 + 130) % 670;
            const dur = 5 + i * 0.5;
            return (
              <g key={`cross-${i}`} opacity="0.4">
                <line x1={x} y1={y - 18} x2={x} y2={y + 18} stroke="#2CA4A4" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                <line x1={x - 12} y1={y - 6} x2={x + 12} y2={y - 6} stroke="#2CA4A4" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                <circle cx={x} cy={y} r="20" fill="none" stroke="#2CA4A4" strokeWidth="1.5" opacity="0.2">
                  <animate attributeName="r" values="20;25;20" dur={`${dur}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Shield icons (Integrity) */}
          {[...Array(5)].map((_, i) => {
            const x = 220 + i * 220;
            const y = 450 + (i % 2) * 180;
            const dur = 7 + i;
            return (
              <g key={`shield-${i}`} opacity="0.35">
                <path
                  d={`M${x},${y - 25} L${x + 18},${y - 18} L${x + 18},${y + 8} Q${x + 18},${y + 20} ${x},${y + 30} Q${x - 18},${y + 20} ${x - 18},${y + 8} L${x - 18},${y - 18} Z`}
                  fill="url(#philoGradient2)"
                  stroke="#FFC94B"
                  strokeWidth="2"
                >
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-10; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
                {/* Check mark inside shield */}
                <path
                  d={`M${x - 8},${y} L${x - 2},${y + 8} L${x + 10},${y - 8}`}
                  stroke="#FFC94B"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${dur}s`} repeatCount="indefinite" />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-10; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}

          {/* Connected people icons (Community) */}
          {[...Array(4)].map((_, i) => {
            const x = 280 + i * 260;
            const y = 330;
            const dur = 8 + i;
            return (
              <g key={`community-${i}`} opacity="0.35">
                {/* Person 1 */}
                <circle cx={x - 15} cy={y} r="8" fill="#5EC1E8">
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
                <path
                  d={`M${x - 15},${y + 8} L${x - 15},${y + 20} M${x - 22},${y + 15} L${x - 8},${y + 15}`}
                  stroke="#5EC1E8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur={`${dur}s`} repeatCount="indefinite" />
                </path>
                {/* Person 2 */}
                <circle cx={x + 15} cy={y} r="8" fill="#5EC1E8">
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur={`${dur}s`} begin="0.3s" repeatCount="indefinite" />
                </circle>
                <path
                  d={`M${x + 15},${y + 8} L${x + 15},${y + 20} M${x + 8},${y + 15} L${x + 22},${y + 15}`}
                  stroke="#5EC1E8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur={`${dur}s`} begin="0.3s" repeatCount="indefinite" />
                </path>
                {/* Connection line */}
                <line x1={x - 15} y1={y + 15} x2={x + 15} y2={y + 15} stroke="#5EC1E8" strokeWidth="2" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                </line>
              </g>
            );
          })}

          {/* Book icons (Learning/Education) */}
          {[...Array(7)].map((_, i) => {
            const x = (i * 190 + 160) % 1040;
            const y = (i * 120 + 190) % 610;
            const dur = 6 + i * 0.5;
            return (
              <g key={`book-${i}`} opacity="0.35">
                <rect x={x - 16} y={y - 12} width="32" height="24" rx="2" fill="url(#philoGradient1)" stroke="#A5C85A" strokeWidth="2">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </rect>
                <line x1={x - 10} y1={y - 6} x2={x + 10} y2={y - 6} stroke="#A5C85A" strokeWidth="1.5" />
                <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke="#A5C85A" strokeWidth="1.5" />
                <line x1={x - 10} y1={y + 6} x2={x + 10} y2={y + 6} stroke="#A5C85A" strokeWidth="1.5" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,20; 0,0`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Wavy thought lines */}
          <path
            d="M 50,300 Q 250,250 450,300 T 850,300 T 1150,300"
            stroke="#8B5FBF"
            strokeWidth="2.5"
            fill="none"
            opacity="0.3"
            strokeDasharray="10,10"
          >
            <animate
              attributeName="d"
              values="M 50,300 Q 250,250 450,300 T 850,300 T 1150,300; M 50,300 Q 250,350 450,300 T 850,300 T 1150,300; M 50,300 Q 250,250 450,300 T 850,300 T 1150,300"
              dur="9s"
              repeatCount="indefinite"
            />
            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
          </path>
          <path
            d="M 100,550 Q 300,500 500,550 T 900,550 T 1100,550"
            stroke="#A5C85A"
            strokeWidth="2.5"
            fill="none"
            opacity="0.3"
            strokeDasharray="10,10"
          >
            <animate
              attributeName="d"
              values="M 100,550 Q 300,500 500,550 T 900,550 T 1100,550; M 100,550 Q 300,600 500,550 T 900,550 T 1100,550; M 100,550 Q 300,500 500,550 T 900,550 T 1100,550"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Glowing orbs */}
          <circle cx="250" cy="200" r="110" fill="url(#glowPhilo)">
            <animate attributeName="r" values="110;140;110" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="950" cy="600" r="100" fill="url(#glowWisdom)">
            <animate attributeName="r" values="100;130;100" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="400" r="95" fill="#FFC94B" opacity="0.12">
            <animate attributeName="r" values="95;125;95" dur="9s" repeatCount="indefinite" />
          </circle>

          {/* Sparkles */}
          {[...Array(18)].map((_, i) => {
            const cx = (i * 95 + 70) % 1130;
            const cy = (i * 73 + 100) % 700;
            const dur = 3 + (i % 4) * 0.5;
            return (
              <g key={`sparkle-philo-${i}`} opacity="0.5">
                <circle cx={cx} cy={cy} r="2.5" fill="#FFC94B">
                  <animate attributeName="opacity" values="0;1;0" dur={`${dur}s`} repeatCount="indefinite" />
                  <animate attributeName="r" values="2.5;5;2.5" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
                <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke="#FFC94B" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0;1;0" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke="#FFC94B" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0;1;0" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
              </g>
            );
          })}

          {/* Circular dots */}
          {[...Array(14)].map((_, i) => {
            const angle = (i * 25.7 * Math.PI) / 180;
            const cx = 600 + Math.cos(angle) * 270;
            const cy = 400 + Math.sin(angle) * 270;
            return (
              <circle key={`dot-philo-${i}`} cx={cx} cy={cy} r="4" fill="#2CA4A4" opacity="0.35">
                <animate attributeName="r" values="4;7;4" dur="7s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="7s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image Placeholder */}
          <div className="relative animate-fadeInLeft order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-[#A5C85A]/10 to-[#8B5FBF]/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative h-64 bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#A5C85A]/10">
                  <div className="text-center text-[#2F3E3E]/50">
                    <Lightbulb className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Philosophy & Values</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 left-6 w-6 h-6 bg-[#A5C85A] rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-8 right-8 w-8 h-8 bg-[#8B5FBF] rotate-45 animate-spin"
                  style={{ animationDuration: "4s" }}
                ></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFC94B] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#2CA4A4] rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2F3E3E] flex items-center space-x-3">
                <Heart className="w-6 h-6 text-[#2CA4A4]" />
                <span>Our Philosophy</span>
              </h2>

              <div className="space-y-4 text-[#2F3E3E]/80 leading-relaxed">
                <p>
                  We believe in a holistic approach to child development,
                  recognizing that true success encompasses more than just
                  academic achievement. Our programs are designed to foster
                  critical thinking, creativity, emotional intelligence, and a
                  strong moral foundation rooted in Christian values. We aim to
                  equip children with the tools to make informed decisions, lead
                  with integrity, and contribute meaningfully to their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 3: What Makes Us Unique
const WhatMakesUsUnique: React.FC = () => {
  const uniqueFeatures = [
    {
      icon: Layers,
      title: "11 Learning Domains",
      description:
        "Comprehensive development including Financial Wellness, Emotional Intelligence, and Technology",
      color: "from-[#2CA4A4] to-[#5EC1E8]",
      bgColor: "bg-[#2CA4A4]/10",
      iconBg: "bg-[#2CA4A4]/20",
      delay: "0s",
    },
    {
      icon: TrendingUp,
      title: "Three Growth Tiers",
      description:
        "Finwit Kids (4–12), Finwit Teens (13–18), and Finwit Adults (18+)",
      color: "from-[#FFC94B] to-[#A5C85A]",
      bgColor: "bg-[#FFC94B]/10",
      iconBg: "bg-[#FFC94B]/20",
      delay: "0.1s",
    },
    {
      icon: Fish,
      title: "Dolphin Mascot",
      description:
        "A friendly companion that grows with the learner through each stage",
      color: "from-[#5EC1E8] to-[#8B5FBF]",
      bgColor: "bg-[#5EC1E8]/10",
      iconBg: "bg-[#5EC1E8]/20",
      delay: "0.2s",
    },
    {
      icon: Cross,
      title: "Christian-Based Values",
      description:
        "Spiritual development rooted in Christian principles and teachings",
      color: "from-[#8B5FBF] to-[#A5C85A]",
      bgColor: "bg-[#8B5FBF]/10",
      iconBg: "bg-[#8B5FBF]/20",
      delay: "0.3s",
    },
    {
      icon: PartyPopper,
      title: "Transition Celebrations",
      description:
        "Special milestone ceremonies honoring growth and achievement at each age tier",
      color: "from-[#A5C85A] to-[#FFC94B]",
      bgColor: "bg-[#A5C85A]/10",
      iconBg: "bg-[#A5C85A]/20",
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAF7F2] relative overflow-hidden">
      {/* Animated SVG Background - Unique Features Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="uniqueGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2CA4A4", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#5EC1E8", stopOpacity: 0.35 }} />
            </linearGradient>
            <linearGradient id="uniqueGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FFC94B", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#A5C85A", stopOpacity: 0.35 }} />
            </linearGradient>
            <linearGradient id="uniqueGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8B5FBF", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#5EC1E8", stopOpacity: 0.35 }} />
            </linearGradient>
            <radialGradient id="glowUnique" cx="50%" cy="50%">
              <stop offset="0%" style={{ stopColor: "#2CA4A4", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#2CA4A4", stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="glowCelebrate" cx="50%" cy="50%">
              <stop offset="0%" style={{ stopColor: "#FFC94B", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#FFC94B", stopOpacity: 0 }} />
            </radialGradient>
          </defs>

          {/* Layered domain icons (11 Learning Domains) */}
          {[...Array(11)].map((_, i) => {
            const x = (i * 130 + 120) % 1080;
            const y = 180 + Math.floor(i / 6) * 200 + (i % 2) * 100;
            const dur = 6 + i * 0.5;
            return (
              <g key={`layer-${i}`} opacity="0.4">
                <rect
                  x={x - 20}
                  y={y - 15}
                  width="40"
                  height="30"
                  rx="4"
                  fill="url(#uniqueGradient1)"
                  stroke="#2CA4A4"
                  strokeWidth="2"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-10; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={x - 16}
                  y={y - 10}
                  width="32"
                  height="20"
                  rx="3"
                  fill="none"
                  stroke="#2CA4A4"
                  strokeWidth="1.5"
                  opacity="0.5"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-10; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            );
          })}

          {/* Growth arrows with tiers (Three Growth Tiers) */}
          {[...Array(6)].map((_, i) => {
            const x = 200 + i * 180;
            const y = 650;
            const heights = [80, 120, 160]; // Three tiers
            const height = heights[i % 3];
            const dur = 7 + i;
            return (
              <g key={`tier-${i}`} opacity="0.4">
                {/* Arrow shaft */}
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y - height}
                  stroke="#FFC94B"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                {/* Arrow head */}
                <path
                  d={`M${x - 12},${y - height + 15} L${x},${y - height} L${x + 12},${y - height + 15}`}
                  stroke="#FFC94B"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </path>
                {/* Tier label circles */}
                <circle cx={x} cy={y - height / 2} r="6" fill="#A5C85A">
                  <animate attributeName="r" values="6;9;6" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Dolphin shapes (Dolphin Mascot) */}
          {[...Array(5)].map((_, i) => {
            const x = 180 + i * 250;
            const y = 420 + (i % 2) * 180;
            const dur = 8 + i;
            return (
              <g key={`dolphin-${i}`} opacity="0.35">
                {/* Dolphin body */}
                <ellipse
                  cx={x}
                  cy={y}
                  rx="35"
                  ry="18"
                  fill="url(#uniqueGradient3)"
                  stroke="#5EC1E8"
                  strokeWidth="2"
                >
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 30,0; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </ellipse>
                {/* Dolphin fin */}
                <path
                  d={`M${x + 10},${y - 10} L${x + 15},${y - 20} L${x + 20},${y - 8}`}
                  stroke="#5EC1E8"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 30,0; 0,0`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
                {/* Bubbles */}
                <circle cx={x - 40} cy={y - 10} r="4" fill="#5EC1E8" opacity="0.5">
                  <animate attributeName="cy" values={`${y - 10};${y - 40};${y - 10}`} dur={`${dur}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Crosses with halos (Christian Values) */}
          {[...Array(8)].map((_, i) => {
            const x = (i * 160 + 140) % 1060;
            const y = (i * 115 + 200) % 700;
            const dur = 6 + i * 0.5;
            return (
              <g key={`cross-unique-${i}`} opacity="0.4">
                <line x1={x} y1={y - 16} x2={x} y2={y + 16} stroke="#8B5FBF" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                <line x1={x - 11} y1={y - 5} x2={x + 11} y2={y - 5} stroke="#8B5FBF" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                {/* Glow circle */}
                <circle cx={x} cy={y} r="22" fill="none" stroke="#8B5FBF" strokeWidth="2" opacity="0.3">
                  <animate attributeName="r" values="22;28;22" dur={`${dur}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Party confetti (Transition Celebrations) */}
          {[...Array(20)].map((_, i) => {
            const x = (i * 85 + 80) % 1120;
            const y = 150 + (i * 60) % 600;
            const dur = 3 + (i % 5) * 0.5;
            const shapes = ['rect', 'circle', 'triangle'];
            const shape = shapes[i % 3];
            return (
              <g key={`confetti-${i}`} opacity="0.5">
                {shape === 'circle' && (
                  <circle cx={x} cy={y} r="5" fill="#FFC94B">
                    <animate attributeName="cy" values={`${y};${y + 200};${y}`} dur={`${dur}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${dur}s`} repeatCount="indefinite" />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${x} ${y}`}
                      to={`360 ${x} ${y}`}
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                {shape === 'rect' && (
                  <rect x={x - 4} y={y - 4} width="8" height="8" fill="#EC4899" rx="1">
                    <animate attributeName="y" values={`${y - 4};${y + 196};${y - 4}`} dur={`${dur}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${dur}s`} repeatCount="indefinite" />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${x} ${y}`}
                      to={`360 ${x} ${y}`}
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                )}
                {shape === 'triangle' && (
                  <polygon points={`${x},${y - 5} ${x + 5},${y + 5} ${x - 5},${y + 5}`} fill="#A5C85A">
                    <animate attributeName="points" values={`${x},${y - 5} ${x + 5},${y + 5} ${x - 5},${y + 5};${x},${y + 195} ${x + 5},${y + 205} ${x - 5},${y + 205};${x},${y - 5} ${x + 5},${y + 5} ${x - 5},${y + 5}`} dur={`${dur}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${dur}s`} repeatCount="indefinite" />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${x} ${y}`}
                      to={`360 ${x} ${y}`}
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                    />
                  </polygon>
                )}
              </g>
            );
          })}

          {/* Award stars (Excellence/Unique) */}
          {[...Array(15)].map((_, i) => {
            const x = (i * 110 + 90) % 1110;
            const y = (i * 87 + 160) % 740;
            const size = 8 + (i % 3) * 4;
            const dur = 5 + (i % 4);
            return (
              <g key={`star-unique-${i}`} opacity="0.4">
                <polygon
                  points={`${x},${y - size} ${x + size * 0.3},${y - size * 0.3} ${x + size},${y} ${x + size * 0.3},${y + size * 0.3} ${x},${y + size} ${x - size * 0.3},${y + size * 0.3} ${x - size},${y} ${x - size * 0.3},${y - size * 0.3}`}
                  fill="#FFC94B"
                  stroke="#FFC94B"
                  strokeWidth="1"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y}`}
                    to={`360 ${x} ${y}`}
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${dur}s`} repeatCount="indefinite" />
                </polygon>
              </g>
            );
          })}

          {/* Flowing wave lines */}
          <path
            d="M 0,300 Q 200,250 400,300 T 800,300 T 1200,300"
            stroke="#2CA4A4"
            strokeWidth="3"
            fill="none"
            opacity="0.35"
            strokeDasharray="15,10"
          >
            <animate
              attributeName="d"
              values="M 0,300 Q 200,250 400,300 T 800,300 T 1200,300; M 0,300 Q 200,350 400,300 T 800,300 T 1200,300; M 0,300 Q 200,250 400,300 T 800,300 T 1200,300"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate attributeName="stroke-dashoffset" from="0" to="25" dur="2s" repeatCount="indefinite" />
          </path>
          <path
            d="M 0,600 Q 250,550 500,600 T 1000,600 T 1200,600"
            stroke="#5EC1E8"
            strokeWidth="3"
            fill="none"
            opacity="0.35"
            strokeDasharray="15,10"
          >
            <animate
              attributeName="d"
              values="M 0,600 Q 250,550 500,600 T 1000,600 T 1200,600; M 0,600 Q 250,650 500,600 T 1000,600 T 1200,600; M 0,600 Q 250,550 500,600 T 1000,600 T 1200,600"
              dur="11s"
              repeatCount="indefinite"
            />
            <animate attributeName="stroke-dashoffset" from="0" to="25" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Glowing orbs */}
          <circle cx="250" cy="250" r="130" fill="url(#glowUnique)">
            <animate attributeName="r" values="130;160;130" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="950" cy="700" r="120" fill="url(#glowCelebrate)">
            <animate attributeName="r" values="120;150;120" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="450" r="110" fill="#8B5FBF" opacity="0.12">
            <animate attributeName="r" values="110;140;110" dur="9s" repeatCount="indefinite" />
          </circle>

          {/* Sparkles */}
          {[...Array(25)].map((_, i) => {
            const cx = (i * 78 + 65) % 1135;
            const cy = (i * 61 + 95) % 805;
            const dur = 3 + (i % 5) * 0.5;
            return (
              <g key={`sparkle-unique-${i}`} opacity="0.5">
                <circle cx={cx} cy={cy} r="3" fill="#5EC1E8">
                  <animate attributeName="opacity" values="0;1;0" dur={`${dur}s`} repeatCount="indefinite" />
                  <animate attributeName="r" values="3;6;3" dur={`${dur}s`} repeatCount="indefinite" />
                </circle>
                <line x1={cx} y1={cy - 9} x2={cx} y2={cy + 9} stroke="#5EC1E8" strokeWidth="2">
                  <animate attributeName="opacity" values="0;1;0" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
                <line x1={cx - 9} y1={cy} x2={cx + 9} y2={cy} stroke="#5EC1E8" strokeWidth="2">
                  <animate attributeName="opacity" values="0;1;0" dur={`${dur}s`} repeatCount="indefinite" />
                </line>
              </g>
            );
          })}

          {/* Circular dots pattern */}
          {[...Array(18)].map((_, i) => {
            const angle = (i * 20 * Math.PI) / 180;
            const cx = 600 + Math.cos(angle) * 300;
            const cy = 450 + Math.sin(angle) * 300;
            return (
              <circle key={`dot-unique-${i}`} cx={cx} cy={cy} r="5" fill="#A5C85A" opacity="0.4">
                <animate attributeName="r" values="5;8;5" dur="7s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="7s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2CA4A4]/10 to-[#5EC1E8]/10 rounded-full border border-[#2CA4A4]/20">
              <Award className="w-5 h-5 text-[#2CA4A4]" />
              <span className="text-sm font-semibold text-[#2CA4A4]">
                Our Differentiators
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] bg-clip-text text-transparent">
              Unique
            </span>
          </h2>
          <p className="text-lg text-[#2F3E3E]/70 max-w-3xl mx-auto">
            Discover the distinctive features that set Finwit Kids apart in
            holistic child development
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FFC94B] via-[#A5C85A] to-[#2CA4A4] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Features Grid - Responsive: Vertical on mobile, Horizontal grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {uniqueFeatures.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#2CA4A4]/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                {/* Background gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Floating background decoration */}
                <div
                  className={`absolute -top-2 -right-2 w-16 h-16 ${feature.bgColor} rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 opacity-50`}
                ></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-5">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}
                    >
                      <IconComponent className="w-8 h-8 text-[#2F3E3E] group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Floating accent dot */}
                    <div className="absolute top-0 left-12 w-3 h-3 bg-[#FFC94B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#A5C85A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Card number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#2CA4A4] to-[#5EC1E8] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-16 text-center animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-gradient-to-r from-[#2CA4A4]/5 via-[#5EC1E8]/5 to-[#FFC94B]/5 rounded-3xl p-8 border border-[#2CA4A4]/10 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Experience the Finwit Difference?
            </h3>
            <p className="text-[#2F3E3E]/70 mb-6 max-w-2xl mx-auto">
              Join thousands of families who trust Finwit Kids for
              comprehensive, faith-based child development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#2CA4A4] to-[#5EC1E8] hover:from-[#5EC1E8] hover:to-[#2CA4A4] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-white hover:bg-[#FAF7F2] text-[#2CA4A4] hover:text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl border border-[#2CA4A4]/20">
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Child Component 4: Meet the Founder
const MeetTheFounder: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#5EC1E8]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#2CA4A4]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC94B] rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6 flex items-center justify-center space-x-3">
            <Users className="w-8 h-8 text-[#2CA4A4]" />
            <span>Meet the Founder</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Founder Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  {/* Image placeholder */}
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#2CA4A4]/20 to-[#5EC1E8]/20 rounded-2xl overflow-hidden shadow-lg">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10">
                      <div className="text-center text-[#2F3E3E]/50">
                        <Users className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">Sarah Johnson</p>
                      </div>
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-2xl border-4 border-[#2CA4A4]/20"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFC94B] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#A5C85A] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-[#2F3E3E] mb-2">
                    Sarah Johnson
                  </h3>
                  <p className="text-[#2CA4A4] font-medium">Founder & CEO</p>
                </div>

                <div className="space-y-4 text-[#2F3E3E]/80 leading-relaxed">
                  <p>
                    Sarah Johnson is a passionate educator and entrepreneur with
                    a deep commitment to children's holistic development. With
                    over 15 years in education and business development, Sarah
                    founded Finwit Kids to provide a platform that integrates
                    faith-based principles with practical life skills.
                  </p>

                  <p>
                    Sarah's vision is to create a generation of confident,
                    compassionate, and capable young leaders who can navigate
                    the complexities of the modern world while staying rooted in
                    strong values and contributing positively to society around
                    the world.
                  </p>
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-[#2CA4A4]/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-[#2CA4A4]" />
                    <span className="text-sm font-medium text-[#2F3E3E]">
                      15+ Years Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#A5C85A]/10 px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4 text-[#A5C85A]" />
                    <span className="text-sm font-medium text-[#2F3E3E]">
                      Child Development Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Join Our Mission?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Discover how Finwit Kids can empower your child's journey toward
              becoming a confident, capable, and compassionate leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  navigate("/programs");
                }}
                className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <VisionAndMission />
      <OurPhilosophy />
      <WhatMakesUsUnique />
      <MeetTheFounder />

      <style>{`
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

export default AboutUs;
