export const initGTM = (gtmId) => {
  // Se GTM è già stato inizializzato, non facciamo nulla
  if (document.getElementById('gtm-script')) return;

  // Inizializza il dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Crea il tag script per GTM
  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  
  // Aggiungi lo script all'head del documento
  document.head.appendChild(script);

  console.log(`GTM (${gtmId}) inizializzato correttamente post-consenso.`);
};
