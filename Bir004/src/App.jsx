import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Bir004-Home'
import Milestone from './components/Bir004-Milestone'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/milestone" element={<Milestone />} />
      </Routes>
    </Router>
  );
}

export default App
