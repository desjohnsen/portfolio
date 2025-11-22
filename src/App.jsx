import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Footer from './components/Footer';

const App = () => {
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar 
        projectSectionRef={projectSectionRef} 
        contactSectionRef={contactSectionRef} 
      />

      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                projectSectionRef={projectSectionRef} 
                contactSectionRef={contactSectionRef} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
