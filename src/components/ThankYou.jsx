import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ExternalLink } from 'lucide-react';
import './ThankYou.css';

export default function ThankYou() {
  // Scorri in alto e spara i tracciamenti quando si carica la pagina
  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Forza l'evento Lead sul Pixel di Meta (se caricato)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    // 2. Manda l'evento a Google Tag Manager per sicurezza (nel caso usi Google Ads)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view_grazie',
      page_path: '/grazie'
    });
  }, []);

  return (
    <div className="thank-you-page">
      <motion.div 
        className="thank-you-container glass"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="icon-container">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <CheckCircle size={80} color="var(--accent-gold)" strokeWidth={1.5} />
          </motion.div>
        </div>
        
        <h1 className="thank-you-title">Richiesta Inviata con Successo!</h1>
        
        <p className="thank-you-message">
          Ottima scelta. La tua richiesta per l'Accademia Mediterranea del Cinema è stata registrata. 
          <br /><br />
          La nostra segreteria didattica ti contatterà al più presto per fornirti tutte le informazioni, i costi e il programma del corso.
        </p>

        <div className="thank-you-actions">
          <Link to="/" className="btn-secondary">
            <Home size={18} />
            Torna ai Corsi
          </Link>
          
          <a href="https://www.accademiamediterraneacinema.com/" className="btn-primary">
            Vai al Sitoweb
            <ExternalLink size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
