import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter} from 'react-router-dom'

// import { ThirdwebProvider } from "@thirdweb-dev/react";


import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai } from 'wagmi/chains'

const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

const config = createConfig({
  publicClient,
  webSocketPublicClient,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig config={config}>
        {/* <ThirdwebProvider> */}
        <App />
        {/* </ThirdwebProvider> */}
      </WagmiConfig>
    </BrowserRouter>
  // </React.StrictMode>
)
