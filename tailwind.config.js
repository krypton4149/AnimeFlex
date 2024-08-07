/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        nato: ["Noto Sans", "sans-serif"],
        Zain: ["Zain", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/bg/bg_hero.png')",
        login: "url('/src/assets/bg/bg_login.jpg')",
        pageTitle: "url('/src/assets/bg/page_title.jpg')",
        footer: "url('/src/assets/bg/footer_bg.jpg')",
        "gradient-custom": "linear-gradient(to right, #000,#171A21)",
      },
      colors: {
        "custom-black": "#171A21",
        "custom-green": "#6ede8a",
        "custom-green_dark": "#2dc653",
        "custom-white": "#f0fff1",
      },
    },
  },
  plugins: [],
};
