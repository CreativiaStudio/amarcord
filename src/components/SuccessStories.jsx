import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './SuccessStories.css';

export default function SuccessStories({ courseId }) {
  const [selectedReview, setSelectedReview] = useState(null);
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const allStories = [
    {
      name: 'Roberta Diana',
      course: 'trucco',
      courseName: 'Trucco Cinematografico',
      text: 'Dopo aver frequentato il corso di trucco cinematografico nella nostra Accademia, Roberta ha spiccato il volo lavorando sul set di "Stolen Moments".',
      image: 'https://www.accademiamediterraneacinema.com/wp-content/uploads/2024/05/346029902_898159524594726_5908876893979497827_n.jpg'
    },
    {
      name: 'Ilaria De Donato',
      course: 'recitazione',
      courseName: 'Recitazione',
      text: 'Oggi nel cast della fiction Mediaset "Storia di una famiglia perbene".',
      image: '/images/Ilaria-De-Donato.jpeg'
    },
    {
      name: 'Giovanni Capuano',
      course: 'fotografia',
      courseName: 'Fotografia',
      text: 'Da allievo ad Assistente Data Manager su un vero set Mediaset.',
      image: '/images/Giovanni-Capuano.jpg'
    },
    {
      name: 'Cosimo Scarpello',
      course: 'regia',
      courseName: 'Regia',
      text: 'Premiato al Sofia Festival con il corto "Il nostro lavoro", prodotto dall\'Accademia.',
      image: '/images/Cosimo-Scarpello.jpeg'
    },
    {
      name: 'Sara Fiumefreddo',
      course: 'sceneggiatura',
      courseName: 'Sceneggiatura',
      text: 'I suoi cortometraggi sono stati scelti per essere prodotti e girati dal corso di Regia.',
      image: '/images/2026_03_sceneggiatura-Amarcord-1.jpeg'
    },
    {
      name: 'Sara Ninivaggi',
      course: 'doppiaggio',
      courseName: 'Doppiaggio',
      text: 'Ha prestato la voce ai cortometraggi finali dell\'Accademia e continua la sua carriera al leggio.',
      image: '/images/2024_04_Corso-di-Doppiaggio-1.jpg'
    },
    {
      name: 'Alessandro Cardone',
      course: 'montaggio',
      courseName: 'Montaggio',
      text: 'Lavora in post-produzione grazie all\'apprendimento pratico di Avid Media Composer in aula.',
      image: '/images/Montaggio-Amarcord-2.jpeg'
    }
  ];

  const allReviews = [
    { course: 'sceneggiatura', name: 'Michele Sciacqua', time: '11 mesi fa', text: `Ho frequentato due anni del corso di sceneggiatura... Lascio un pezzo di cuore tra queste aule. Non è solo una scuola, è un luogo in cui si cresce e si scrive.` },
    { course: 'sceneggiatura', name: 'Sara Fiumefreddo', time: '2 anni fa', text: `Corso di Sceneggiatura tenuto da Stefano Reali. È stata un'esperienza davvero intensa... Le lezioni teoriche sono di grande ispirazione per i progetti personali.` },
    { course: 'recitazione', name: 'Ilaria De donato', time: '3 anni fa', text: `In Accademia ho frequentato il corso di doppiaggio e recitazione, non potevo fare scelta migliore. La serietà fa la differenza.` },
    { course: 'doppiaggio', name: 'Sara Ninivaggi', time: '3 anni fa', text: `Frequento il corso di doppiaggio e posso dire che finalmente ho trovato il posto giusto! Finalmente sento di poter realizzare il sogno di diventare una doppiatrice.` },
    { course: 'fotografia', name: 'Giovanni Capuano', time: '3 anni fa', text: `Corso di Direzione della Fotografia tenuto da Raffaele Mertes... mi ha permesso di dare un ordine agli studi fatti da autodidatta. Grazie a loro sono riuscito a lavorare in una serie televisiva.` },
    { course: 'fotografia', name: 'Giuseppe Catalano', time: '3 anni fa', text: `Accademia gestita da esperti del mondo cinematografico e televisivo. Le lezioni sono tenute direttamente da loro, offrendo un servizio di altissima qualità.` },
    { course: 'regia', name: 'Ornella Vitagliano', time: '3 anni fa', text: `Ho avuto l’occasione di frequentare l’Accademia e la consiglio davvero tanto. Docenti di altissimo livello, trasmettono la loro esperienza attiva agli studenti.` },
    { course: 'montaggio', name: 'Alessandro Cardone', time: '3 anni fa', text: `Ho frequentato il corso di montaggio video... ho potuto studiare il programma Avid. Un must della post produzione professionale.` },
    { course: 'doppiaggio', name: 'Pietro Angelo Tramacere', time: '3 anni fa', text: `Ottima accademia con ottimi maestri, sempre presenti. Ho frequentato il corso di doppiaggio e ogni giorno continuo ad imparare nuove cose.` }
  ];

  // Filtra le storie e le recensioni in base al corso attuale
  let filteredStories = courseId ? allStories.filter(s => s.course === courseId) : allStories.slice(1, 4);
  let filteredReviews = courseId ? allReviews.filter(r => r.course === courseId) : allReviews;
  
  // Se non ci sono abbastanza storie specifiche, fall back a quelle generiche per non lasciare il layout vuoto
  if (filteredStories.length === 0) filteredStories = allStories.slice(1, 4);
  if (filteredReviews.length < 2) filteredReviews = [...filteredReviews, ...allReviews.filter(r => r.course !== courseId).slice(0, 3)];

  const extendedReviews = [...filteredReviews, ...filteredReviews, ...filteredReviews];

  return (
    <section className={`success-stories-section ${courseId ? 'course-specific-stories' : 'section-padding'}`}>
      <div className={courseId ? '' : 'container'}>
        <motion.div 
          className="story-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <div className="section-header-left">
            <Star className="section-icon" style={{ color: 'var(--accent-gold)' }} />
            <h2>Dall'aula al set</h2>
          </div>
          <p className="section-subtitle">
            Non assumiamo teorici. I nostri docenti sono professionisti attivi che scelgono i propri assistenti direttamente tra gli allievi più meritevoli.
          </p>
        </motion.div>

        <div className={`stories-grid ${filteredStories.length === 1 ? 'single-story' : ''}`}>
          {filteredStories.map((story, index) => (
            <motion.div 
              key={index}
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="story-image-wrapper">
                <img src={story.image} alt={story.name} className="story-image" />
                <div className="story-course-badge">{story.courseName}</div>
              </div>
              <div className="story-content">
                <h4 className="story-name">{story.name}</h4>
                <p className="story-text">{story.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recensioni Google - Manual Scroll con Frecce */}
        <div 
          className="reviews-carousel-container"
          style={courseId ? { width: '100%', marginLeft: 0, marginRight: 0 } : {}}
        >
          <div className="reviews-carousel-wrapper">
            <div className="reviews-carousel-track" ref={trackRef}>
            {filteredReviews.map((review, i) => (
              <div 
                className="google-review-card white-card" 
                key={i} 
                onClick={() => setSelectedReview(review)}
                role="button"
                tabIndex={0}
              >
                <div className="gr-header">
                  <div className="gr-author-info">
                    <div className="gr-avatar">{review.name.charAt(0)}</div>
                    <div>
                      <h5 className="gr-author-name">{review.name}</h5>
                      <div className="gr-stars">
                        ★★★★★ <span className="gr-time">{review.time}</span>
                      </div>
                    </div>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="gr-logo">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="gr-text-wrapper">
                  <p className="gr-text">"{review.text}"</p>
                </div>
                <div className="gr-read-more">Leggi tutto</div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="reviews-navigation">
          <button className="review-nav-btn" onClick={scrollLeft} aria-label="Scorri a sinistra">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="review-nav-btn" onClick={scrollRight} aria-label="Scorri a destra">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Modal Recensione Completa */}
        {selectedReview && (
          <div className="review-modal-overlay" onClick={() => setSelectedReview(null)}>
            <div className="review-modal-content glass" onClick={e => e.stopPropagation()}>
              <button className="review-modal-close" onClick={() => setSelectedReview(null)}>&times;</button>
              <div className="gr-header" style={{ marginBottom: '1.5rem' }}>
                <div className="gr-author-info">
                  <div className="gr-avatar">{selectedReview.name.charAt(0)}</div>
                  <div>
                    <h5 className="gr-author-name">{selectedReview.name}</h5>
                    <div className="gr-stars">
                      ★★★★★ <span className="gr-time">{selectedReview.time}</span>
                    </div>
                  </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="gr-logo">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="gr-text full-text">"{selectedReview.text}"</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

