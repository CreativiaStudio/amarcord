import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';
import './Hero.css';

export default function Hero({ onCourseSelect, openModal }) {
  return (
    <section className="hero-section">
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/hero-bg-micro.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div 
            className="badge"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Accademia Amarcord Bari
          </motion.div>
          <motion.h1 
            className="hero-title"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Trasforma la tua Passione in una <span className="text-gold">Professione Reale</span> sul Set.
          </motion.h1>
          <motion.p 
            className="hero-description"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Corsi professionali a numero chiuso. Impara dai maestri del cinema, vivi l'esperienza di un vero set e costruisci il tuo futuro nel mondo dello spettacolo.
          </motion.p>
          <motion.div 
            className="hero-features"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
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
          </motion.div>

          {/* CTA Mobile: Mostrati solo quando il form di lato scompare */}
          <motion.div 
            className="mobile-only hero-mobile-cta"
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } } }}
          >
            <button onClick={() => {
              const corsiSection = document.getElementById('corsi');
              if(corsiSection) {
                corsiSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} className="btn-outline" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
              I Nostri Corsi
            </button>
            <button onClick={openModal} className="btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
              Richiedi Info
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <LeadForm defaultCourse="" />
        </motion.div>
      </div>
    </section>
  );
}
