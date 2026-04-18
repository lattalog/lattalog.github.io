/**
 * Latta Logistik - Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Aktuelles Jahr im Footer setzen
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll reveal Animation (Einblenden beim Runterscrollen)
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { 
            if(e.isIntersecting){ 
                e.target.classList.add('on'); 
                revealObserver.unobserve(e.target); 
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-r]').forEach(el => revealObserver.observe(el));

    // Performance-Balken Animation
    const barObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(e.isIntersecting){
                e.target.style.width = e.target.dataset.w;
                barObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.p-fill').forEach(f => barObserver.observe(f));

    // Formular-Validierung
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!name || !email || !message) { 
                alert('Bitte füllen Sie alle Pflichtfelder aus.'); 
                e.preventDefault(); 
                return; 
            }
            
            if(!emailPattern.test(email)) { 
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.'); 
                e.preventDefault(); 
            }
        });
    }

    // Hamburger-Menü (Mobile Navigation)
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.n-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
            toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
        });
        document.querySelectorAll('.n-links a').forEach(a =>
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.textContent = '☰';
            })
        );
    }

});