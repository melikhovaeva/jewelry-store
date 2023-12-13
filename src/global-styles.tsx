import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
      --white: #FFFFFF;
      --white-dark: #FBFBFB;
      --light-gray: #EFEFEF; 
      --light-gray-dark: #9A9A9A;
      --gray: #D8D8D8;
      --gray-dark: #3D3D3D;
      --dark-gray: #707070;
      --dark-gray-dark: #272727;
      --black: #000000;
      --black-dark: #0A0A0A;
      --accent: #A18A68;
      --accent-dark: #B4A186;
      --errors: #D82700;
	}

  @font-face {
    font-family: 'DMSans-Regular'; 
    font-weight: 400;
    src: url('./public/font/DMSans-Regular.ttf') format('ttf'); 
  }

  @font-face {
    font-family: 'DMSans-Medium'; 
    font-weight: 500;
    src: url('./public/font/DMSans-Medium.ttf') format('ttf'); 
  }

  @font-face {
    font-family: 'DMSans-Bold';
    font-weight: 700;
    src: url('./public/font/DMSans-Bold.ttf') format('ttf'); 
  }


  body {
    font-size: 16px;
    font-family: 'DMSans-Regular', sans-serif;
    max-width: 1250px;
    margin: 0 auto;
  }

  h1 {
    color: var(--black);
  }


  html[data-theme=light] {
        body{
            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            background-color: var(--white);
        }
        h1 {
          color: var(--black);
        }

        .logo{
          color: var(--black);
        }

        .logo__text {
          color: var(--accent);
        }

        .nav__link {
          color: var(--black)
        }

        .nav__button {
          background-color: var(--black);
          color: var(--white);
          border: none;
        }

        .nav__button:hover {
          background-color: var(--accent);
          color: var(--white);
          border: none;
        }

        .page {
          color: var(--black);
        }
    }

    html[data-theme=dark] {
        body{
            background-color: var(--black-dark);
            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        h1 {
          color: var(--white-dark);
        }
        
        .logo{
          color: var(--white-dark);
        }

        .logo__text {
          color: var(--accent-dark);
        }

        .nav__link {
          color: var(--white-dark)
        }

        .nav__button {
          background-color: var(--black-dark);
          color: var(--white-dark);
          border: 1px solid var(--white-dark);
        }

        .nav__button:hover {
          background-color: var(--accent-dark);
          color: var(--white-dark);
          border: 1px solid var(--accent-dark);
        }

        .page {
          color: var(--white-dark);
        }
    }

`

export default GlobalStyles;