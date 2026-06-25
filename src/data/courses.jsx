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
    heroPosition: 'center 75%',
    description: "Il regista è l'occhio del pubblico. In questo corso imparerai a tradurre un'idea in immagini, guidare gli attori e coordinare l'intera troupe. Dalla pre-produzione al montaggio finale, sarai tu a dettare il ritmo della storia.",
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "Confronto e sviluppo con la sceneggiatura", desc: "Il regista è un interprete. Saper leggere e decodificare una sceneggiatura è la base. Imparerai ad interagire con lo sceneggiatore per trasformare un testo in film." },
      { title: "Teoria dell’inquadratura e messa in scena", desc: "Dalla composizione dell’immagine alla sua realizzazione nello spazio. Impara a gestire lo spazio, la telecamera e le dinamiche sceniche rispetto ad un obiettivo mirato di racconto." },
      { title: "Lavoro attoriale", desc: "La regia non è solo 'fare inquadrature'. È soprattutto cura per l’attore. Tecniche di approccio e gestione del ruolo attoriale nella messa in scena." },
      { title: "Realizzazione Pratica sul Set", desc: "Ogni sabato per 5 mesi sarai sul set a curare inquadrature, gestione dello spazio e messa in scena sotto la guida dei docenti per realizzare un vero cortometraggio." }
    ],
    teachers: ["Stefano Reali", "Alfredo Mazzara"],
    shortDesc: "Dirigi il tuo film e capisci chi sta davanti alla macchina da presa.",
    careers: ["Regista Cinematografico", "Aiuto Regista", "Regista Pubblicitario / Videoclip", "Segretario di Edizione"],
    scarcity: "I posti sono rigorosamente limitati per garantire l'uso diretto della cinepresa e il coinvolgimento in ruoli attivi sul set a tutti gli allievi.",
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
    description: "Il volto dell'attore è la tua tela. Imparerai a creare make-up correttivi perfetti per il grande schermo e a padroneggiare gli effetti speciali protesici (ferite, invecchiamento, mostri). Il trucco non è estetica, è narrazione visiva.",
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "Introduzione e Trucco Base", desc: "Studio del volto, volumi, Contouring & Highlighting. Scelta del fondotinta, correzione sopracciglia e trucco occhi." },
      { title: "Trucco Moda e Glamour", desc: "Nude look, Glamour look e Catwalk look. Editorial make up. Applicazione ciglia finte." },
      { title: "Trucco Cinematografico e Teatrale", desc: "Beauty cinematografico. Studio delle epoche storiche e riproduzione degli stili." },
      { title: "Effetti Speciali e Invecchiamento (SFX)", desc: "Invecchiamento. Facepainting. Studio delle tecniche SFX: ferite, tagli, bruciature, cicatrici, sangue finto. Applicazione barbe." }
    ],
    teachers: ["Laura Cacciapaglia"],
    shortDesc: "Dal beauty look agli effetti speciali (SFX) per il cinema.",
    careers: ["Truccatore Cinematografico", "Specialista SFX", "Truccatore Teatrale e TV", "Make-up Artist Moda"],
    scarcity: "Postazioni limitate. Lavorerai nella concitazione di una vera produzione, preparando gli attori veri prima del 'Motore, Ciak, Azione!'.",
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
    heroImageMobile: '/images/2026_03_sceneggiatura-Amarcord-1.jpeg',
    heroPosition: 'center 60%',
    heroPositionMobile: 'top center',
    description: "Ogni grande film nasce da una grande pagina bianca. Apprenderai la struttura in tre atti, lo sviluppo dell'arco del personaggio e la formattazione professionale. Attenzione: i primi 5 mesi sono svolti in totale interdisciplina con il corso di Regia. Questo dà numerosi vantaggi agli studenti, permettendo agli sceneggiatori di capire esattamente come le loro parole vengono tradotte sul set.",
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "Basi e Struttura in tre atti", desc: "Le basi della narrazione audiovisiva, la struttura in tre atti e le varianti moderne." },
      { title: "Costruzione del personaggio", desc: "Il conflitto, il desiderio, la trasformazione e lo sviluppo dell'arco narrativo del protagonista." },
      { title: "Il Soggetto", desc: "Sviluppo di un soggetto personale per lungometraggio concepito secondo le moderne tecniche di esposizione e promozione (mercato)." },
      { title: "La Sceneggiatura", desc: "Elaborazione di una sceneggiatura per cortometraggio in formato americano (dialoghi, descrizioni, formattazione corretta)." }
    ],
    teachers: ["Stefano Reali", "Alfredo Mazzara"],
    shortDesc: "Le tecniche di scrittura creativa per strutturare storie avvincenti.",
    careers: ["Sceneggiatore Cinema/TV", "Soggettista", "Story Editor", "Copywriter Audiovisivo"],
    scarcity: "Max 15 allievi. Bonus: i lavori migliori e i cortometraggi finali verranno effettivamente prodotti e girati dal corso di Regia.",
    hasScholarship: true,
    setSubtitle: "Nessun testo resterà nel cassetto: le pagine migliori scritte in aula prenderanno fisicamente vita durante i cortometraggi di fine anno.",
    gallery: [
      "/images/2024_04_Corso-di-sceneggiatura-1.jpg",
      "/images/2026_03_sceneggiatura-Amarcord-1.jpeg",
      "/images/2024_04_Corso-di-sceneggiatura-3.jpg",
      "/images/2024_04_Corso-di-sceneggiatura-2.jpg"
    ]
  },
  fotografia: {
    id: 'fotografia',
    title: 'Direzione della Fotografia e Operatore MdP',
    icon: <img src="/images/2024_05_HOME-AMARCORD-new-12.png" alt="Icona Fotografia" style={iconStyle} />,
    heroImage: '/fotografia-hero-upscale.png',
    description: "L'immagine è tutto. Non siamo qui per farti usare una reflex. Metterai le mani su vere macchine da presa cinematografiche (le stesse usate nelle produzioni Netflix: ARRI, RED, Sony) e imparerai a scolpire con la luce. Diventerai il vero braccio destro del regista.",
    duration: "10 mesi (Ottobre - Luglio)",
    modules: [
      { title: "La Visione e La Luce", desc: "Storia e Stili della cinematografia. Sistemi illuminanti, proiettori, l'uso del colore, dominanti e cura dell'illuminazione specifica per gli attori." },
      { title: "Mezzi Tecnici e Formati", desc: "Pratica sull'uso della macchina da presa. Ottiche, lenti, fuoco, profondità di campo e il lavoro vitale del Focus Puller (Assistente Operatore)." },
      { title: "Movimenti di Macchina", desc: "Dinamica del carrello, Dolly, Steadicam, Droni e attrezzature moderne da set." },
      { title: "Inquadratura e Racconto", desc: "Composizione visiva, il piano sequenza, totali e controcampi con conseguente gestione autonoma delle luci sul set." }
    ],
    teachers: ["Raffaele Mertes", "Giuseppe Maldera"],
    shortDesc: "Padroneggia la luce e l'uso delle macchine da presa professionali.",
    careers: ["Direttore della Fotografia (DOP)", "Operatore di Macchina", "Assistente Operatore (Focus Puller)", "DIT / Elettricista"],
    scarcity: "Per imparare si toccano con mano macchine vere e attrezzature da presa costose, per questo i gruppi devono essere estremamente ridotti.",
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
    description: "Recitare per il cinema è l'arte della sottrazione. Imparerai il Metodo Stanislavskij-Strasberg e la tecnica di acting for camera. Lavorerai costantemente davanti all'obiettivo, abbattendo la paura del ciak, e capirai come affrontare un vero provino cinematografico.",
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
    scarcity: "Classi a numero chiuso. L'insegnamento è frontale e ogni allievo reciterà fisicamente nei cortometraggi di fine anno con i registi della scuola.",
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
    description: "La voce è il tuo strumento. Affinerai la dizione, l'articolazione e la respirazione diaframmatica. Verrai messo alla prova al leggio in vere sale di doppiaggio, imparando il sincrono labiale, l'adattamento e l'interpretazione al microfono.",
    duration: "10 mesi (Ottobre - Luglio)",
    frequency: "Frequenza Settimanale",
    modules: [
      { title: "Dizione e Respirazione", desc: "La voce: imparare a usarla, priva di difetti di pronuncia. La capacità di trasmettere emozioni senza l'uso del corpo." },
      { title: "Sync e Adattamento", desc: "Traduzione e Adattamento. Lavorare su filmati di paesi diversi, comprendendo le modalità espressive internazionali e il sincrono." },
      { title: "Pratica al Leggio", desc: "Esercitazioni su film storici e film da Oscar, per capire la maturazione della recitazione nel tempo." },
      { title: "Doppiaggio Animazione", desc: "Il Cartone Animato: passo fondamentale per testare la padronanza totale del mezzo vocale e l'espressività." }
    ],
    teachers: ["Tiziana Lattuca", "Massimo Giuliani"],
    shortDesc: "Presta la tua voce al cinema: tecniche di sincrono e interpretazione.",
    careers: ["Doppiatore Professionista", "Speaker Radiofonico", "Voice Over", "Adattatore Dialoghista"],
    scarcity: "Max 10 allievi. Per padroneggiare il sincrono labiale servono turni intensivi continui e personali al leggio per ogni studente.",
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
