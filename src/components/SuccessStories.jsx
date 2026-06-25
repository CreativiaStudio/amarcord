import React from 'react';
import { motion } from 'framer-motion';
import './SuccessStories.css';

export default function SuccessStories() {
  const stories = [
    {
      name: 'Ilaria De Donato',
      course: 'Recitazione',
      text: 'Oggi nel cast della fiction Mediaset "Storia di una famiglia perbene".',
      image: '/images/Ilaria-De-Donato.jpeg'
    },
    {
      name: 'Giovanni Capuano',
      course: 'Fotografia',
      text: 'Da allievo ad Assistente Data Manager su un vero set Mediaset.',
      image: '/images/Giovanni-Capuano.jpg'
    },
    {
      name: 'Cosimo Scarpello',
      course: 'Regia',
      text: 'Premiato al Sofia Festival con il corto "Il nostro lavoro", prodotto dall\'Accademia.',
      image: '/images/Cosimo-Scarpello.jpeg'
    }
  ];

  const reviews = [
    { name: 'Michele Sciacqua', time: '11 mesi fa', text: `Ho frequentato due anni del corso di sceneggiatura all’Accademia Amarcord di Bari e, con la conclusione del Master, ho purtroppo fatto l’ultima lezione. Lascio un pezzo di cuore tra queste aule, in questo gruppo, in questa realtà che mi ha dato molto più di quanto mi aspettassi. Sono estremamente grato per tutto ciò che mi è stato trasmesso, per le esperienze che ho vissuto, per le persone che ho incontrato – sia tra gli studenti che tra i docenti – e che mi porto dentro nel percorso verso questa carriera. Amarcord non è solo una scuola. È un luogo in cui si cresce, si scrive, si sbaglia, si capisce. È un’accademia che ti segna, se le lasci spazio.` },
    { name: 'Ilaria De donato', time: '3 anni fa', text: `In Accademia ho frequentato il corso di doppiaggio e recitazione, non potevo fare scelta migliore. La serietà e la professionalità di questa Accademia fanno davvero la differenza. I docenti sono tutte persone che lavorano ancora nel mondo del cinema e nonostante questo sono presenti a tutte le lezioni (a differenza di altre Accademie dove il docente con un nome importante si presenta solo alla prima lezione). Grazie all’amarcord sto lavorando e ho realizzato il mio sogno. Se volete un consiglio, iscrivetevi! Ne vale la pena! Questa Accademia è una esperienza unica! Ringrazierò sempre Tiziana (direttrice) e Massimo (il mio maestro) vi amo❤️` },
    { name: 'Giovanni Capuano', time: '3 anni fa', text: `Mi sono iscritto all'Accademia Amarcord, frequentando il corso di Direzione della Fotografia, tenuto da Raffaele Mertes, e la Master in Regia tenuta da Stefano Reali, nel biennio 2021/2023. Questo periodo, per me, è stato di grande formazione, soprattutto a livello didattico e lavorativo. Era quello che cercavo in una prima esperienza in una Accademia di Cinema, perché mi ha permesso di dare un ordine agli studi fatti da autodidatta. Per me è stato un luogo che mi ha impartito: regole e disciplina, fondamentali in un set cinematografico, insieme ad uno studio continuo. Solo seguendo queste regole è possibile far diventare la passione per il cinema in una carriera lavorativa. Grazie a questa Accademia e ai professionisti del settore che ci lavorano, che hanno saputo trasmettere le loro conoscenze ed esperienze apprese in tanti anni di carriera, sono riuscito a lavorare in una produzione di una serie televisiva appena conseguito il diploma.` },
    { name: 'Sara Ninivaggi', time: '3 anni fa', text: `Frequento il corso di doppiaggio presso l'accademia Amarcord e posso dire che finalmente ho trovato il posto giusto! Finalmente sento di poter realizzare il sogno di diventare una doppiatrice. La serietà e la professionalità di questa accademia non ha eguali: dalla direttrice, Tiziana, al nostro docente Massimo, persone sempre presenti nonostante entrambi lavorino ancora a pieno regime nel mondo del cinema. Sto imparando molto in questo periodo, perché la dedizione, l'attenzione per i dettagli e soprattutto la voglia di insegnare del nostro maestro non permettono a nessuno di rimanere indietro. Non posso fare altro che consigliarla! 🥹❤️` },
    { name: 'Sara Fiumefreddo', time: '2 anni fa', text: `Ho frequentato nell'anno accademico 2021/2022 il corso di Sceneggiatura (interdisciplina con Regia) tenuto da Stefano Reali. È stata un'esperienza davvero intensa, che in un anno mi ha permesso di apprendere le basi della sceneggiatura cinematografica, ma non solo. Ho affinato le mie capacità di scrittura, imparando trucchi che porto con me anche in altre esperienze e ho capito come, ma soprattutto perché, si scrive una storia. Le lezioni teoriche sono di grande ispirazione per i progetti personali. La partecipazione alla realizzazione dei cortometraggi, di cui abbiamo avuto la possibilità di scrivere le sceneggiature, è un'ottima simulazione pratica di come funziona un set in questo mondo lavorativo. Il corso ha previsto anche una piccola parte di scrittura di sceneggiatura nel campo pubblicitario, curata da Alfredo Mazzara. Sono davvero felice di aver frequentato un corso come questo, in un ambiente ricco di stimoli e di persone competenti, per me è stata una delle esperienze più belle e formative.` },
    { name: 'Alessandro Cardone', time: '3 anni fa', text: `Ho frequentato il corso di montaggio video, dove oltre ad aver avuto come docenti grandi professionisti, come Ugo De Rossi, ho potuto studiare il programma di montaggio Avid: un must della post produzione professionale, di cui difficilmente si trovano corsi in Puglia o in generale nel Sud. L'umiltà e disponibilità dei docenti che ho incontrato, rende l'ambiente accademico una vera e propria seconda famiglia. Il tutto viene ulteriormente rafforzato dalle tante amicizie che ho sviluppato con gli studenti degli altri corsi Un saluto caro ai titolari dell'accademia Tiziana Lattuca e Massimo Giuliani.` },
    { name: 'Giuseppe Catalano', time: '3 anni fa', text: `Accademia gestita da esperti del mondo cinematografico e televisivo (con i quali lavorano a stretto contatto). Le lezioni sono tenute direttamente da loro, offrendo un servizio di altissima qualità e permettendo a chiunque di imparare e, un giorno, iniziare a lavorare in questo settore.` },
    { name: 'Pietro Angelo Tramacere', time: '3 anni fa', text: `Ottima accademia con ottimi maestri, sempre presenti, minuziosi e simpatici nel trasmettere i loro insegnamenti. Ho frequentato il corso di doppiaggio e attualmente sto andando avanti con la master, ed ogni singolo giorno continuo ad imparare nuove cose che mi avvicinano all'obiettivo che grazie a loro potrà diventare realtà` },
    { name: 'Ornella Vitagliano', time: '3 anni fa', text: `Ho avuto l’occasione di frequentare l’Accademia e la consiglio davvero tanto. È un ambiente professionale, accogliente e stimolante. Docenti di altissimo livello, trasmettono la loro esperienza attiva agli studenti. È da subito entrata nel mio cuore ❤️` },
    { name: 'Daniele Sanfilippo', time: '3 anni fa', text: `esperienza unica avere come insegnante un direttore di doppiaggio che in futuro potrebbe far realizzare il tuo sogno di diventare doppiatore (ovviamente dipende soprattutto dall impegno individuale)` }
  ];

  return (
    <section className="success-stories-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Il nostro unico obiettivo:<br/><span className="text-gradient">portarti sul set.</span></h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Non assumiamo teorici. I nostri docenti sono professionisti attivi nel cinema (come <strong>Stefano Reali</strong>, regista Mediaset e candidato Oscar) 
            che scelgono i propri assistenti e attori direttamente tra gli allievi più meritevoli.
          </p>
        </motion.div>

        <div className="stories-grid">
          {stories.map((story, index) => (
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
                <div className="story-course-badge">{story.course}</div>
              </div>
              <div className="story-content">
                <h4 className="story-name">{story.name}</h4>
                <p className="story-text">{story.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recensioni Google a scorrimento (Marquee) */}
        <div className="reviews-marquee-wrapper">
          <div className="reviews-marquee-track">
            {[0, 1].map((trackIdx) => (
              <div className="reviews-marquee-content" key={trackIdx} aria-hidden={trackIdx === 1}>
                {reviews.map((review, i) => (
                  <div className="google-review-card glass" key={i}>
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
                    <p className="gr-text">"{review.text}"</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
