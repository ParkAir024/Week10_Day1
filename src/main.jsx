import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CherryBlossomScene from './CherryBlossomScene.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <CherryBlossomScene />
    </BrowserRouter>
  </React.StrictMode>,
)
