export const initGTM = (gtmId) => {
  // Se GTM è già stato inizializzato, non facciamo nulla
  if (document.getElementById('gtm-script')) return;

  // Inizializza il dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Inizializza helper per gtag
  window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };

  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Crea il tag script per GTM
  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  // Crea il tag script per Google Ads
  const gtagScript = document.createElement('script');
  gtagScript.id = 'gtag-script';
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=AW-18051680301`;
  document.head.appendChild(gtagScript);

  window.gtag('js', new Date());
  window.gtag('config', 'AW-18051680301');

  console.log(`GTM (${gtmId}) e Google Ads inizializzati correttamente post-consenso.`);
};
