import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OrgChart from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrgChart />
  </StrictMode>,
)
