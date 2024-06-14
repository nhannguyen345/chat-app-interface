/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slidedown: {
          "0%": {
            // transform: "translateY(-10%)",
            // opacity: "0",
            // scale: "0",
            transform: "scaleY(0)",
            transformOrigin: "top",
            opacity: "0",
          },
          "100%": {
            // transform: "translateY(0)",
            // opacity: "1",
            // scale: "1",
            transform: "scaleY(1)",
            transformOrigin: "top",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-down": "slidedown 0.6s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
