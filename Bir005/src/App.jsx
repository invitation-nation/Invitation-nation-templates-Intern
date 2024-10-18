import "./App.css"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Special from './components/Bir005-special.jsx'
import Mainpage from './Bir005-mainpage.jsx'
import Gallery from './components/Bir005-Gallery'

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/special" element={<Special />} />
      </Routes>
  
  </BrowserRouter>  
  )
}

export default App