import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CoursePage from './components/CoursePage';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corso/:id" element={<CoursePage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        
        {/* Simple Footer shared across all pages */}
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', color: '#666' }}>
          <p>© {new Date().getFullYear()} Accademia Mediterranea del Cinema. Tutti i diritti riservati.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <Link to="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'underline' }}>Privacy Policy</Link>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
