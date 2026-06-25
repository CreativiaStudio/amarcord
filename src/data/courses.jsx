import React from 'react';

const iconStyle = {
  width: '36px',
  height: '36px',
  objectFit: 'contain',
  filter: 'invert(72%) sepia(85%) saturate(1477%) hue-rotate(1deg) brightness(105%) contrast(106%)'
};

export const coursesData = {
  regia: {
    id: 'regia',
    title: 'Regia Cinematografica',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-18.png" alt="Icona Regia" style={iconStyle} />,
    heroImage: '/images/2024_04_Corso-di-regia-1.jpg',
    heroImageMobile: '/images/Corso-di-regia-hero-mobile.jpg',
    heroPosition: 'center 75%',
    heroPositionMobile: 'top center',
    description: (
      <>
        <p style={{ marginBottom: '1rem' }}>Il regista è l'occhio del pubblico, il vero direttore d'orchestra della macchina del cinema. In questo corso imparerai il mestiere unendo lo studio accademico alla <strong>pratica diretta sul set</strong>.</p>
        <p>Imparerai a tradurre un'idea in immagini potenti, a decodificare una sceneggiatura, a guidare emotivamente gli attori e a coordinare l'intera troupe. Dalla delicata fase di pre-produzione fino al montaggio finale, sarai tu a prendere le decisioni cruciali prima di gridare: <em>"Motore, Ciak, Azione!"</em>.</p>
      </>
    ),
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "Confronto e sviluppo con la sceneggiatura", desc: "Il regista è un interprete. Saper leggere e decodificare una sceneggiatura è la base. Imparerai ad interagire con lo sceneggiatore per trasformare un testo in film." },
      { title: "Teoria dell’inquadratura e messa in scena", desc: "Dalla composizione dell’immagine alla sua realizzazione nello spazio. Impara a gestire lo spazio, la telecamera e le dinamiche sceniche rispetto ad un obiettivo mirato di racconto." },
      { title: "Lavoro attoriale", desc: "La regia non è solo 'fare inquadrature'. È soprattutto cura per l’attore. Tecniche di approccio e gestione del ruolo attoriale nella messa in scena." },
      { title: "Realizzazione Pratica sul Set", desc: "Ogni sabato per 5 mesi sarai sul set a curare inquadrature, gestione dello spazio e messa in scena sotto la guida dei docenti per realizzare un vero cortometraggio." }
    ],
    teachers: ["Stefano Reali", "Alfredo Mazzara"],
    teachersBio: (
      <>
        Studierai con <strong>Stefano Reali</strong>, candidato al Premio Oscar® e creatore di colossali successi televisivi italiani (<em>Ultimo</em>), e con <strong>Alfredo Mazzara</strong>, pluripremiato sceneggiatore internazionale (<em>Havana Kyrie</em>). Lavorerai fianco a fianco con veri giganti dell'audiovisivo.
      </>
    ),
    shortDesc: "Dirigi il tuo film e capisci chi sta davanti alla macchina da presa.",
    careers: ["Regista Cinematografico", "Aiuto Regista", "Regista Pubblicitario / Videoclip", "Segretario di Edizione"],
    scarcity: "Max 12 allievi. Bonus: i migliori cortometraggi di fine anno verranno inviati a festival nazionali ed internazionali.",
    hasScholarship: true,
    setSubtitle: "Dimentica i banchi di scuola. Qui si impara dirigendo veri attori, muovendo le macchine da presa e respirando la polvere dei set accademici.",
    popupVideo: "https://pub-596f32c0181d45378b2fcc7e714e164c.r2.dev/regia-backstage.mp4",
    gallery: [
      "/images/2024_04_309386559_489299486543329_3459529010142985668_n.jpg",
      "/images/2024_04_309100609_489299503209994_2271440024644496748_n.jpg",
      "/images/2024_04_Corso-di-regia-2.jpg",
      "/images/2024_04_Corso-di-regia-1.jpg"
    ]
  },
  trucco: {
    id: 'trucco',
    title: 'Trucco Cinematografico e Make-up Artist',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-14.png" alt="Icona Trucco" style={iconStyle} />,
    heroImage: '/images/2026_03_Trucco-Amarcord-3.jpeg',
    heroPosition: 'center calc(50% + 50px)',
    description: (
      <>
        <p style={{ marginBottom: '1rem' }}>Il volto dell'attore è la tua tela, ma il trucco cinematografico non è semplice estetica: è <strong>narrazione visiva pura</strong>.</p>
        <p>Lavorerai costantemente sotto pressione nei nostri set accademici, imparando a creare make-up correttivi invisibili e perfetti per l'alta definizione del grande schermo. Padroneggerai inoltre l'arte degli <strong>effetti speciali protesici (SFX)</strong>: imparerai a simulare ferite realistiche, cicatrici, bruciature e creature mostruose, per trasformare la materia e la percezione visiva.</p>
      </>
    ),
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "Introduzione e Trucco Base", desc: "Studio del volto, volumi, Contouring & Highlighting. Scelta del fondotinta, correzione sopracciglia e trucco occhi." },
      { title: "Trucco Moda e Glamour", desc: "Nude look, Glamour look e Catwalk look. Editorial make up. Applicazione ciglia finte." },
      { title: "Trucco Cinematografico e Teatrale", desc: "Beauty cinematografico. Studio delle epoche storiche e riproduzione degli stili." },
      { title: "Effetti Speciali e Invecchiamento (SFX)", desc: "Invecchiamento. Facepainting. Studio delle tecniche SFX: ferite, tagli, bruciature, cicatrici, sangue finto. Applicazione barbe." }
    ],
    teachers: ["Laura Cacciapaglia"],
    teachersBio: (
      <>
        Il corso è tenuto da <strong>Laura Cacciapaglia</strong>, stimata make-up artist del cinema italiano con una lunghissima esperienza su set cinematografici di grande rilievo (<em>Profeti</em>, <em>Non c'è campo</em>). Apprenderai i segreti del mestiere da una professionista in piena attività.
      </>
    ),
    shortDesc: "Dal beauty look agli effetti speciali (SFX) per il cinema.",
    careers: ["Truccatore Cinematografico", "Specialista SFX", "Truccatore Teatrale e TV", "Make-up Artist Moda"],
    scarcity: "Max 10 allievi. Bonus: le migliori allieve verranno selezionate per curare il trucco e gli effetti speciali sui veri set dei cortometraggi di fine anno.",
    hasScholarship: false,
    setSubtitle: "Lavorerai sotto pressione nei set accademici, curando il beauty e testando ferite ed effetti speciali (SFX) prima del ciak.",
    popupVideo: "https://pub-596f32c0181d45378b2fcc7e714e164c.r2.dev/trucco-backstage.mp4",
    gallery: [
      "/images/2026_03_Trucco-Amarcord-2.jpeg",
      "/images/2026_03_Trucco-Amarcord.jpeg",
      "/images/2026_03_Trucco-Amarcord-4.jpeg",
      "/trucco-poster.jpg"
    ]
  },
  sceneggiatura: {
    id: 'sceneggiatura',
    title: 'Sceneggiatura',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-15.png" alt="Icona Sceneggiatura" style={iconStyle} />,
    heroImage: '/images/2024_04_Corso-di-sceneggiatura-1.jpg',
    heroImageMobile: '/images/Corso-di-sceneggiatura-2-mobile.jpg',
    heroPosition: 'center 60%',
    heroPositionMobile: 'top center',
    description: (
      <>
        <p style={{ marginBottom: '1rem' }}>Ogni grande capolavoro del cinema, prima di essere girato, è stato soltanto una grande pagina bianca. In questo corso apprenderai l'architettura invisibile che tiene incollato lo spettatore allo schermo: la struttura in tre atti, lo sviluppo psicologico del personaggio e la formattazione professionale.</p>
        <p><strong>Nessun testo resterà nel cassetto</strong>: i primi 5 mesi si svolgono in totale interdisciplina con il corso di Regia. Vedrai le tue parole tradotte immediatamente in azioni fisiche, e le scene migliori scritte in aula prenderanno vita diventando i cortometraggi di fine anno.</p>
      </>
    ),
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "Basi e Struttura in tre atti", desc: "Le basi della narrazione audiovisiva, la struttura in tre atti e le varianti moderne." },
      { title: "Costruzione del personaggio", desc: "Il conflitto, il desiderio, la trasformazione e lo sviluppo dell'arco narrativo del protagonista." },
      { title: "Il Soggetto", desc: "Sviluppo di un soggetto personale per lungometraggio concepito secondo le moderne tecniche di esposizione e promozione (mercato)." },
      { title: "La Sceneggiatura", desc: "Elaborazione di una sceneggiatura per cortometraggio in formato americano (dialoghi, descrizioni, formattazione corretta)." }
    ],
    teachers: ["Stefano Reali", "Alfredo Mazzara"],
    teachersBio: (
      <>
        Studierai con <strong>Stefano Reali</strong>, candidato al Premio Oscar® e creatore di colossali successi televisivi italiani (<em>Ultimo</em>), e con <strong>Alfredo Mazzara</strong>, pluripremiato sceneggiatore internazionale (<em>Havana Kyrie</em>). Lavorerai fianco a fianco con veri giganti dell'audiovisivo.
      </>
    ),
    shortDesc: "Le tecniche di scrittura creativa per strutturare storie avvincenti.",
    careers: ["Sceneggiatore Cinema/TV", "Soggettista", "Story Editor", "Copywriter Audiovisivo"],
    scarcity: "Max 15 allievi. Bonus: i lavori migliori e i cortometraggi finali verranno effettivamente prodotti e girati dal corso di Regia.",
    hasScholarship: true,
    setSubtitle: "Nessun testo resterà nel cassetto: le pagine migliori scritte in aula prenderanno fisicamente vita durante i cortometraggi di fine anno.",
    gallery: [
      "/images/2024_04_Corso-di-sceneggiatura-3-upscale.jpg",
      "/images/2026_03_sceneggiatura-Amarcord-1.jpeg",
      "/images/2024_04_Corso-di-sceneggiatura-1.jpg",
      "/images/2024_04_Corso-di-sceneggiatura-2.jpg"
    ]
  },
  fotografia: {
    id: 'fotografia',
    title: 'Direzione della Fotografia e Operatore MdP',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-12.png" alt="Icona Fotografia" style={iconStyle} />,
    heroImage: '/fotografia-hero-upscale.png',
    description: (
      <>
        <p style={{ marginBottom: '1rem' }}>Al cinema, l'immagine è tutto. La luce è l'inchiostro con cui scriviamo le emozioni. Non siamo qui per farti usare una semplice reflex. Metterai le mani sulle <strong>vere macchine da presa cinematografiche</strong> utilizzate nelle grandi produzioni (ARRI, RED, Sony) e su parchi lampade professionali.</p>
        <p>Imparerai a scolpire i volti con l'illuminazione, a calibrare l'esposizione, a padroneggiare i movimenti di macchina e a gestire il delicatissimo lavoro del <em>Focus Puller</em>. Diventerai il vero braccio destro del regista, trasformando le sue visioni in cinema.</p>
      </>
    ),
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "La Visione e La Luce", desc: "Storia e Stili della cinematografia. Sistemi illuminanti, proiettori, l'uso del colore, dominanti e cura dell'illuminazione specifica per gli attori." },
      { title: "Mezzi Tecnici e Formati", desc: "Pratica sull'uso della macchina da presa. Ottiche, lenti, fuoco, profondità di campo e il lavoro vitale del Focus Puller (Assistente Operatore)." },
      { title: "Movimenti di Macchina", desc: "Dinamica del carrello, Dolly, Steadicam, Droni e attrezzature moderne da set." },
      { title: "Inquadratura e Racconto", desc: "Composizione visiva, il piano sequenza, totali e controcampi con conseguente gestione autonoma delle luci sul set." }
    ],
    teachers: ["Raffaele Mertes", "Giuseppe Maldera"],
    teachersBio: (
      <>
        Verrai formato da <strong>Raffaele Mertes</strong>, vincitore di un <em>Primetime Emmy Award</em> e leggenda della fotografia italiana, e da <strong>Giuseppe Maldera</strong>, direttore della fotografia di estrema affidabilità internazionale. Il massimo dell'eccellenza che puoi trovare su un set.
      </>
    ),
    shortDesc: "Padroneggia la luce e l'uso delle macchine da presa professionali.",
    careers: ["Direttore della Fotografia (DOP)", "Operatore di Macchina", "Assistente Operatore (Focus Puller)", "DIT / Elettricista"],
    scarcity: "Max 10 allievi. Bonus: gli studenti più capaci lavoreranno come operatori e assistenti alla fotografia nei veri cortometraggi finali dell'Accademia.",
    hasScholarship: true,
    setSubtitle: "Domina la luce, calibra l'esposizione e posiziona le luci sui set accademici imparando sul campo i segreti del direttore della fotografia.",
    gallery: [
      "/fotografia-hero-upscale.png",
      "/images/2026_03_CORSO-DI-DIREZIONE-DELLA-FOTOGRAFIA-E-OPERATORE-MDP-2.jpeg",
      "/images/2026_03_CORSO-DI-DIREZIONE-DELLA-FOTOGRAFIA-E-OPERATORE-MDP-3.jpeg",
      "/images/2026_04_Corso-di-Fotografia2.jpeg"
    ]
  },
  recitazione: {
    id: 'recitazione',
    title: 'Recitazione Cinematografica',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-19.png" alt="Icona Recitazione" style={iconStyle} />,
    heroImage: '/images/2026_03_Amarcord-recitazione-7.jpeg',
    description: (
      <>
        <p style={{ marginBottom: '1rem' }}>Recitare per il cinema non è fingere, è vivere autenticamente davanti alla macchina da presa. È l'arte della sottrazione. Studierai a fondo il Metodo Stanislavskij-Strasberg e la tecnica di <strong>Acting for Camera</strong>.</p>
        <p>Non reciterai mai al vuoto: lavorerai costantemente misurandoti con i registi e le vere troupe della scuola, abbattendo la paura del ciak. Svilupperai una totale consapevolezza del tuo corpo e della tua micro-mimica facciale, capendo finalmente come affrontare e vincere un vero provino professionale.</p>
      </>
    ),
    duration: "10 mesi (Ottobre - Luglio)",
    frequency: "Ogni Sabato",
    modules: [
      { title: "Metodi e Approcci", desc: "Il teatro: Stanislavskij e Bertolt Brecht. Il cinema e l'Actor’s Studio. Scoprire cosa significa realmente recitare." },
      { title: "Fisicità e Strumenti", desc: "L’uso del corpo e la maschera neutra. L’espressività del volto, la dizione e la parola." },
      { title: "Tecniche di Scena", desc: "I testi classici (dramma e commedia), il monologo, il dialogo e il rapporto col palcoscenico." },
      { title: "Acting For Camera", desc: "Il rapporto esclusivo con la macchina da presa, l’importanza dei 'codici' e la recitazione sui set accademici." }
    ],
    shortDesc: "Scopri il tuo talento e impara le vere tecniche di recitazione su set.",
    careers: ["Attore Cinematografico", "Attore Televisivo", "Performer Teatrale", "Talent Pubblicitario"],
    scarcity: "Max 15 allievi. Bonus: tutti gli allievi reciteranno fisicamente come attori protagonisti o co-protagonisti nei cortometraggi di fine anno diretti dai registi della scuola.",
    hasScholarship: false,
    setSubtitle: "Non reciterai al vuoto. Svilupperai il tuo acting for camera misurandoti direttamente con i registi accademici nei cortometraggi reali.",
    gallery: [
      "/images/2026_03_Amarcord-recitazione-1.jpeg",
      "/images/2026_03_Amarcord-recitazione-2.jpeg",
      "/images/2026_03_Amarcord-recitazione-3.jpeg",
      "/images/2026_03_Amarcord-recitazione-5.jpeg"
    ]
  },
  doppiaggio: {
    id: 'doppiaggio',
    title: 'Doppiaggio e Voice Over',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-13.png" alt="Icona Doppiaggio" style={iconStyle} />,
    heroImage: '/images/Daniele-Giuliani-2.jpeg',
    heroImageMobile: '/images/Daniele-Giuliani.jpeg',
    heroPositionMobile: 'bottom center',
    description: (
      <>
        <p style={{ marginBottom: '1rem' }}>La voce è il tuo strumento più potente e segreto. In questo corso la educherai fino a renderla perfetta, affinando la dizione, eliminando le inflessioni dialettali e padroneggiando la respirazione diaframmatica.</p>
        <p>La teoria lascia subito spazio alla verità: verrai messo alla prova <strong>al leggio nella nostra vera sala di doppiaggio</strong> professionale (schermo gigante e insonorizzazione totale). Imparerai le complesse tecniche del sincrono labiale, l'adattamento dei dialoghi, il doppiaggio dell'animazione e l'interpretazione viscerale al microfono.</p>
      </>
    ),
    duration: "10 mesi (Ottobre - Luglio)",
    frequency: "Frequenza Settimanale",
    modules: [
      { title: "Dizione e Respirazione", desc: "La voce: imparare a usarla, priva di difetti di pronuncia. La capacità di trasmettere emozioni senza l'uso del corpo." },
      { title: "Sync e Adattamento", desc: "Traduzione e Adattamento. Lavorare su filmati di paesi diversi, comprendendo le modalità espressive internazionali e il sincrono." },
      { title: "Pratica al Leggio", desc: "Esercitazioni su film storici e film da Oscar, per capire la maturazione della recitazione nel tempo." },
      { title: "Doppiaggio Animazione", desc: "Il Cartone Animato: passo fondamentale per testare la padronanza totale del mezzo vocale e l'espressività." }
    ],
    teachers: ["Tiziana Lattuca", "Massimo Giuliani"],
    teachersBio: (
      <>
        I tuoi maestri saranno <strong>Massimo Giuliani</strong> (voce storica di Mel Gibson e John Belushi, vincitore del "Leggio d'Oro") e <strong>Tiziana Lattuca</strong>, direttrice di doppiaggio e adattatrice di punta. Lavorerai con i pilastri che curano l'edizione italiana dei grandi blockbuster di Hollywood.
      </>
    ),
    shortDesc: "Presta la tua voce al cinema: tecniche di sincrono e interpretazione.",
    careers: ["Doppiatore Professionista", "Speaker Radiofonico", "Voice Over", "Adattatore Dialoghista"],
    scarcity: "Max 10 allievi. Bonus: le voci più meritevoli doppieranno i cortometraggi di fine anno e verranno segnalate alle produzioni esterne.",
    hasScholarship: false,
    setSubtitle: "L'esame della verità: ti siederai al leggio nella nostra vera sala di doppiaggio (schermo gigante e insonorizzazione totale).",
    gallery: [
      "/images/2024_04_Corso-di-Doppiaggio-2.jpg",
      "/images/2024_04_Corso-di-Doppiaggio-1.jpg",
      "/images/2024_04_Corso-di-Doppiaggio-3.jpg",
      "/images/Daniele-Giuliani.jpeg"
    ]
  }
};
