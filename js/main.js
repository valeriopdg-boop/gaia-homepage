// Piccola interattività: toggle nav e gestione form
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const visible = siteNav.style.display === 'flex';
      siteNav.style.display = visible ? 'none' : 'flex';
    });
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Qui si può integrare con API reale; per ora conferma locale
      alert('Grazie! Ricevuto il messaggio. Ti contatteremo a breve.');
      form.reset();
    });
  }
});
