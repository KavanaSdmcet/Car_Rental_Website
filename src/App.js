import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CarListing from './components/CarListing';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
                <Route path="/cars" element={<CarListing />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
