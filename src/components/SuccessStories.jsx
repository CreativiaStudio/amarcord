import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './SuccessStories.css';

export default function SuccessStories({ courseId }) {
  const [selectedReview, setSelectedReview] = useState(null);
  const trackRef = useRef(null);

  // Helper per calcolare il tempo trascorso dinamicamente
  const getRelativeTime = (dateString) => {
    if (!dateString) return '';
    const diffTime = Math.abs(new Date() - new Date(dateString));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Oggi";
    if (diffDays === 1) return "1 giorno fa";
    if (diffDays < 30) return `${diffDays} giorni fa`;
    
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "1 mese fa";
    if (diffMonths < 12) return `${diffMonths} mesi fa`;
    
    const diffYears = Math.floor(diffDays / 365);
    if (diffYears === 1) return "1 anno fa";
    return `${diffYears} anni fa`;
  };

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
      text: 'Distinguendosi in aula per talento e precisione, Roberta è stata scelta direttamente dalla docente Laura Cacciapaglia per lavorare al trucco sul set del film "Stolen Moments".',
      image: 'https://www.accademiamediterraneacinema.com/wp-content/uploads/2024/05/346029902_898159524594726_5908876893979497827_n.jpg'
    },
    {
      name: 'Ilaria De Donato',
      course: 'recitazione',
      courseName: 'Recitazione',
      text: 'Scelta e segnalata alle produzioni per il talento sviluppato in Accademia, oggi fa parte del cast della fiction Mediaset "Storia di una famiglia perbene".',
      image: '/images/Ilaria-De-Donato.jpeg'
    },
    {
      name: 'Giovanni Capuano',
      course: 'fotografia',
      courseName: 'Fotografia',
      text: 'Notato dai direttori della fotografia per la sua disciplina tecnica, è stato scelto come Assistente Data Manager per lavorare su un vero set Mediaset subito dopo il diploma.',
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
    { course: 'sceneggiatura', name: 'Michele Sciacqua', date: '2025-07-15', text: `Ho frequentato due anni del corso di sceneggiatura all'Accademia Amarcord di Bari e, con la conclusione del Master, ho purtroppo fatto l'ultima lezione. Lascio un pezzo di cuore tra queste aule, in questo gruppo, in questa realtà che mi ha dato molto più di quanto mi aspettassi. Sono estremamente grato per tutto ciò che mi è stato trasmesso, per le esperienze che ho vissuto, per le persone che ho incontrato - sia tra gli studenti che tra i docenti - e che mi porto dentro nel percorso verso questa carriera. Amarcord non è solo una scuola. È un luogo in cui si cresce, si scrive, si sbaglia, si capisce. È un'accademia che ti segna, se le lasci spazio.` },
    { course: 'sceneggiatura', name: 'Sara Fiumefreddo', date: '2024-06-15', text: `Ho frequentato nell'anno accademico 2021/2022 il corso di Sceneggiatura (interdisciplina con Regia) tenuto da Stefano Reali. È stata un'esperienza davvero intensa, che in un anno mi ha permesso di apprendere le basi della sceneggiatura cinematografica, ma non solo. Ho affinato le mie capacità di scrittura, imparando trucchi che porto con me anche in altre esperienze e ho capito come, ma soprattutto perché, si scrive una storia. Le lezioni teoriche sono di grande ispirazione per i progetti personali. La partecipazione alla realizzazione dei cortometraggi, di cui abbiamo avuto la possibilità di scrivere le sceneggiature, è un'ottima simulazione pratica di come funziona un set in questo mondo lavorativo. Il corso ha previsto anche una piccola parte di scrittura di sceneggiatura nel campo pubblicitario, curata da Alfredo Mazzara. Sono davvero felice di aver frequentato un corso come questo, in un ambiente ricco di stimoli e di persone competenti, per me è stata una delle esperienze più belle e formative.` },
    { course: 'recitazione', name: 'Ilaria De donato', date: '2023-06-15', text: `In Accademia ho frequentato il corso di doppiaggio e recitazione, non potevo fare scelta migliore.\nLa serietà e la professionalità di questa Accademia fanno davvero la differenza.\nI docenti sono tutte persone che lavorano ancora nel mondo del cinema e nonostante questo sono presenti a tutte le lezioni (a differenza di altre Accademie dove il docente con un nome importante si presenta solo alla prima lezione).\nGrazie all'amarcord sto lavorando e ho realizzato il mio sogno.\nSe volete un consiglio, iscrivetevi! Ne vale la pena!\nQuesta Accademia è una esperienza unica!\nRingrazierò sempre Tiziana (direttrice) e Massimo (il mio maestro) vi amo❤️` },
    { course: 'doppiaggio', name: 'Sara Ninivaggi', date: '2023-06-15', text: `Frequento il corso di doppiaggio presso l'accademia Amarcord e posso dire che finalmente ho trovato il posto giusto! Finalmente sento di poter realizzare il sogno di diventare una doppiatrice. La serietà e la professionalità di questa accademia non ha eguali: dalla direttrice, Tiziana, al nostro docente Massimo, persone sempre presenti nonostante entrambi lavorino ancora a pieno regime nel mondo del cinema. Sto imparando molto in questo periodo, perché la dedizione, l'attenzione per i dettagli e soprattutto la voglia di insegnare del nostro maestro non permettono a nessuno di rimanere indietro. Non posso fare altro che consigliarla! ❤️` },
    { course: 'fotografia', name: 'Giovanni Capuano', date: '2023-06-15', text: `Mi sono iscritto all'Accademia Amarcord, frequentando il corso di Direzione della Fotografia, tenuto da Raffaele Mertes, e la Master in Regia tenuta da Stefano Reali, nel biennio 2021/2023. Questo periodo, per me, è stato di grande formazione, soprattutto a livello didattico e lavorativo. Era quello che cercavo in una prima esperienza in una Accademia di Cinema, perché mi ha permesso di dare un ordine agli studi fatti da autodidatta. Per me è stato un luogo che mi ha impartito: regole e disciplina, fondamentali in un set cinematografico, insieme ad uno studio continuo. Solo seguendo queste regole è possibile far diventare la passione per il cinema in una carriera lavorativa. Grazie a questa Accademia e ai professionisti del settore che ci lavorano, che hanno saputo trasmettere le loro conoscenze ed esperienze apprese in tanti anni di carriera, sono riuscito a lavorare in una produzione di una serie televisiva appena conseguito il diploma.` },
    { course: 'fotografia', name: 'Giuseppe Catalano', date: '2023-06-15', text: `Accademia gestita da esperti del mondo cinematografico e televisivo (con i quali lavorano a stretto contatto). Le lezioni sono tenute direttamente da loro, offrendo un servizio di altissima qualità e permettendo a chiunque di imparare e, un giorno, iniziare a lavorare in questo settore.` },
    { course: 'regia', name: 'Ornella Vitagliano', date: '2023-06-15', text: `Ho avuto l'occasione di frequentare l'Accademia e la consiglio davvero tanto. È un ambiente professionale, accogliente e stimolante. Docenti di altissimo livello, trasmettono la loro esperienza attiva agli studenti. È da subito entrata nel mio cuore ❤️` },
    { course: 'montaggio', name: 'Alessandro Cardone', date: '2023-06-15', text: `Ho frequentato il corso di montaggio video, dove oltre ad aver avuto come docenti grandi professionisti, come Ugo De Rossi, ho potuto studiare il programma di montaggio Avid: un must della post produzione professionale, di cui difficilmente si trovano corsi in Puglia o in generale nel Sud. L'umiltà e disponibilità dei docenti che ho incontrato, rende l'ambiente accademico una vera e propria seconda famiglia. Il tutto viene ulteriormente rafforzato dalle tante amicizie che ho sviluppato con gli studenti degli altri corsi Un saluto caro ai titolari dell'accademia Tiziana Lattuca e Massimo Giuliani.` },
    { course: 'doppiaggio', name: 'Pietro Angelo Tramacere', date: '2023-06-15', text: `Ottima accademia con ottimi maestri, sempre presenti, minuziosi e simpatici nel trasmettere i loro insegnamenti. Ho frequentato il corso di doppiaggio e attualmente sto andando avanti con la master, ed ogni singolo giorno continuo ad imparare nuove cose che mi avvicinano all'obiettivo che grazie a loro potrò diventare realtà` },
    { course: 'doppiaggio', name: 'Daniele Sanfilippo', date: '2023-06-15', text: `esperienza unica avere come insegnante un direttore di doppiaggio che in futuro potrebbe far realizzare il tuo sogno di diventare doppiatore (ovviamente dipende soprattutto dall impegno individuale)` },
    { course: 'recitazione', name: 'Angelica Milillo', date: '2026-06-21', text: `Ho frequentato questa accademia per tre anni seguendo il corso di recitazione tenuto da Massimo Giuliani, un grande professionista, insegnante e mentore.\nMi ha aiutato a capire i miei punti di forza e ad individuare gli aspetti su cui lavorare, mi ha fornito sempre consigli validi e sinceri, spronandomi a fare sempre meglio e avvicinandomi sempre più alla professionista che voglio diventare.\nInoltre, il corso mi ha permesso di avere a che fare con gli altri settori del cinema quali sceneggiatura, trucco scenico, fotografia e soprattutto regia, grazie alle numerose esercitazioni e collaborazioni tra le classi che hanno contribuito ad accrescere la mia consapevolezza su cosa voglia dire lavorare nell'industria.\nHo imparato tanto da tutti gli insegnanti con cui ho avuto a che fare.\nInfine, non potrò mai dimenticare il clima creativo e i rapporti che ho stretto con persone che hanno i miei stessi sogni e passioni.\nMi porterò il tempo passato tra quelle mura sempre nel cuore.` },
    { course: 'fotografia', name: 'ARIANNA MARCHITTO', date: '2026-06-22', text: `Sono una ex studentessa di Amarcord. Ho frequentato 2 anni.\nSinceramente mi sono sembrati tutti seri e molto professionali. Molto attenti anche sul set.\nGrazie Mertes!!` },
    { course: 'recitazione', name: 'Cosimo Castiello', date: '2026-06-22', text: `Frequentare questa accademia è stata una delle scelte migliori che potessi fare. Qui non si tratta solo di imparare a recitare, ma di fare un vero e proprio percorso su se stessi. In questi 3 anni ho lavorato con Massimo, un insegnante estremamente preparato e soprattutto sincero: mi ha aiutato a togliere il superfluo, a essere più vero, a trovare una recitazione pulita e credibile.\nHo notato miglioramenti concreti già dopo poco tempo, sia a livello tecnico che personale. L'ambiente è stimolante, mai giudicante, e ti spinge sempre a dare di più. Ogni lezione è un passo avanti.\nConsigliatissima a chi vuole fare questo mestiere sul serio e non perdere tempo.` },
    { course: 'generico', name: 'Stefano Cirullo', date: '2026-06-23', text: `Ho scelto questa accademia per mia nipote e l'ho iscritta all' inizio di questo mese. È composta da grandi professionisti del cinema. Lei li segue sui loro social dallo scorso anno ed è entusiasta... Non vede l'ora di iniziare!😊` }
  ];

  // Filtra le storie e le recensioni in base al corso attuale
  let filteredStories = courseId ? allStories.filter(s => s.course === courseId) : allStories.slice(1, 4);
  let filteredReviews = courseId ? allReviews.filter(r => r.course === courseId) : allReviews;
  
  // Se non ci sono abbastanza storie specifiche, fall back a quelle generiche per non lasciare il layout vuoto
  if (filteredStories.length === 0) filteredStories = allStories.slice(1, 4);
  // Aggiungiamo sempre anche le altre recensioni (quelle non di questo corso) per fare massa e avere sempre un carosello pieno, mettendo prima quelle del corso.
  filteredReviews = [...filteredReviews, ...allReviews.filter(r => r.course !== courseId)];

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
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} className="gr-avatar-img" />
                    ) : (
                      <div className="gr-avatar">{review.name.charAt(0)}</div>
                    )}
                    <div>
                      <h5 className="gr-author-name">{review.name}</h5>
                      <div className="gr-stars">
                        ★★★★★ <span className="gr-time">{getRelativeTime(review.date)}</span>
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
                  {selectedReview.avatar ? (
                    <img src={selectedReview.avatar} alt={selectedReview.name} className="gr-avatar-img" />
                  ) : (
                    <div className="gr-avatar">{selectedReview.name.charAt(0)}</div>
                  )}
                  <div>
                    <h5 className="gr-author-name">{selectedReview.name}</h5>
                    <div className="gr-stars">
                      ★★★★★ <span className="gr-time">{getRelativeTime(selectedReview.date)}</span>
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

