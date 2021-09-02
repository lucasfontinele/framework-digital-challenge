import { createGlobalStyle } from 'styled-components';

import fontFaces from './fonts';

export default createGlobalStyle`
  ${fontFaces}

  :root {
    --gray-1: #F7F8FA;
    --gray-2: #B2B2B2;
    --gray-3: #666666;
    --background: #FFFFFF;
    --dark: #525252;
    --green: #1DB863;
    --purple: #7B5DD5;

    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      width: 4px;
      border-radius: 10px;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 10px;
    }
  }

  html {
    font-size: 10px;
  }

  html, body {
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    height: 100vh;
    width: 100%;
    display: block;
    background: var(--gray-1);

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'RobotoRegular', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--white);
  }
`;
