import { createGlobalStyle } from "styled-components";

// Berfunsi sebagai global style untuk semua styled components
export default createGlobalStyle`
  *, *::before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
    line-height: 1.4;
    color: #333;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;
