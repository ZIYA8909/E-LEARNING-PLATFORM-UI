import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// CRITICAL: Ensure the path matches your folder
import Navbar from './components/Layout/Navbar'; 
import Home from './pages/Home';
import Auth from './pages/Auth';
import CourseListing from './pages/CourseListing';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* THIS LINE MAKES THE NAVBAR SHOW UP */}
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;