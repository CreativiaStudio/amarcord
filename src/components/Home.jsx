import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import { coursesData } from '../data/courses';
import './Courses.css'; // Riutilizziamo gli stili della griglia

export default function Home() {
  const coursesList = Object.values(coursesData);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="courses-section" id="corsi">
        <div className="container">
          <div className="section-header">
            <h2>I Nostri Corsi Professionali</h2>
            <p>Scegli il percorso più adatto a te e preparati a lavorare nel mondo del cinema con docenti di altissimo livello.</p>
          </div>
          
          <div className="courses-grid">
            {coursesList.map((course) => (
              <div key={course.id} className="course-card glass">
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p>{course.shortDesc}</p>
                <div className="course-footer">
                  <span className="course-duration">⏱ {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}</span>
                  <Link to={`/corso/${course.id}`} className="btn-outline">
                    Scopri di più
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
