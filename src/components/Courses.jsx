import React from 'react';
import './Courses.css';
import { Video, Paintbrush, PenTool, Camera } from 'lucide-react';

const courses = [
  {
    id: 'Regia',
    title: 'Regia Cinematografica',
    icon: <Video size={32} color="var(--accent-gold)" />,
    description: "Impara a dirigere il set, gestire gli attori e trasformare la tua visione in realtà cinematografica.",
    duration: "1 Anno"
  },
  {
    id: 'Trucco',
    title: 'Trucco Cinematografico',
    icon: <Paintbrush size={32} color="var(--accent-gold)" />,
    description: "Dal make-up correttivo agli effetti speciali avanzati (SFX) richiesti sui grandi set.",
    duration: "1 Anno"
  },
  {
    id: 'Sceneggiatura',
    title: 'Sceneggiatura',
    icon: <PenTool size={32} color="var(--accent-gold)" />,
    description: "Le tecniche di scrittura creativa per strutturare storie avvincenti e sceneggiature pronte per la produzione.",
    duration: "1 Anno"
  },
  {
    id: 'Fotografia',
    title: 'Direzione della Fotografia',
    icon: <Camera size={32} color="var(--accent-gold)" />,
    description: "Padroneggia la luce, l'inquadratura e l'uso delle macchine da presa professionali RED e ARRI.",
    duration: "1 Anno"
  }
];

export default function Courses() {
  const scrollToForm = (courseId) => {
    const form = document.getElementById('lead-form');
    const select = document.getElementById('corso');
    if (form && select) {
      select.value = courseId;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Piccola animazione per far notare il form
      form.style.transform = 'scale(1.02)';
      setTimeout(() => form.style.transform = 'scale(1)', 300);
    }
  };

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2>I Nostri Corsi Professionali</h2>
          <p>Scegli il percorso più adatto a te e preparati a lavorare nel mondo del cinema.</p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card glass">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-footer">
                <span className="course-duration">⏱ {course.duration}</span>
                <button 
                  className="btn-outline" 
                  onClick={() => scrollToForm(course.id)}
                >
                  Richiedi Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
