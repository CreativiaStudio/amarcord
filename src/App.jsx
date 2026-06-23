import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CoursePage from './components/CoursePage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corso/:id" element={<CoursePage />} />
        </Routes>
        
        {/* Simple Footer shared across all pages */}
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', color: '#666' }}>
          <p>© {new Date().getFullYear()} Accademia Mediterranea del Cinema. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
