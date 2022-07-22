/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
};

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
