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
    <MoralisProvider appId="Xwn0c822Im69mCfaegmN5ORzwq1diKogh8XCfnMI" serverUrl="https://xjoxkzfjwsba.usemoralis.com:2053/server">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App isServerInfo/>
        </BrowserRouter>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();