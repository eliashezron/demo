import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from 'react-router-dom';


const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  }
})

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="VNzJriaSdN62Qn99Mxlln91xuKbhoVlA0HsEnnEy" serverUrl="https://5isiq2mqvvxj.usemoralis.com:2053/server">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App isServerInfo/>
        </BrowserRouter>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();