/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'background': "#1E1E1E",
        "light-gray": "#DDDDDD",
      },
    },
  },
  plugins: [],
};
