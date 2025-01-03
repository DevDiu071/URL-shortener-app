/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "light-cyan": "hsla(180, 66%, 49%, 0.808)",
        darkgrayblue: " hsl(257, 27%, 26%)",
        red: " hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishviolet: "hsl(257, 7%, 63%)",
        darkblue: "hsl(255, 11%, 22%)",
        darkviolet: " hsl(260, 8%, 14%)",
      },

      screens: {
        tablet: "650px",
        laptop: "800px",
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};
