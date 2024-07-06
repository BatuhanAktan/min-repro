// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // This covers all nested files under the app directory
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}", // This is redundant if the previous line is present
    "./app/*.{js,ts,jsx,tsx,mdx}", // This is redundant if the first line is present
  ],
  theme: {
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
  },
  plugins: [],
};
