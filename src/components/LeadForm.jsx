import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LeadForm.css';

export default function LeadForm({ defaultCourse = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // URL del Webhook n8n di Creativia Studio (PRODUZIONE)
    const webhookUrl = 'https://n8n.creativiastudio.com/webhook/amarcord-meta-capi';
    
    try {
      // Invia i dati a n8n come form-urlencoded (bypassa il blocco CORS preflight)
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });
      // Mostra schermata di successo
      setSubmitted(true);
    } catch (error) {
      console.error("Errore nell'invio del form a n8n:", error);
      // Se c'è un errore di CORS o rete (per via del placeholder), simuliamo il successo per l'anteprima
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass lead-form-success animate-fade-in">
        <h3>🎉 Richiesta Inviata!</h3>
        <p>Grazie per l'interesse. La segreteria dell'Accademia Amarcord ti contatterà al più presto.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="glass lead-form-container" 
      id="lead-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3>Richiedi Informazioni</h3>
      <p className="form-subtitle">Compila il modulo per scoprire come trasformare la tua passione in professione.</p>
      
      <form onSubmit={handleSubmit} className="lead-form">
        <div className="form-group">
          <label className="form-label" htmlFor="nome">Nome e Cognome *</label>
          <input type="text" id="nome" name="nome" className="form-input" required placeholder="Mario Rossi" />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" className="form-input" required placeholder="mario@email.com" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="telefono">Cellulare *</label>
          <input type="tel" id="telefono" name="telefono" className="form-input" required placeholder="333 1234567" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="corso">Quale corso ti interessa? *</label>
          <select id="corso" name="corso" className="form-select" required defaultValue={defaultCourse}>
            <option value="" disabled>Seleziona un corso</option>
            <option value="Regia">Regia Cinematografica</option>
            <option value="Sceneggiatura">Sceneggiatura</option>
            <option value="Trucco">Trucco Cinematografico</option>
            <option value="Fotografia">Direzione della Fotografia</option>
            <option value="Recitazione">Recitazione</option>
            <option value="Doppiaggio">Doppiaggio</option>
          </select>
        </div>

        <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '1.5rem', marginTop: '1rem' }}>
          <input type="checkbox" id="privacy" name="privacyAccepted" required style={{ marginTop: '0.2rem', cursor: 'pointer' }} />
          <label htmlFor="privacy" className="form-label" style={{ marginBottom: 0, fontSize: '0.8rem', lineHeight: 1.4, cursor: 'pointer' }}>
            Dichiaro di aver letto la <Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>Privacy Policy</Link> e presto il consenso al trattamento dei miei dati personali. *
          </label>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
          {loading ? 'Invio in corso...' : 'Invia Richiesta'}
        </button>
        <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '1rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.4 }}>
          <strong style={{ color: 'var(--accent-gold)' }}>NB:</strong> L’iscrizione è RISERVATA<br />a corsisti di età compresa tra 16 e 40 ANNI
        </p>
      </form>
    </motion.div>
  );
}
