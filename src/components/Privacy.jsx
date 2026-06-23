import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './CoursePage.css'; // Riutilizziamo gli stili di navigazione

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="course-page" style={{ paddingBottom: '4rem' }}>
      <nav className="course-nav">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Torna all'Accademia
          </Link>
        </div>
      </nav>

      <main className="container" style={{ marginTop: '6rem', maxWidth: '800px', backgroundColor: 'var(--bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
        <h1 style={{ marginBottom: '1rem' }}>Informativa sulla Privacy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Privacy del sito https://www.accademiamediterraneacinema.com, conforme al Regolamento (UE) 2016/679 (GDPR) e alle normative italiane vigenti. I dati sono basati sulle informazioni presenti nella visura camerale.
          <br /><br />
          <strong>Ultimo aggiornamento:</strong> 23 maggio 2025
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>1. Titolare del trattamento</h2>
          <p>Il Titolare del trattamento è:</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <strong>AMARCORD – ACCADEMIA MEDITERRANEA DEL CINEMA S.R.L.</strong><br />
            Sede legale: Lungomare Generale Ammiraglio Paolo Thaon di Revel, Padiglione 138 – Fiera del Levante, 70132 BARI (BA), Italia<br />
            P.IVA/C.F. 14298491003<br />
            PEC: amarcordsrl2017@legalmail.it<br />
            Responsabile: Tiziana Lattuca, Amministratrice Unica
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>2. Tipologie di dati raccolti</h2>
          <p>Il sito raccoglie i seguenti dati personali:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Dati di navigazione:</strong> indirizzi IP, nomi di dominio dei dispositivi utilizzati, URI, orario della richiesta, metodo utilizzato per sottoporre la richiesta al server, dimensione del file ottenuto in risposta, codice numerico indicante lo stato della risposta.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Dati forniti volontariamente:</strong> nome, email, numero di telefono e ogni altro dato inserito nei form di contatto o in fase di iscrizione a corsi/eventi.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Cookie e tecnologie simili:</strong> secondo quanto indicato nella Cookie Policy.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>3. Finalità del trattamento</h2>
          <p>I dati personali sono trattati per le seguenti finalità:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>Rispondere a richieste di informazioni o contatto</li>
            <li style={{ marginBottom: '0.5rem' }}>Gestione delle iscrizioni a corsi, eventi e attività didattiche e culturali</li>
            <li style={{ marginBottom: '0.5rem' }}>Invio di comunicazioni promozionali (previo consenso)</li>
            <li style={{ marginBottom: '0.5rem' }}>Adempimenti legali e fiscali</li>
            <li style={{ marginBottom: '0.5rem' }}>Sicurezza e prevenzione da abusi informatici</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>4. Base giuridica del trattamento</h2>
          <p>Il trattamento dei dati si basa su:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>esecuzione di un contratto o misure precontrattuali (art. 6, par. 1, lett. b GDPR)</li>
            <li style={{ marginBottom: '0.5rem' }}>obblighi legali (art. 6, par. 1, lett. c GDPR)</li>
            <li style={{ marginBottom: '0.5rem' }}>consenso esplicito (art. 6, par. 1, lett. a GDPR)</li>
            <li style={{ marginBottom: '0.5rem' }}>legittimo interesse (art. 6, par. 1, lett. f GDPR)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>5. Modalità del trattamento</h2>
          <p style={{ color: 'var(--text-muted)' }}>I dati saranno trattati con strumenti informatici e cartacei, in modo lecito, corretto e trasparente, limitatamente a quanto necessario per le finalità indicate.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>6. Comunicazione e trasferimento dei dati</h2>
          <p>I dati potranno essere comunicati a:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>dipendenti e collaboratori dell’azienda</li>
            <li style={{ marginBottom: '0.5rem' }}>fornitori di servizi (es. hosting, email marketing)</li>
            <li style={{ marginBottom: '0.5rem' }}>enti pubblici nei casi previsti dalla legge</li>
          </ul>
          <p style={{ color: 'var(--text-muted)' }}>Non è previsto il trasferimento dei dati personali fuori dall’Unione Europea. In caso contrario, saranno adottate le garanzie adeguate ai sensi del Capo V del GDPR.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>7. Periodo di conservazione</h2>
          <p>I dati personali saranno conservati:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>per un massimo di 10 anni per obblighi contabili/fiscali</li>
            <li style={{ marginBottom: '0.5rem' }}>per 2 anni per finalità di marketing, salvo revoca del consenso</li>
            <li style={{ marginBottom: '0.5rem' }}>fino alla richiesta di cancellazione per i dati raccolti via form</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>8. Diritti dell’interessato</h2>
          <p>L’interessato ha diritto di:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>accedere, rettificare, cancellare i propri dati (artt. 15-17 GDPR)</li>
            <li style={{ marginBottom: '0.5rem' }}>limitare o opporsi al trattamento (artt. 18-21 GDPR)</li>
            <li style={{ marginBottom: '0.5rem' }}>revocare il consenso in qualsiasi momento</li>
            <li style={{ marginBottom: '0.5rem' }}>proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>9. Sicurezza dei dati</h2>
          <p style={{ color: 'var(--text-muted)' }}>La società adotta misure tecniche e organizzative adeguate per garantire la sicurezza dei dati personali.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>10. Contatti</h2>
          <p>Per esercitare i propri diritti o ricevere informazioni sulla privacy, è possibile contattare:</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            Tiziana Lattuca – Responsabile del trattamento<br />
            Email: amarcordsrl2017@legalmail.it
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
          <Link to="/" className="btn-primary" style={{ display: 'inline-flex' }}>
            <ChevronLeft size={20} /> Torna all'Accademia
          </Link>
        </div>
      </main>
    </div>
  );
}
