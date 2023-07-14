module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "5px",
      sm: "4px",
      md: "6px",
      lg: "5px",
      full: "50px",
    },
    fontFamily: {
      sans: ["PPNeueMontreal-Medium", "Inter", "sans-serif"],
    },
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
      fontFamily: {
        "mtl-bold": ["PPNeueMontreal-Bold"],
        "mtl-medium": ["PPNeueMontreal-Medium"],
      },
      transitionDuration: {
        250: "250ms",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        yeat: "0.625rem",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "2/3": "2 / 3",
      },
      colors: {
        // yolk: "#CCFF00",
        yolk: "#000000",
        // eggshell: "#F8F8F8",
        eggshell: "#F5F7FA",
        // eggshell: "#f6fafd",
        kite: {
          DEFAULT: "#b05d46",
          light: "#be9d94",
          blue: "#551c0c",
        },
        dark: "#030303",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")({
      variantPrefix: "rdx",
    }),
  ],
};