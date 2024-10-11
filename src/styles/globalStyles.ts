import { createGlobalStyle } from "styled-components";
import { Rubik, Josefin_Sans, Alex_Brush } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
  display: "swap",
});

export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
  display: "swap",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
  display: "swap",
});

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
    font-family: ${josefin.style.fontFamily}, sans-serif;

    font-size: 14px;

    @media (min-width: 400px) {
    font-size: 16px;
    }

    @media (min-width: 600px) {
      font-size: 18px;
    }

    @media (min-width: 900px) {
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      font-size: 24px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const theme = {
  colors: {
    lightCyan: "#e0ffff",
    cyan: "#00ffff",
    // blue: "#00b7eb",
    blue: "#1e90ff",
    // blue: "#0073e6",
    // lightBlue: "#3399ff",
    lightBlue: "#00bfff",
    // lightBlue: "#00b7eb",
    // green: "#009900",
    green: "#00cc00",
    // green: "#00ee00",
    // green: "#00ff00",
    red: "#ff00ff",
    // darkOrange: "#FF8C00",
    darkOrange: "#fe5a1d",
    grey: "#d3d3d3",
    darkGray: "#A9A9A9",
    purple: "rgba(233, 213, 255, 0.8)",
    darkPurple: "#4b365f",
  },
  fontFamily: {
    alexBrush: alexBrush.style.fontFamily,
    rubik: rubik.style.fontFamily,
  },
};
