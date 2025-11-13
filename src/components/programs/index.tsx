import React, { useState } from "react";
import {
  ArrowRight,
  Calculator,
  Code,
  MessageCircle,
  Palette,
  BookOpen,
  Users,
} from "lucide-react";
import { DomainsGrid } from "../Landing/Domains";

// Child Component 1: Age Selector and Single Domains
const AgeSelectorAndSingleDomains: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState("6-7 years");

  const ageGroups = ["4-6 years", "7-10 years", "11-14 years", "14-18 years"];

  const singleDomains = [
    {
      title: "Math",
      description: "Develop strong mathematical skills",
      icon: Calculator,
      color: "from-[#FFC94B] to-[#A5C85A]",
    },
    {
      title: "Coding",
      description: "Learn to code and create",
      icon: Code,
      color: "from-[#2CA4A4] to-[#5EC1E8]",
    },
    {
      title: "Communication",
      description: "Improve communication and presentation skills",
      icon: MessageCircle,
      color: "from-[#5EC1E8] to-[#8B5FBF]",
    },
    {
      title: "Design",
      description: "Explore design thinking and creativity",
      icon: Palette,
      color: "from-[#8B5FBF] to-[#FFC94B]",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Animated SVG Background - Programs Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="progGradient1"
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
                style={{ stopColor: "#5EC1E8", stopOpacity: 0.35 }}
              />
            </linearGradient>
            <linearGradient
              id="progGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FFC94B", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#A5C85A", stopOpacity: 0.35 }}
              />
            </linearGradient>
            <radialGradient id="glowProg" cx="50%" cy="50%">
              <stop
                offset="0%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0.25 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>

          {/* Age milestone markers */}
          {[4, 7, 11, 14, 18].map((age, i) => {
            const x = 150 + i * 220;
            const y = 350;
            const dur = 6 + i * 0.5;
            return (
              <g key={`age-${age}`} opacity="0.4">
                <circle
                  cx={x}
                  cy={y}
                  r="25"
                  fill="url(#progGradient1)"
                  stroke="#2CA4A4"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="r"
                    values="25;30;25"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.7;0.4"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fontSize="14"
                  fill="#2CA4A4"
                  fontWeight="bold"
                >
                  {age}
                </text>
                {/* Connection line to next */}
                {i < 4 && (
                  <line
                    x1={x + 25}
                    y1={y}
                    x2={x + 195}
                    y2={y}
                    stroke="#2CA4A4"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="10"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </line>
                )}
              </g>
            );
          })}

          {/* Calculator icons (Math) */}
          {[...Array(5)].map((_, i) => {
            const x = (i * 210 + 180) % 1040;
            const y = (i * 140 + 150) % 650;
            const dur = 7 + i;
            return (
              <g key={`calc-${i}`} opacity="0.35">
                <rect
                  x={x - 18}
                  y={y - 24}
                  width="36"
                  height="48"
                  rx="4"
                  fill="url(#progGradient2)"
                  stroke="#FFC94B"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                {[...Array(3)].map((_, row) =>
                  [...Array(3)].map((_, col) => (
                    <rect
                      key={`btn-${row}-${col}`}
                      x={x - 12 + col * 8}
                      y={y - 10 + row * 8}
                      width="6"
                      height="6"
                      rx="1"
                      fill="#FFC94B"
                    />
                  ))
                )}
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

          {/* Code brackets */}
          {[...Array(6)].map((_, i) => {
            const x = (i * 190 + 160) % 1040;
            const y = (i * 120 + 200) % 600;
            const dur = 6 + i * 0.5;
            return (
              <g key={`code-${i}`} opacity="0.4">
                <path
                  d={`M${x - 10},${y - 20} L${x - 20},${y} L${x - 10},${
                    y + 20
                  }`}
                  stroke="#5EC1E8"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d={`M${x + 10},${y - 20} L${x + 20},${y} L${x + 10},${
                    y + 20
                  }`}
                  stroke="#5EC1E8"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx={x} cy={y} r="3" fill="#5EC1E8">
                  <animate
                    attributeName="r"
                    values="3;6;3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Books (Learning) */}
          {[...Array(8)].map((_, i) => {
            const x = (i * 170 + 140) % 1060;
            const y = (i * 95 + 180) % 620;
            const dur = 7 + i * 0.5;
            return (
              <g key={`book-${i}`} opacity="0.35">
                <rect
                  x={x - 14}
                  y={y - 10}
                  width="28"
                  height="20"
                  rx="2"
                  fill="url(#progGradient1)"
                  stroke="#2CA4A4"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                <line
                  x1={x - 8}
                  y1={y - 4}
                  x2={x + 8}
                  y2={y - 4}
                  stroke="#2CA4A4"
                  strokeWidth="1.5"
                />
                <line
                  x1={x - 8}
                  y1={y + 2}
                  x2={x + 8}
                  y2={y + 2}
                  stroke="#2CA4A4"
                  strokeWidth="1.5"
                />
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

          {/* Sparkles */}
          {[...Array(20)].map((_, i) => {
            const cx = (i * 88 + 70) % 1130;
            const cy = (i * 67 + 100) % 700;
            const dur = 3 + (i % 5) * 0.5;
            return (
              <g key={`sparkle-prog-${i}`} opacity="0.5">
                <circle cx={cx} cy={cy} r="2.5" fill="#FFC94B">
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
                  stroke="#FFC94B"
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
                  stroke="#FFC94B"
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

          {/* Glowing orbs */}
          <circle cx="250" cy="200" r="120" fill="url(#glowProg)">
            <animate
              attributeName="r"
              values="120;150;120"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="950" cy="600" r="110" fill="#FFC94B" opacity="0.15">
            <animate
              attributeName="r"
              values="110;140;110"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F3E3E] mb-6">
            Programs & Packages
          </h1>
          <p className="text-lg text-[#2F3E3E]/80 max-w-2xl mx-auto">
            Choose the perfect learning path for your child
          </p>
        </div>

        {/* Age Selector */}
        <div
          className="flex justify-center mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-100">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedAge === age
                    ? "bg-[#2CA4A4] text-white shadow-md"
                    : "text-[#2F3E3E] hover:bg-[#2CA4A4]/10"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Single Domains */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold text-[#2F3E3E] mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Single Domains
          </h2>
          <DomainsGrid />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hidden">
            {singleDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={domain.title}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp border border-gray-100 hover:border-[#2CA4A4]/20`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Image placeholder */}
                  <div className="relative h-40 bg-gradient-to-br from-[#FAF7F2] to-[#2CA4A4]/10 rounded-xl mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#2F3E3E]/50">
                        <IconComponent className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-xs">{domain.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-[#2F3E3E]/70 group-hover:text-[#2F3E3E]/90 transition-colors duration-300 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${domain.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
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

// Child Component 2: 4-in-1 Bundles
const FourInOneBundles: React.FC = () => {
  const bundles = [
    {
      title: "Early Learners Bundle",
      description: "Math, Coding, Communication, Design",
      color: "from-[#A5C85A] to-[#2CA4A4]",
    },
    {
      title: "Intermediate Learners Bundle",
      description: "Math, Coding, Communication, Design",
      color: "from-[#FFC94B] to-[#5EC1E8]",
    },
    {
      title: "Advanced Learners Bundle",
      description: "Math, Coding, Communication, Design",
      color: "from-[#2CA4A4] to-[#8B5FBF]",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated SVG Background - Bundles Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="bundleGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
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
            <linearGradient
              id="bundleGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FFC94B", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#5EC1E8", stopOpacity: 0.35 }}
              />
            </linearGradient>
            <radialGradient id="glowBundle" cx="50%" cy="50%">
              <stop
                offset="0%"
                style={{ stopColor: "#A5C85A", stopOpacity: 0.25 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#A5C85A", stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>

          {/* 4-square bundle icons */}
          {[...Array(6)].map((_, i) => {
            const x = 200 + i * 180;
            const y = 250 + (i % 2) * 200;
            const dur = 7 + i;
            return (
              <g key={`bundle-${i}`} opacity="0.35">
                {/* 4 squares in 2x2 grid */}
                <rect
                  x={x - 20}
                  y={y - 20}
                  width="18"
                  height="18"
                  rx="3"
                  fill="url(#bundleGradient1)"
                  stroke="#A5C85A"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={x + 2}
                  y={y - 20}
                  width="18"
                  height="18"
                  rx="3"
                  fill="url(#bundleGradient2)"
                  stroke="#FFC94B"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    begin="0.2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={x - 20}
                  y={y + 2}
                  width="18"
                  height="18"
                  rx="3"
                  fill="url(#bundleGradient2)"
                  stroke="#5EC1E8"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    begin="0.4s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={x + 2}
                  y={y + 2}
                  width="18"
                  height="18"
                  rx="3"
                  fill="url(#bundleGradient1)"
                  stroke="#2CA4A4"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    begin="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                {/* Grouping circle */}
                <circle
                  cx={x - 1}
                  cy={y - 1}
                  r="32"
                  fill="none"
                  stroke="#A5C85A"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    values="32;36;32"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,-12; 0,0`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Connected group icons */}
          {[...Array(4)].map((_, i) => {
            const x = 280 + i * 260;
            const y = 420;
            const dur = 8 + i;
            return (
              <g key={`group-${i}`} opacity="0.35">
                {/* 3 people in group */}
                {[-15, 0, 15].map((offset, idx) => (
                  <g key={`person-${idx}`}>
                    <circle cx={x + offset} cy={y} r="8" fill="#5EC1E8">
                      <animate
                        attributeName="opacity"
                        values="0.4;0.7;0.4"
                        dur={`${dur}s`}
                        begin={`${idx * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <path
                      d={`M${x + offset},${y + 8} L${x + offset},${y + 20} M${
                        x + offset - 7
                      },${y + 15} L${x + offset + 7},${y + 15}`}
                      stroke="#5EC1E8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.4;0.7;0.4"
                        dur={`${dur}s`}
                        begin={`${idx * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                ))}
              </g>
            );
          })}

          {/* Package boxes */}
          {[...Array(8)].map((_, i) => {
            const x = (i * 160 + 140) % 1060;
            const y = (i * 100 + 160) % 540;
            const dur = 6 + i * 0.5;
            return (
              <g key={`package-${i}`} opacity="0.35">
                <rect
                  x={x - 16}
                  y={y - 16}
                  width="32"
                  height="32"
                  rx="4"
                  fill="url(#bundleGradient1)"
                  stroke="#A5C85A"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                {/* Cross tape */}
                <line
                  x1={x - 16}
                  y1={y}
                  x2={x + 16}
                  y2={y}
                  stroke="#FFC94B"
                  strokeWidth="3"
                />
                <line
                  x1={x}
                  y1={y - 16}
                  x2={x}
                  y2={y + 16}
                  stroke="#FFC94B"
                  strokeWidth="3"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${x} ${y}`}
                  to={`360 ${x} ${y}`}
                  dur={`${dur * 2}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Stars */}
          {[...Array(12)].map((_, i) => {
            const x = (i * 120 + 100) % 1100;
            const y = (i * 80 + 120) % 580;
            const size = 8 + (i % 3) * 3;
            const dur = 5 + (i % 4);
            return (
              <g key={`star-bundle-${i}`} opacity="0.4">
                <polygon
                  points={`${x},${y - size} ${x + size * 0.3},${
                    y - size * 0.3
                  } ${x + size},${y} ${x + size * 0.3},${y + size * 0.3} ${x},${
                    y + size
                  } ${x - size * 0.3},${y + size * 0.3} ${x - size},${y} ${
                    x - size * 0.3
                  },${y - size * 0.3}`}
                  fill="#FFC94B"
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
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </polygon>
              </g>
            );
          })}

          {/* Glowing orbs */}
          <circle cx="300" cy="200" r="110" fill="url(#glowBundle)">
            <animate
              attributeName="r"
              values="110;140;110"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="900" cy="500" r="100" fill="#5EC1E8" opacity="0.12">
            <animate
              attributeName="r"
              values="100;130;100"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            4-in-1 Bundles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div
              key={bundle.title}
              className={`group relative text-center animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Bundle card */}
              <div className="bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-[#2CA4A4]/20">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#2CA4A4]/10 to-[#A5C85A]/10 rounded-xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#2F3E3E]/50">
                      <Users className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-xs">{bundle.title}</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#2CA4A4] rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#A5C85A] rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#2F3E3E] group-hover:text-[#2CA4A4] transition-colors duration-300">
                    {bundle.title}
                  </h3>
                  <p className="text-sm text-[#2F3E3E]/80 group-hover:text-[#2F3E3E] transition-colors duration-300 leading-relaxed">
                    {bundle.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bundle.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${bundle.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Child Component 3: Full Access
const FullAccess: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Animated SVG Background - Full Access Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="accessGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FFC94B", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#2CA4A4", stopOpacity: 0.35 }}
              />
            </linearGradient>
            <radialGradient id="glowAccess" cx="50%" cy="50%">
              <stop
                offset="0%"
                style={{ stopColor: "#FFC94B", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FFC94B", stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>

          {/* Expanding rings (unlimited access) */}
          {[...Array(5)].map((_, i) => {
            const dur = 6 + i;
            return (
              <g key={`ring-${i}`} opacity="0.3">
                <circle
                  cx="600"
                  cy="350"
                  r="50"
                  fill="none"
                  stroke="#2CA4A4"
                  strokeWidth="2.5"
                >
                  <animate
                    attributeName="r"
                    values="50;200;50"
                    dur={`${dur}s`}
                    begin={`${i * 1.2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur={`${dur}s`}
                    begin={`${i * 1.2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Key icons (unlock all) */}
          {[...Array(6)].map((_, i) => {
            const x = (i * 200 + 150) % 1050;
            const y = 180 + (i % 2) * 340;
            const dur = 7 + i;
            return (
              <g key={`key-${i}`} opacity="0.35">
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="url(#accessGradient)"
                  stroke="#FFC94B"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x={x + 10}
                  y={y - 4}
                  width="20"
                  height="8"
                  rx="2"
                  fill="url(#accessGradient)"
                  stroke="#FFC94B"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                <line
                  x1={x + 24}
                  y1={y - 6}
                  x2={x + 24}
                  y2={y - 10}
                  stroke="#FFC94B"
                  strokeWidth="2"
                />
                <line
                  x1={x + 28}
                  y1={y - 6}
                  x2={x + 28}
                  y2={y - 12}
                  stroke="#FFC94B"
                  strokeWidth="2"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${x} ${y}`}
                  to={`360 ${x} ${y}`}
                  dur={`${dur * 2}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Open book icons */}
          {[...Array(8)].map((_, i) => {
            const x = (i * 170 + 160) % 1040;
            const y = (i * 110 + 200) % 500;
            const dur = 6 + i * 0.5;
            return (
              <g key={`openbook-${i}`} opacity="0.35">
                <path
                  d={`M${x - 20},${y} Q${x - 20},${y - 15} ${x},${y - 15} Q${
                    x + 20
                  },${y - 15} ${x + 20},${y} L${x + 20},${y + 15} Q${x + 20},${
                    y + 20
                  } ${x},${y + 22} Q${x - 20},${y + 20} ${x - 20},${y + 15} Z`}
                  fill="url(#accessGradient)"
                  stroke="#2CA4A4"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <line
                  x1={x}
                  y1={y - 15}
                  x2={x}
                  y2={y + 22}
                  stroke="#2CA4A4"
                  strokeWidth="2"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,-10; 0,0`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Infinity symbols */}
          {[...Array(4)].map((_, i) => {
            const x = 250 + i * 300;
            const y = 350;
            const dur = 8 + i;
            return (
              <g key={`infinity-${i}`} opacity="0.35">
                <path
                  d={`M${x - 25},${y} Q${x - 15},${y - 15} ${x},${y} Q${
                    x + 15
                  },${y + 15} ${x + 25},${y} Q${x + 15},${y - 15} ${x},${y} Q${
                    x - 15
                  },${y + 15} ${x - 25},${y}`}
                  fill="none"
                  stroke="#FFC94B"
                  strokeWidth="3"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}

          {/* Crown icons (premium) */}
          {[...Array(5)].map((_, i) => {
            const x = 220 + i * 230;
            const y = 500 + (i % 2) * 80;
            const dur = 7 + i;
            return (
              <g key={`crown-${i}`} opacity="0.4">
                <path
                  d={`M${x - 15},${y + 8} L${x - 18},${y - 5} L${
                    x - 10
                  },${y} L${x},${y - 10} L${x + 10},${y} L${x + 18},${y - 5} L${
                    x + 15
                  },${y + 8} Z`}
                  fill="url(#accessGradient)"
                  stroke="#FFC94B"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx={x - 10} cy={y - 5} r="3" fill="#FFC94B" />
                <circle cx={x} cy={y - 12} r="3" fill="#FFC94B" />
                <circle cx={x + 10} cy={y - 5} r="3" fill="#FFC94B" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,-8; 0,0`}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          {/* Sparkles */}
          {[...Array(20)].map((_, i) => {
            const cx = (i * 82 + 75) % 1125;
            const cy = (i * 63 + 90) % 610;
            const dur = 3 + (i % 5) * 0.5;
            return (
              <g key={`sparkle-access-${i}`} opacity="0.5">
                <circle cx={cx} cy={cy} r="3" fill="#5EC1E8">
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="3;6;3"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <line
                  x1={cx}
                  y1={cy - 9}
                  x2={cx}
                  y2={cy + 9}
                  stroke="#5EC1E8"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1={cx - 9}
                  y1={cy}
                  x2={cx + 9}
                  y2={cy}
                  stroke="#5EC1E8"
                  strokeWidth="2"
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

          {/* Glowing orbs */}
          <circle cx="200" cy="200" r="130" fill="url(#glowAccess)">
            <animate
              attributeName="r"
              values="130;160;130"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1000" cy="500" r="120" fill="#2CA4A4" opacity="0.15">
            <animate
              attributeName="r"
              values="120;150;120"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E3E] mb-6">
            Full Access
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative animate-fadeInLeft">
              <div className="relative bg-gradient-to-br from-[#FFC94B]/10 to-[#2CA4A4]/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="relative h-80 bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/20 rounded-2xl overflow-hidden shadow-2xl border border-[#2CA4A4]/10">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#FFC94B]/10">
                    <div className="text-center text-[#2F3E3E]/50">
                      <BookOpen className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Full Access Dashboard</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-[#FFC94B] rounded-full animate-bounce delay-100"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#2CA4A4] rounded-full animate-pulse"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5EC1E8] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5FBF] rounded-full"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fadeInRight">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#2F3E3E]">
                  Full Access
                </h3>
                <p className="text-[#2F3E3E]/80 leading-relaxed">
                  Unlock all courses and resources for all age groups
                </p>
              </div>

              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#2CA4A4]/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2F3E3E] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#2F3E3E]/80 mb-6 max-w-2xl mx-auto">
              Choose the perfect program for your child and watch them thrive
              across multiple domains of learning and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2CA4A4] hover:bg-[#5EC1E8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-[#FFC94B] hover:bg-[#A5C85A] text-[#2F3E3E] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent Component
const ProgramsPackages: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <AgeSelectorAndSingleDomains />
      <FourInOneBundles />
      <FullAccess />

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

export default ProgramsPackages;
