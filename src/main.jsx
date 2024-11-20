import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './section1.css'
import './section2.css'
import './section3.css'
import './section4.css'
import './section5.css'
import './section6.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
