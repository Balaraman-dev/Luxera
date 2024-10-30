import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main_component from './components/Main_component'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main_component/>
  </StrictMode>,
)
