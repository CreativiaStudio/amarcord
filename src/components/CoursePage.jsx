import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import LeadForm from './LeadForm';
import SuccessStories from './SuccessStories';
import { ChevronLeft, Calendar, User, Users, BookOpen, Briefcase, Camera, AlertTriangle, CheckCircle, Award } from 'lucide-react';
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
            <ChevronLeft size={20} /> Torna all'Accademia
          </Link>
        </div>
      </nav>

      {/* 1. The Hook (Hero Cinematico) */}
      <header className="course-hero" style={{ 
        '--hero-bg-desktop': `url(${course.heroImage})`,
        '--hero-bg-mobile': `url(${course.heroImageMobile || course.heroImage})`,
        '--hero-pos-desktop': course.heroPosition || 'center',
        '--hero-pos-mobile': course.heroPositionMobile || 'top center',
        backgroundPosition: 'var(--hero-pos-desktop)'
      }}>
        <div className="course-hero-overlay"></div>
        <div className="container course-hero-content animate-fade-in">
          <div className="course-badge">Accademia Amarcord</div>
          <h1 className="course-title">{course.title}</h1>
          <p className="course-short-desc">{course.shortDesc}</p>
          <div className="hero-stats">
            <div className="stat-pill"><CheckCircle size={16}/> 100% Pratica Reale</div>
            <div className="stat-pill"><CheckCircle size={16}/> Docenti Professionisti</div>
          </div>
        </div>
      </header>

      {/* Main Content Layout (Left: Content, Right: Sticky Form) */}
      <main className="container course-main">
        <div className="course-content-grid">
          
          <div className="course-story" style={{ minWidth: 0 }}>
            
            {/* Introduzione */}
            <motion.section 
              className="story-section intro-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="course-full-desc lead-text">{course.description}</div>
              
              <div className="info-cards">
                {(course.duration || course.frequency) && (
                  <div className="info-card glass">
                    <Calendar className="info-icon" />
                    <div>
                      <h4>Durata e Frequenza</h4>
                      <p>
                        {course.duration && course.duration !== "??? (In attesa di conferma)" ? course.duration : ""}
                        {course.duration && course.duration !== "??? (In attesa di conferma)" && course.frequency && course.frequency !== "??? (In attesa di conferma)" ? " - " : ""}
                        {course.frequency && course.frequency !== "??? (In attesa di conferma)" ? course.frequency : ""}
                      </p>
                    </div>
                  </div>
                )}
                {course.teachers && course.teachers.length > 0 && (
                  <div className="info-card glass">
                    <User className="info-icon" />
                    <div>
                      <h4>Direzione Didattica</h4>
                      <p>{course.teachers.join(', ')}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.section>

            {/* 1.5 Docenti */}
            {course.teachersBio && (
              <motion.section 
                className="story-section glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ padding: '2rem', marginTop: '2rem', marginBottom: '2rem', borderLeft: '4px solid var(--accent-gold)', background: 'rgba(255,255,255,0.02)' }}
              >
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem' }}>
                  <Users className="section-icon" style={{ width: '28px', height: '28px', color: 'var(--accent-gold)' }} />
                  A lezione con i Maestri
                </h3>
                <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  {course.teachersBio}
                </div>
              </motion.section>
            )}

            {/* 2. Il Sogno (Sbocchi Professionali) */}
            <motion.section 
              className="story-section dream-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="section-header-left">
                <Briefcase className="section-icon" />
                <h2>Chi Diventerai</h2>
              </div>
              <p className="section-subtitle">Il cinema non è un hobby, è un'industria. Al termine del percorso sarai preparato per ricoprire ruoli reali come:</p>
              <div className="careers-grid">
                {course.careers.map((career, idx) => (
                  <div key={idx} className="career-tag">{career}</div>
                ))}
              </div>
            </motion.section>

            {/* RIPROVA SOCIALE SPECIFICA DEL CORSO (Spostata in alto) */}
            <div style={{ margin: '2rem 0', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              <SuccessStories courseId={course.id} />
            </div>

            {/* 3. La Realtà (Galleria Immersiva) */}
            <motion.section 
              className="story-section gallery-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="section-header-left">
                <Camera className="section-icon" />
                <h2>Vita sul Set</h2>
              </div>
              <p className="section-subtitle">{course.setSubtitle}</p>
              <div className="masonry-gallery">
                {course.gallery.map((img, idx) => {
                  const isLast = idx === course.gallery.length - 1;
                  const hasVideo = isLast && course.popupVideo;
                  
                  return (
                    <motion.div 
                      key={idx} 
                      className={`gallery-item-wrapper img-${idx} ${hasVideo ? 'has-video-clickable' : ''}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                      onClick={() => {
                        if (hasVideo) {
                          const videoModal = document.getElementById('video-modal');
                          const videoPlayer = document.getElementById('popup-video-player');
                          if (videoModal && videoPlayer) {
                            videoPlayer.src = course.popupVideo;
                            videoModal.classList.add('active');
                            videoPlayer.play();
                          }
                        }
                      }}
                    >
                      <img src={img} alt={`Vita sul set ${course.title}`} className="gallery-img" loading="lazy" />
                      {hasVideo && (
                        <div className="video-play-overlay">
                          <div className="play-btn-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5V19L19 12L8 5Z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* 4. Il Metodo (Programma/Timeline) */}
            <motion.section 
              className="story-section method-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="section-header-left">
                <BookOpen className="section-icon" />
                <h2>Il Percorso Formativo</h2>
              </div>
              <div className="timeline">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker">{idx + 1}</div>
                    <div className="timeline-content glass">
                      <h3>{mod.title}</h3>
                      <p>{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.section>

            {/* Cosa Otterrai (Esiti Finali) */}
            <motion.section 
              className="story-section outcomes-section glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ padding: '2rem', marginTop: '2rem', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
            >
              <div className="section-header-left" style={{ marginBottom: '1.5rem' }}>
                <Award className="section-icon" style={{ color: 'var(--accent-gold)' }} />
                <h2 style={{ color: 'var(--text-main)', fontSize: '1.6rem' }}>Cosa ottieni a fine corso</h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <CheckCircle size={24} color="var(--accent-gold)" />
                  <div>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Materiale per Showreel / Portfolio</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Il materiale girato durante le esercitazioni e i cortometraggi finali sarà tuo e potrai usarlo per presentarti a Casting o Produzioni.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={24} color="var(--accent-gold)" />
                  <div>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Attestato Accademico</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Certificazione professionale rilasciata dalla Direzione Didattica per certificare le competenze acquisite sul campo.</p>
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Borse di Studio (Condizionale) */}
            {course.hasScholarship && (
              <motion.section 
                className="story-section scholarship-section glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="section-header-left" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Award className="section-icon" style={{ color: 'var(--accent-gold)' }} />
                  <h2 style={{ color: 'var(--accent-gold)' }}>Borse di Studio Disponibili</h2>
                </div>
                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                  <img src="/images/borse-di-studio.jpg" alt="Allievi vincitori di borsa di studio con la direzione" style={{ width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    zIndex: 10,
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}>
                    Edizione Passata
                  </div>
                </div>
                <p>L'Accademia assegna annualmente prestigiose Borse di Studio per questo corso.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Le agevolazioni vengono assegnate unicamente in base a specifici requisiti, valutati dalla Direzione in sede di colloquio conoscitivo.</p>
              </motion.section>
            )}

            {/* 5. Urgenza e Scarsità */}
            <motion.section 
              className="story-section scarcity-section glass highlight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="scarcity-header">
                <AlertTriangle className="warning-icon" />
                <h2>Ammissione a Numero Chiuso</h2>
              </div>
              {course.scarcity && <p>{course.scarcity}</p>}
              <div className="payment-badge" style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-gold)' }}>
                <strong style={{ color: 'var(--text-main)' }}>💰 Pagamento Rateizzabile:</strong> Il costo del corso è altamente sostenibile grazie alla possibilità di accedere a comode dilazioni di pagamento mensili.
              </div>
              <p className="urgency-text" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Compila il form per farti richiamare dalla direzione e fissare un colloquio senza impegno.</p>
            </motion.section>

          </div>

          {/* Right Column: Desktop Form */}
          <aside className="course-sidebar desktop-only">
            <div className="sticky-sidebar">
              <LeadForm defaultCourse={course.id.charAt(0).toUpperCase() + course.id.slice(1)} />
            </div>
          </aside>
        </div>
        
        {/* Mobile Form Section (Bottom of page content) */}
        <div className="mobile-only mobile-form-wrapper">
          <LeadForm defaultCourse={course.id.charAt(0).toUpperCase() + course.id.slice(1)} />
        </div>
      </main>

      {/* SuccessStories rimossa da qui (ora è in alto) */}

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="sticky-bottom-bar mobile-only">
        <button className="btn-primary full-width animate-pulse-subtle" onClick={openModal}>
          Richiedi informazioni
        </button>
      </div>

      {/* Modal / Bottom Sheet for Form */}
      <div id="form-modal" className="modal-overlay" onClick={(e) => {
        if(e.target.id === 'form-modal') closeModal();
      }}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>&times;</button>
          <LeadForm defaultCourse={course.id.charAt(0).toUpperCase() + course.id.slice(1)} />
        </div>
      </div>

      {/* Video Popup Modal */}
      <div id="video-modal" className="video-modal-overlay" onClick={(e) => {
        if(e.target.id === 'video-modal') {
          const videoModal = document.getElementById('video-modal');
          const videoPlayer = document.getElementById('popup-video-player');
          if (videoModal) videoModal.classList.remove('active');
          if (videoPlayer) videoPlayer.pause();
        }
      }}>
        <div className="video-modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => {
            const videoModal = document.getElementById('video-modal');
            const videoPlayer = document.getElementById('popup-video-player');
            if (videoModal) videoModal.classList.remove('active');
            if (videoPlayer) videoPlayer.pause();
          }}>&times;</button>
          <video id="popup-video-player" controls autoPlay playsInline className="popup-video" />
        </div>
      </div>
    </div>
  );
}
