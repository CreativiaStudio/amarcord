import React from 'react';
import { Video, Paintbrush, PenTool, Camera, Mic, Theater } from 'lucide-react';

export const coursesData = {
  regia: {
    id: 'regia',
    title: 'Regia Cinematografica',
    icon: <Video size={32} color="var(--accent-gold)" />,
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop',
    description: "Dal pensare un'immagine alla sua realizzazione. Il corso affronta le basi della narrazione dal punto di vista teorico e pratico insieme: il piano tecnico e quello creativo trovano un punto di contatto nella realizzazione di progetti professionali. Dirigi il tuo film e capisci chi sta davanti alla macchina da presa.",
    duration: "10 Mesi (Base) + 5 Mesi (Master sul set)",
    modules: [
      "Confronto e sviluppo con la sceneggiatura",
      "Teoria dell'inquadratura e messa in scena",
      "Lavoro attoriale"
    ],
    teachers: ["Stefano Reali", "Raffaele Mertes"],
    shortDesc: "Dirigi il tuo film e capisci chi sta davanti alla macchina da presa."
  },
  trucco: {
    id: 'trucco',
    title: 'Trucco Cinematografico',
    icon: <Paintbrush size={32} color="var(--accent-gold)" />,
    heroImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000&auto=format&fit=crop',
    description: "Dal beauty look per la moda agli effetti speciali (SFX) per il cinema. Impara dai grandi maestri a scolpire, trasformare e invecchiare i lineamenti del volto per dare vita ai personaggi sul set. La capacità di esaltare, nascondere o trasformare completamente i lineamenti di un volto è ciò che rende credibile un film.",
    duration: "5 Mesi (Pratica sul set inclusa)",
    modules: [
      "Introduzione e Trucco Base (Contouring, occhi, sopracciglia)",
      "Trucco Moda e Glamour",
      "Trucco Cinematografico e Teatrale",
      "Effetti Speciali e Invecchiamento (SFX - ferite, bruciature, cicatrici)"
    ],
    teachers: ["Laura Cacciapaglia"],
    shortDesc: "Dal beauty look agli effetti speciali (SFX) per il cinema."
  },
  sceneggiatura: {
    id: 'sceneggiatura',
    title: 'Sceneggiatura',
    icon: <PenTool size={32} color="var(--accent-gold)" />,
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2000&auto=format&fit=crop',
    description: "Un laboratorio di visione, scrittura, trasformazione. Scrivere per il cinema non è solo imparare a strutturare un racconto: è cominciare a guardare la vita con occhi nuovi.",
    duration: "10 Mesi (Livello 1) / 1 Anno (Livello 2)",
    modules: [
      "Le basi della narrazione audiovisiva",
      "La struttura in tre atti e le varianti moderne",
      "La costruzione del personaggio (conflitto, desiderio)",
      "Il dialogo come musica e verità",
      "Il Soggetto e La Sceneggiatura per Cortometraggio"
    ],
    teachers: ["Stefano Reali", "Alfredo Mazzara"],
    shortDesc: "Le tecniche di scrittura creativa per strutturare storie avvincenti."
  },
  fotografia: {
    id: 'fotografia',
    title: 'Direzione della Fotografia',
    icon: <Camera size={32} color="var(--accent-gold)" />,
    heroImage: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=2000&auto=format&fit=crop',
    description: "Il corso si prefigge di formare un Autore della Fotografia Cinematografica (Direttore della Fotografia) fornendo tutte le nozioni per svolgere il suo compito al servizio di un prodotto video, dall'uso dei mezzi tecnici fino all'illuminazione delle scene.",
    duration: "Lezioni settimanali (Weekend)",
    modules: [
      "Storia della Cinematografia e stili",
      "Mezzi tecnici (Macchine da presa RED e ARRI)",
      "Composizione dell'inquadratura e Messa a fuoco",
      "Movimenti di macchina (Dolly, Steadicam, Droni)",
      "Gestione dell'illuminazione sul set"
    ],
    teachers: ["Raffaele Mertes", "Giuseppe Maldera"],
    shortDesc: "Padroneggia la luce e l'uso delle macchine da presa professionali."
  },
  recitazione: {
    id: 'recitazione',
    title: 'Recitazione',
    icon: <Theater size={32} color="var(--accent-gold)" />,
    heroImage: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2000&auto=format&fit=crop',
    description: "Un percorso intensivo per imparare a vivere veramente nelle circostanze immaginarie della scena. Dal lavoro sul corpo e sulla voce all'interpretazione del personaggio davanti alla macchina da presa.",
    duration: "1 Anno",
    modules: [
      "Lavoro sul corpo e sulla voce",
      "Analisi del testo e costruzione del personaggio",
      "Acting for Camera (Recitazione cinematografica)",
      "Preparazione ai Casting"
    ],
    teachers: ["Insegnanti Amarcord"],
    shortDesc: "Scopri il tuo talento e impara le tecniche di recitazione."
  },
  doppiaggio: {
    id: 'doppiaggio',
    title: 'Doppiaggio',
    icon: <Mic size={32} color="var(--accent-gold)" />,
    heroImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop',
    description: "Impara a prestare la voce ai grandi attori. Il corso fornisce le tecniche di dizione, respirazione, sincrono labiale e interpretazione al microfono in una vera sala di doppiaggio.",
    duration: "6 Mesi",
    modules: [
      "Dizione e impostazione vocale",
      "Tecniche di respirazione",
      "Sincrono labiale",
      "Recitazione al microfono"
    ],
    teachers: ["Insegnanti Amarcord"],
    shortDesc: "Presta la tua voce al cinema: tecniche di sincrono e interpretazione."
  }
};
