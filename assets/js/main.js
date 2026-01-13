(function(){
  // ================= Font Size Controls =================
  const inc = () => { 
    const body = document.body; 
    const size = parseFloat(window.getComputedStyle(body).fontSize); 
    body.style.fontSize = (size + 1) + 'px'; 
  };
  const dec = () => { 
    const body = document.body; 
    const size = parseFloat(window.getComputedStyle(body).fontSize); 
    if(size>12) body.style.fontSize = (size - 1) + 'px'; 
  };
  const reset = () => { 
    document.body.style.fontSize = ''; 
  };

  window.addEventListener('DOMContentLoaded', ()=>{
    // ========== Bind Font Buttons ==========
    document.getElementById('inc-font')?.addEventListener('click', inc);
    document.getElementById('dec-font')?.addEventListener('click', dec);
    document.getElementById('reset-font')?.addEventListener('click', reset);

    // ========== Google Translate Init ==========
    window.googleTranslateElementInit = function() {
      try{
        new google.translate.TranslateElement({
          pageLanguage: 'en', 
          includedLanguages: 'kn,en', 
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }catch(e){console.warn('Google Translate failed', e);}
    };

    // ================= Sticky Header Shrink Effect =================
    const header = document.querySelector('.site-header');
    const logo = document.querySelector('.site-logo');
    const title = document.querySelector('.brand-title');

    if(header && logo && title){
      window.addEventListener('scroll', function() {
        if(window.scrollY > 20){ // scroll threshold
          header.classList.add('sticky-shrink');
          logo.style.height = '120px';   // logo shrink on scroll
          title.style.fontSize = '16px'; // title shrink on scroll
        } else {
          header.classList.remove('sticky-shrink');
          logo.style.height = '180px';   // restore logo
          title.style.fontSize = '20px'; // restore title
        }
      });
    }
  });
})();

// ================= Appointment Loader Stub =================
function initAppointmentLoader(iframeId, overlayId){ /* no loader in this build */ }
