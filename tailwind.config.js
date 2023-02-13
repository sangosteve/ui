/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      /* Color styles */
      "blue-50": "#E6F0FB",
      "blue-100": "#B0CFF1",
      "blue-200": "#8AB8EA",
      "blue-300": "#5497E1",
      "blue-400": "#3383DB",
      "blue-500": "#0064D2",
      "blue-600": "#005BBF",
      "blue-700": "#004795",
      "blue-800": "#003774",
      "blue-900": "#002A58",
      "yellow-50": "#FFFAE6",
      "yellow-100": "#FFEFB2",
      "yellow-200": "#FFE78D",
      "yellow-300": "#FFDB5A",
      "yellow-400": "#FFD539",
      "yellow-500": "#FFCA08",
      "yellow-600": "#E8B807",
      "yellow-700": "#B58F06",
      "yellow-800": "#8C6F04",
      "yellow-900": "#6B5503",
      "green-50": "#E9F7EF",
      "green-100": "#BCE6CE",
      "green-200": "#9CDAB6",
      "green-300": "#6EC994",
      "green-400": "#52BE80",
      "green-500": "#27AE60",
      "green-600": "#239E57",
      "green-700": "#1C7C44",
      "green-800": "#156035",
      "green-900": "#104928",
      "orange-50": "#FEEEEA",
      "orange-100": "#FBCCBD",
      "orange-200": "#F9B39D",
      "orange-300": "#F69070",
      "orange-400": "#F47A55",
      "orange-500": "#F1592A",
      "orange-600": "#DB5126",
      "orange-700": "#AB3F1E",
      "orange-800": "#853117",
      "orange-900": "#652512",
      "red-50": "#FCEBE9",
      "red-100": "#F5C1BC",
      "red-200": "#F1A39B",
      "red-300": "#EA7A6E",
      "red-400": "#E66051",
      "red-500": "#E03826",
      "red-600": "#CC3323",
      "red-700": "#9F281B",
      "red-800": "#7B1F15",
      "red-900": "#5E1810",
      "neutral-50": "#EBEDF1",
      "neutral-100": "#C1C8D2",
      "neutral-200": "#A3AEBC",
      "neutral-300": "#7A899E",
      "neutral-400": "#60728B",
      "neutral-500": "#384F6E",
      "neutral-600": "#334864",
      "neutral-700": "#28384E",
      "neutral-800": "#1F2B3D",
      "neutral-900": "#18212E",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontSize: {
      "-h1": "48px",
      "-h2": "40px",
      "-h3": "33px",
      "-h4": "28px",
      "-h5": "23px",
      "-title1": "19px",
      "-title2": "16px",
      "-body": " 13px",
      "-caption": "11px",
    },
    extend: {},
  },
  plugins: [],
};
