import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

  body {
   margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #494D4E;
  background-color: #BBC18F;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;

export default GlobalStyle;
