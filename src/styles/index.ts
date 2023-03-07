import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: none;
    border: none;
    scroll-behavior: smooth;
    font-family: 'Clash Display', sans-serif;
    button, a {
      cursor: pointer;
      border: none;
      :hover {
        opacity: 0.7;
        transition: opacity 0.3s;
      }
    }
  }

  h1, h2, h3, h4, h5, h6, p, li {
    font-weight: 400;
    color: var(--color-black);
    line-height: 140%
  }
  
  h1{
    font-size: 2.25rem;
  }
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.5rem;
  }
  h4{
    font-size: 1.25rem;
  }
  h5{
    font-size: 0.875rem;
  }
  p, li{
    font-size: 1rem;
  }

  @font-face {
    font-family: 'Clash Display';
    src: url('@assets/fonts/ClashDisplay-Regular.woff') format('woff');
    font-style: normal;
  }

  :root {
    --color-dark-primary: #2A254B;
    --color-primary: #4E4D93;
    --color-light-gray: #F9F9F9;
    --color-border-gray: #EBE8F4;
    --color-white: #FFFFFF;
    --color-border-dark: #CAC6DA;
    --color-black: #000000;
    --color-navigation: #726e8d;
  }
`;
