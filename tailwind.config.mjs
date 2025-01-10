/** @type {import('tailwindcss').Config} */
import tailwindcssIntersect from "tailwindcss-intersect";
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["border-black", "border-gray-200", "text-slate-400"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        section: "5px 5px 41px 5px #2e2c2c",
      },
      animation: {
        blink: "blink 4s  cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        blink2: "blink2 4s  cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "infinite-scroll": "infinite-scroll 30s linear infinite",
        "reverse-infinite-scroll":
          "reverse-infinite-scroll 25s linear infinite",
      },
      keyframes: {
        blink: {
          "0%": {
            "clip-path": "ellipse(36% 6% at 50% 40%)",
          },
          "12%": {
            "clip-path": "ellipse(36% 0% at 50% 40%)",
          },
          "14%, 100%": {
            "clip-path": "ellipse(36% 6% at 50% 40%)",
          },
        },
        blink2: {
          "0%": {
            "clip-path": "ellipse(36% 6% at 50% 22%)",
          },
          "12%": {
            "clip-path": "ellipse(36% 0% at 50% 22%)",
          },
          "14%, 100%": {
            "clip-path": "ellipse(36% 6% at 50% 22%)",
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
        purple: "var(--purple)",
      },
    },
  },
  plugins: [tailwindcssMotion, tailwindcssIntersect],
};
