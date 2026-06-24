import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initGTM } from '../utils/gtm';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const GTM_ID = 'GTM-TC4B8SWP';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già fatto una scelta
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent === 'true') {
      // Se aveva già accettato, inietta GTM in background senza mostrare il banner
      initGTM(GTM_ID);
    } else if (consent === null) {
      // Se non ha mai fatto una scelta, mostra il banner
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    initGTM(GTM_ID);
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="cookie-banner-wrapper"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="cookie-banner glass">
            <div className="cookie-content">
              <h4>Rispettiamo la tua privacy</h4>
              <p>
                Utilizziamo i cookie per offrirti l'esperienza migliore sul nostro sito web, per analizzare il traffico e personalizzare i contenuti. 
                Scegliendo "Accetta", acconsenti all'uso dei cookie. Puoi leggere la nostra <Link to="/privacy">Privacy Policy</Link> per maggiori dettagli.
              </p>
            </div>
            <div className="cookie-actions">
              <button onClick={handleReject} className="btn-secondary cookie-btn-reject">Solo necessari</button>
              <button onClick={handleAccept} className="btn-primary cookie-btn-accept">Accetta tutto</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
