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
    <MoralisProvider appId="u9RUMMGtBxdx3NVW2e82j5YTBIuN2h0gyE8ARRDT" serverUrl="https://gpbeytfotusl.usemoralis.com:2053/server">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App isServerInfo/>
        </BrowserRouter>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
// api = EtbPcS47NFrQWvHteJYkLaUPAjdtXeFj
// relayer = uU122ER5oKDTPF6T2qfmAiXhqFm49UTEzHR25fGZnqD6FXxeiSr1hTxb8MJSsqcE
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();