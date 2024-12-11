/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Passion: ["Passion One"],
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "*": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#6c59ff #1a1a1a",
        },
        "::-webkit-scrollbar": {
          width: "12px",
        },
        "::-webkit-scrollbar-track": {
          background: "#1a1a1a",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#6c59ff",
          borderRadius: "6px",
          border: "3px solid #1a1a1a",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#8475ff",
        },
      });
    },
  ],
};