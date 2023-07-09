import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// importing tailwindcss for the project
import './index.css';

import { BrowserRouter } from 'react-router-dom';

// import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <WagmiConfig config={config}> */}
      {/* <ThirdwebProvider activeChain='ethereum'> */}
      <App />
      {/* </ThirdwebProvider> */}
      {/* </WagmiConfig> */}
    </BrowserRouter>
  </React.StrictMode>
);
