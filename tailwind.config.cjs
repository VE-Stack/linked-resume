const colors = require("tailwindcss/colors");

const max = c => Math.min(c, 255);
const min = c => Math.max(c, 0);

/**
 * @param {string} key
 * @param {string} color
 */
const colorGenerator = (key, color) => {
  if (color in colors) {
    return {
      [`${key}-darker`]: colors[color]["900"],
      [`${key}-dark`]: colors[color]["800"],
      [key]: colors[color]["500"],
      [`${key}-light`]: colors[color]["200"],
      [`${key}-lighter`]: colors[color]["50"]
    };
  }

  if (color.startsWith("#")) {
    color = color.replace("#", "");
    color = color.length === 3 ? color.replace(/(.)(.)(.)/, "$1$1$2$2$3$3") : color;
    color = color.length === 6 ? color : "000000";
    const [r, g, b] = color.match(/.{2}/g).map(c => parseInt(c, 16));

    return {
      [`${key}-darker`]: `rgb(${min(r * 0.6)}, ${min(g * 0.6)}, ${min(b * 0.6)})`,
      [`${key}-dark`]: `rgb(${min(r * 0.8)}, ${min(g * 0.8)}, ${min(b * 0.8)})`,
      [key]: `rgb(${r}, ${g}, ${b})`,
      [`${key}-light`]: `rgb(${max(r * 1.2)}, ${max(g * 1.2)}, ${max(b * 1.2)})`,
      [`${key}-lighter`]: `rgb(${max(r * 1.4)}, ${max(g * 1.4)}, ${max(b * 1.4)})`
    };
  }

  throw new Error(`${color} is not a valid color.`);
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "[data-theme='dark']"],
  safelist: [{ pattern: /.*/, variants: ["dark"] }],
  theme: {
    container: {
      center: true
    },
    colors(utils) {
      return {
        ...colorGenerator("primary", "#6750A4"),
        ...colorGenerator("secondary", "blue"),
        ...colorGenerator("success", "green"),
        ...colorGenerator("warning", "yellow"),
        ...colorGenerator("danger", "red"),
        ...colorGenerator("info", "blue"),
        light: utils.colors.gray["100"],
        dark: utils.colors.gray["800"],
        white: utils.colors.white,
        black: utils.colors.black
      };
    }
  },
  plugins: []
};
