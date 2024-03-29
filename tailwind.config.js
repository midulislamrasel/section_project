module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Montserrat, sans-serif"],
        Roboto: ["Roboto, sans-serif"],
      },
      colors: ({ colors }) => ({
        ...colors,
        "primary-color": "#1a1a1a",
        "primary-title": "#1a1a1a",
        paragraph: "#333333",
        "primary-orange": "#e67e22",
        "primary-gray": "#666666",
        "primary-bg": "#f9f9f9",
      }),
    },
  },
  plugins: [],
};
