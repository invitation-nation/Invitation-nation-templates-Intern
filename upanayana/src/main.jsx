
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import More from './upn001-More.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </Router>
  </StrictMode>
)