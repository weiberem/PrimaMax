import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#effaf6",
          100: "#d7f1e7",
          200: "#b1e3d2",
          300: "#82cdb7",
          400: "#52b099",
          500: "#369583",
          600: "#2d7d6f",
          700: "#246058",
          800: "#1f4d47",
          900: "#1b403c",
          950: "#0d2422",
        },
        alpine: {
          50: "#fdf8f3",
          100: "#fbeede",
          200: "#f5dabc",
          300: "#eebf91",
          400: "#e59d63",
          500: "#dc8042",
          600: "#cc6735",
          700: "#a94f2d",
          800: "#87412b",
          900: "#6e3725",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
