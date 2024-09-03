import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Project from './Pages/Projects/Project';
import './App.css'

const App = () => {
  // const [sidebar, setSidebar] = useState(true);

  return ( 
    <Router> {/* Wrap the components with Router */}
      <div>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Projects' element={<Project />}/>
          <Route path='/Skills' element={<Skills />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
