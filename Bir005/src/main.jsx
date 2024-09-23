import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import Special from './components/Bir005-special.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/special" element={<Special />} />
        </Routes>
    </Router>  
  </StrictMode>,
)
