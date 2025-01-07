/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["animate-grow"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-very-slow": "spin 30s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "reverse-infinite-scroll":
          "reverse-infinite-scroll 25s linear infinite",
        fadein: "fadein 1s ease forwards",
        glow: "glow 1.5s linear infinite alternate",
        grow: "grow 1.5s linear forwards",
      },
      keyframes: {
        glow: {
          from: {
            "box-shadow": "0px 0px 1px 1px #d5c9f6",
          },
          to: {
            "box-shadow": "0px 0px 20px 20px #fffff0",
          },
        },

        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "reverse-infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        grow: {
          from: { height: "0" },
          to: { height: "10%" },
        },
        fadein: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
        bricolage: ["Bricolage", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        green: "var(--green)",
        black: "var(--black)",
        dark: "var(--dark)",
        gray: "var(--gray)",
        white: "var(--white)",
      },
    },
  },
  plugins: [tailwindcssMotion],
};
