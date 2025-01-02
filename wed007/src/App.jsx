import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './wed007-Home'
import Story from './wed007-story'
import Wisher from './wed007-wishers'
import Schedule from './wed007-schedule'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Story" element={<Story />} /> 
        <Route path="/Wisher" element={<Wisher/>} /> 
        <Route path="/Schedule" element={<Schedule/>} /> 
      </Routes>
    </Router>
  );
}

export default App