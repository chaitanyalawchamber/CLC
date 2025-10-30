(function(){
  const inc = () => { const body = document.body; const size = parseFloat(window.getComputedStyle(body).fontSize); body.style.fontSize = (size + 1) + 'px'; };
  const dec = () => { const body = document.body; const size = parseFloat(window.getComputedStyle(body).fontSize); if(size>12) body.style.fontSize = (size - 1) + 'px'; };
  const reset = () => { document.body.style.fontSize = ''; };

  window.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inc-font')?.addEventListener('click', inc);
    document.getElementById('dec-font')?.addEventListener('click', dec);
    document.getElementById('reset-font')?.addEventListener('click', reset);
    window.googleTranslateElementInit = function() {
      try{
        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'kn,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      }catch(e){console.warn('Google Translate failed', e);}
    };
  });
})();function initAppointmentLoader(iframeId, overlayId){ /* no loader in this build */ }