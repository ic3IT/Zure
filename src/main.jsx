import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { ScrollSepoliaTestnet } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThirdwebProvider activeChain={ ScrollSepoliaTestnet } 
      clientId="1e11f5ed7379e8b2e3305a4bf4ebe2db">
    <BrowserRouter>
      <App />    
    </BrowserRouter>
    </ThirdwebProvider>

  </React.StrictMode>,
)
