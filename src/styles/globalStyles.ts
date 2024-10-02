import { createGlobalStyle } from "styled-components";
import { Rubik, Josefin_Sans } from "next/font/google";

export const rubik = Rubik({
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
    /* font-family: ${rubik.style.fontFamily}, sans-serif; */

    font-size: 16px;

    @media (min-width: 600px) {
      font-size: 18px;
    }

    @media (min-width: 900px) {
      font-size: 24px;
    }

    @media (min-width: 1200px) {
      font-size: 36px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const theme = {
  colors: {
    blue: "#3399ff",
    green: "#00ff00",
    red: "#ff00ff",
    grey: "#d3d3d3",
    darkgray: "#A9A9A9",
    purple: "rgba(233, 213, 255, 0.8)",
  },
};
