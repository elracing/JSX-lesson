import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <h1> Hey this is gonna render!</h1>
  ,
  <StrictMode>
    <App />
  </StrictMode>,
)
