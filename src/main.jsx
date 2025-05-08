import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GigExpertApp from './GigExpertApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GigExpertApp />
  </StrictMode>,
)
