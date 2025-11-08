const finwitKidsColors = {
  // Primary Colors - Core brand identity
  primary: {
    tealBlue: {
      hex: "#2CA4A4",
      name: "Teal Blue",
      usage: "buttons, CTAs, key headings, dolphin outline",
    },
    leafGreen: {
      hex: "#A5C85A",
      name: "Leaf Green",
      usage: "positive status indicators, hover accents, secondary buttons",
    },
  },

  // Secondary Colors - Playful accents
  secondary: {
    goldenYellow: {
      hex: "#FFC94B",
      name: "Golden Yellow",
      usage: "section highlights, stars & dots, playful accents",
    },
    purplePlum: {
      hex: "#8B5FBF",
      name: "Purple Plum",
      usage: "subheadings, icon details, richness accent",
    },
    skyBlue: {
      hex: "#5EC1E8",
      name: "Sky Blue",
      usage: "soft background sections, accent highlights",
    },
  },

  // Accent/Neutral Colors - Foundation
  accent: {
    warmCream: {
      hex: "#FAF7F2",
      name: "Warm Cream",
      usage: "primary background color, logo background",
    },
    charcoalGray: {
      hex: "#2F3E3E",
      name: "Charcoal Gray",
      usage: "text color for high readability, headings",
    },
  },

  // Quick access arrays for easy iteration
  palette: {
    all: [
      "#2CA4A4",
      "#A5C85A",
      "#FFC94B",
      "#8B5FBF",
      "#5EC1E8",
      "#FAF7F2",
      "#2F3E3E",
    ],
    primaryOnly: ["#2CA4A4", "#A5C85A"],
    playfulAccents: ["#FFC94B", "#8B5FBF", "#5EC1E8"],
    neutrals: ["#FAF7F2", "#2F3E3E"],
  },
};

// Example usage functions
export const getColorByName = (colorName: string) => {
  const allColors = {
    ...finwitKidsColors.primary,
    ...finwitKidsColors.secondary,
    ...finwitKidsColors.accent,
  };
  return Object.values(allColors).find((color) =>
    color.name.toLowerCase().includes(colorName.toLowerCase())
  );
};

// Export for use
export default finwitKidsColors;
