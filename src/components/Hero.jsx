import React from 'react';
import LeadForm from './LeadForm';
import './Hero.css';

export default function Hero({ onCourseSelect }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="badge">Accademia Amarcord Bari</div>
          <h1 className="hero-title">
            Trasforma la tua Passione in una <span className="text-gold">Professione Reale</span> sul Set.
          </h1>
          <p className="hero-description">
            Corsi professionali a numero chiuso. Impara dai maestri del cinema, vivi l'esperienza di un vero set e costruisci il tuo futuro nel mondo dello spettacolo.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🎬</span>
              <span>Set Cinematografici Reali</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span>Classi a Numero Chiuso</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <span>Docenti Professionisti Attivi</span>
            </div>
          </div>
        </div>
        
        <div className="hero-form-wrapper">
          <LeadForm defaultCourse="" />
        </div>
      </div>
    </section>
  );
}
