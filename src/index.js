import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './App';
import reportWebVitals from './reportWebVitals';

const Global = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;  
}
`
const theme = {
  colors: {
    primory: 'blue',
    secondary: 'green'
  },
  media: {
    phone: "(max-width:425px)",
    tablet: "(max-width:768px) and (min-width: 425px)",
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
