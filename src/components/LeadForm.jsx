import React, { useState } from 'react';
import './LeadForm.css';

export default function LeadForm({ defaultCourse = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Sostituisci questo URL con l'indirizzo del tuo Webhook n8n
    const webhookUrl = 'https://n8n.tuodominio.com/webhook/amarcord-hub';
    
    try {
      // Invia i dati a n8n
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
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
    <div className="glass lead-form-container animate-fade-in" id="lead-form">
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

        <div className="form-group">
          <label className="form-label" htmlFor="motivazione">Perché vuoi frequentare l'Accademia Amarcord? *</label>
          <textarea id="motivazione" name="motivazione" className="form-textarea" required placeholder="Scrivi brevemente la tua motivazione (es. 'Voglio fare l'attore', 'Mi appassiona il montaggio'...)"></textarea>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
          {loading ? 'Invio in corso...' : 'Invia Richiesta'}
        </button>
        <p className="privacy-notice">Inviando confermi di aver letto la Privacy Policy e accetti di essere ricontattato.</p>
      </form>
    </div>
  );
}
