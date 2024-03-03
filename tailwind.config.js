/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      container: {
        center: true,
        padding: "0px 162px",
      },
      colors: {
        Arapawa: "#274C5B",
        Padua: "#7EB693",
        FunkyYellow: "#EFD372",
        DiscoBall: "#D4D4D4",
        Doctor: "#F9F8F8",
        HeavySugar: "#EFF6F1",
        CityRain: "#525C60",
        drwhite: {
          DEFAULT: "#fafafafa",
          1: "#e0e0e0",
          2: "#B8B8B8",
          3: "#F1F1F1",
          4: "#F1F8F4",
        },
        SeaLettuce: "#68A47F",
        SummerSky: "#37B5DE",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        yellowtail: ["Yellowtail", "cursive"],
      },
      backgroundImage: {
        heroHomePage: "url('./public/mock-images/hero.jpeg')",
      },
    },
  },
  plugins: [],
};
