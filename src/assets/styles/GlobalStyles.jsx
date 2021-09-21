import React from 'react';
import { Global, css } from '@emotion/react';
import theme from "./theme";
const styles = css`
  
  @font-face {
    font-family: "Sadadream";
    src: url("../fonts/Noto_Sans_KR/NotoSansKR-Regular.otf");
    font-style: normal;
  }
  @font-face {
    font-family: "Sadadream";
    src: url("../fonts/Roboto/Roboto-Regular.ttf") format("woff");
    unicode-range: U+0020-007E;
    font-style: normal;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    color: ${theme.color.black}
    font-family: "Sadadream";
    margin: 0;
    position: relative;
    background-color: ${theme.bgColor.lightMode};
    transition: background-color 0.3s ease;
    a {
      text-decoration: none;
      color: ${theme.fontColor.lightMode}
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.3;
    margin: 1rem 0 0;
  }

  a,
  button {
    display: inline-block;
    cursor: pointer;
  }

  *:focus {
    outline: none;
  }
  
  a:focus {
    outline: none;
  }
  
  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent !important;
  }

  input:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    color: transparent !important;
  } /* FF 4-18 */

  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder {
    color: transparent !important;
  } /* FF 19+ */

  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent !important;
  } /* IE 10+ */
`;

const GlobalStyles = () => {
    return (
        <Global styles={styles}/>
    );
};

export default GlobalStyles;