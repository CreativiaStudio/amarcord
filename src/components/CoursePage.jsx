import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import LeadForm from './LeadForm';
import { ChevronLeft, Calendar, User, BookOpen } from 'lucide-react';
import './CoursePage.css';

export default function CoursePage() {
  const { id } = useParams();
  const course = coursesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const openModal = () => {
    const modal = document.getElementById('form-modal');
    if (modal) modal.classList.add('active');
  };

  const closeModal = () => {
    const modal = document.getElementById('form-modal');
    if (modal) modal.classList.remove('active');
  };

  return (
    <div className="course-page">
      {/* Top Navigation */}
      <nav className="course-nav">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Torna ai Corsi
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="course-hero" style={{ backgroundImage: `url(${course.heroImage})` }}>
        <div className="course-hero-overlay"></div>
        <div className="container course-hero-content animate-fade-in">
          <div className="course-badge">{course.title}</div>
          <h1 className="course-title">{course.title}</h1>
          <p className="course-short-desc">{course.shortDesc}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container course-main">
        <div className="course-content-grid">
          
          {/* Left Column: Details */}
          <div className="course-details">
            <section className="detail-section">
              <h2>Il Corso</h2>
              <p className="course-full-desc">{course.description}</p>
            </section>

            <div className="info-cards">
              <div className="info-card glass">
                <Calendar className="info-icon" />
                <div>
                  <h4>Durata</h4>
                  <p>{course.duration}</p>
                </div>
              </div>
              <div className="info-card glass">
                <User className="info-icon" />
                <div>
                  <h4>Insegnanti</h4>
                  <p>{course.teachers.join(', ')}</p>
                </div>
              </div>
            </div>

            <section className="detail-section">
              <h2>Programma e Moduli</h2>
              <ul className="modules-list">
                {course.modules.map((mod, idx) => (
                  <li key={idx}>
                    <BookOpen size={18} className="list-icon" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Desktop Form */}
          <aside className="course-sidebar desktop-only">
            <div className="sticky-sidebar">
              <LeadForm defaultCourse={course.title} />
            </div>
          </aside>
        </div>
        
        {/* Mobile Form Section (Bottom of page content) */}
        <div className="mobile-only mobile-form-wrapper">
          <LeadForm defaultCourse={course.title} />
        </div>
      </main>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="sticky-bottom-bar mobile-only">
        <button className="btn-primary full-width" onClick={openModal}>
          Richiedi Informazioni
        </button>
      </div>

      {/* Modal / Bottom Sheet for Form */}
      <div id="form-modal" className="modal-overlay" onClick={(e) => {
        if(e.target.id === 'form-modal') closeModal();
      }}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>&times;</button>
          <LeadForm defaultCourse={course.title} />
        </div>
      </div>
    </div>
  );
}
