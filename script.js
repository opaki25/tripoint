const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.classList.toggle('open', !isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('open');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

const siteHeader = document.querySelector('.site-header');
const updateHeaderBackground = () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 24);
};

updateHeaderBackground();
window.addEventListener('scroll', updateHeaderBackground, { passive: true });

document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});

document.querySelectorAll('.back-to-top').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    window.history.replaceState(null, '', '#top');
  });
});

const footerLinksMarkup = `
  <div class="social-links footer-socials" aria-label="Tripoint contact and social links">
    <a href="mailto:tripoint.mcl@gmail.com"><img src="assets/gmail.jpg" alt=""><span><small>Email</small><strong>tripoint.mcl@gmail.com</strong></span><b>↗</b></a>
    <a href="tel:+256781678974"><img src="assets/phone.jpg" alt=""><span><small>Call</small><strong>+256 781 678 974</strong></span><b>↗</b></a>
    <a href="https://wa.me/256781678974" target="_blank" rel="noopener"><img src="assets/whatsapp.jpg" alt=""><span><small>WhatsApp</small><strong>Chat with Tripoint</strong></span><b>↗</b></a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener"><img src="assets/instagram.jpg" alt=""><span><small>Instagram</small><strong>@tripoint.mcl</strong></span><b>↗</b></a>
    <a href="https://www.tiktok.com/" target="_blank" rel="noopener"><img src="assets/tiktok.jpg" alt=""><span><small>TikTok</small><strong>@tripoint.mcl</strong></span><b>↗</b></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Arua+City+Uganda" target="_blank" rel="noopener"><img src="assets/maps.jpg" alt=""><span><small>Find us</small><strong>Arua City, Uganda</strong></span><b>↗</b></a>
  </div>`;

const contactSocialLinksMarkup = `<div class="social-links footer-socials"><a href="https://www.instagram.com/" target="_blank" rel="noopener"><img src="assets/instagram.jpg" alt=""><span>Instagram</span></a><a href="https://www.tiktok.com/" target="_blank" rel="noopener"><img src="assets/tiktok.jpg" alt=""><span>TikTok</span></a></div>`;

document.querySelectorAll('.simple-footer').forEach(footer => footer.insertAdjacentHTML('beforeend', footerLinksMarkup));

const contactPanel = document.querySelector('.contact-page .contact-panel');
if (contactPanel) {
  contactPanel.innerHTML = `
    <a href="mailto:tripoint.mcl@gmail.com"><img src="assets/gmail.jpg" alt=""><span><small>Email</small><strong>tripoint.mcl@gmail.com</strong></span><b>↗</b></a>
    <a href="tel:+256781678974"><img src="assets/phone.jpg" alt=""><span><small>Call</small><strong>+256 781 678 974</strong></span><b>↗</b></a>
    <a href="https://wa.me/256781678974" target="_blank" rel="noopener"><img src="assets/whatsapp.jpg" alt=""><span><small>WhatsApp</small><strong>Message us</strong></span><b>↗</b></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Arua+City+Uganda" target="_blank" rel="noopener"><img src="assets/maps.jpg" alt=""><span><small>Head office</small><strong>Arua City, Uganda</strong></span><b>↗</b></a>
    <div class="contact-panel-socials"><span>Follow Tripoint</span>${contactSocialLinksMarkup}</div>`;
}

document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});
