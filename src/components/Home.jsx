import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import LeadForm from './LeadForm';
import { coursesData } from '../data/courses';
import './Courses.css'; // Riutilizziamo gli stili della griglia
import './CoursePage.css'; // Riutilizziamo gli stili per mobile-only e modal

export default function Home() {
  const coursesList = Object.values(coursesData);

  const openModal = () => {
    const modal = document.getElementById('home-form-modal');
    if (modal) modal.classList.add('active');
  };

  const closeModal = () => {
    const modal = document.getElementById('home-form-modal');
    if (modal) modal.classList.remove('active');
  };

  return (
    <div className="home-page">
      <Hero openModal={openModal} />
      
      <section className="courses-section" id="corsi">
        <div className="container">
          <div className="section-header">
            <h2>I Nostri Corsi Professionali</h2>
            <p>Scegli il percorso più adatto a te e preparati a lavorare nel mondo del cinema con docenti di altissimo livello.</p>
          </div>
          
          <motion.div 
            className="courses-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {coursesList.map((course) => (
              <motion.div 
                key={course.id} 
                className="course-card glass"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p>{course.shortDesc}</p>
                <div className="course-footer">
                  <span className="course-duration">
                    ⏱ {course.duration ? course.duration.split(' ').slice(0, 2).join(' ') : 'In aggiornamento'}
                  </span>
                  <Link to={`/corso/${course.id}`} className="btn-outline">
                    Scopri di più
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form di fine pagina (solo mobile) per ottimizzare la CRO */}
      <div className="mobile-only mobile-form-wrapper container" style={{ paddingBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#fff', textAlign: 'center' }}>Richiedi Informazioni</h3>
        <LeadForm defaultCourse="" />
      </div>

      {/* Modal / Bottom Sheet for Form */}
      <div id="home-form-modal" className="modal-overlay" onClick={(e) => {
        if(e.target.id === 'home-form-modal') closeModal();
      }}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>&times;</button>
          <LeadForm defaultCourse="" />
        </div>
      </div>

    </div>
  );
}
