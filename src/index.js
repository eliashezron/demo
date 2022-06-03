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
const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="4urctmH7vk5oNRJR1RNqXReYg0cRjHhvGqGCgYda" serverUrl="https://01ob4llhuhhv.usemoralis.com:2053/server">
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