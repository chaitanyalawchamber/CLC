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
      // Recommended values
      const threshold = 20;             // scroll start (px)
      const logoDesktop = { full: 180, shrink: 120 };  // logo height px
      const titleDesktop = { full: 20, shrink: 16 };   // font-size px
      const logoMobile = { full: 70, shrink: 50 };     // mobile logo height px
      const titleMobile = { full: 18, shrink: 14 };    // mobile font size px

      window.addEventListener('scroll', function() {
        const isMobile = window.innerWidth <= 768;
        let newLogoHeight, newTitleSize;

        if(window.scrollY > threshold){
          header.classList.add('sticky-shrink');
          if(isMobile){
            newLogoHeight = logoMobile.shrink;
            newTitleSize = titleMobile.shrink;
          }else{
            newLogoHeight = logoDesktop.shrink;
            newTitleSize = titleDesktop.shrink;
          }
        } else {
          header.classList.remove('sticky-shrink');
          if(isMobile){
            newLogoHeight = logoMobile.full;
            newTitleSize = titleMobile.full;
          }else{
            newLogoHeight = logoDesktop.full;
            newTitleSize = titleDesktop.full;
          }
        }

        // ✅ Only update if value changed (fix mobile glitch)
        if(parseInt(logo.style.height) !== newLogoHeight){
          logo.style.height = newLogoHeight + 'px';
        }
        if(parseInt(title.style.fontSize) !== newTitleSize){
          title.style.fontSize = newTitleSize + 'px';
        }
      });
    }
  });
})();

// ================= Appointment Loader Stub =================
function initAppointmentLoader(iframeId, overlayId){ /* no loader in this build */ }

