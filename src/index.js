import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Mainnet, DAppProvider, Config, Rinkeby } from "@usedapp/core"
import { BrowserRouter } from "react-router-dom"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
})
const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/a22b6958cc5449a6a5bc6dc4e2c26a7a",
    [Rinkeby.chainId]:
      "https://rinkeby.infura.io/v3/a22b6958cc5449a6a5bc6dc4e2c26a7a",
  },
  notifications: {
    expirationPeriod: 10000,
    checkInterval: 1000,
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App isServerInfo />
        </BrowserRouter>
      </ChakraProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
