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

const socialLinksMarkup = `
  <div class="social-links footer-socials" aria-label="Tripoint contact and social links">
    <a href="https://wa.me/256781678974" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="assets/whatsapp.jpg" alt=""></a>
    <a href="mailto:tripoint.mcl@gmail.com" aria-label="Email Tripoint"><img src="assets/gmail.jpg" alt=""></a>
    <a href="#" data-placeholder-link aria-disabled="true" aria-label="Instagram profile coming soon"><img src="assets/instagram.jpg" alt=""></a>
    <a href="#" data-placeholder-link aria-disabled="true" aria-label="TikTok profile coming soon"><img src="assets/tiktok.jpg" alt=""></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Arua+City+Uganda" target="_blank" rel="noopener" aria-label="Find Tripoint in Arua City"><img src="assets/maps.jpg" alt=""></a>
  </div>`;

document.querySelectorAll('.simple-footer').forEach(footer => {
  const location = footer.querySelector('p');
  if (location) {
    location.insertAdjacentHTML('afterend', '<div class="simple-footer-contact"><a href="mailto:tripoint.mcl@gmail.com">tripoint.mcl@gmail.com</a><a href="tel:+256781678974">+256 781 678 974</a></div>');
  }
  footer.insertAdjacentHTML('beforeend', socialLinksMarkup);
});

const contactPanel = document.querySelector('.contact-page .contact-panel');
if (contactPanel) {
  contactPanel.innerHTML = `
    <a href="mailto:tripoint.mcl@gmail.com"><img src="assets/gmail.jpg" alt=""><span><small>Email</small><strong>tripoint.mcl@gmail.com</strong></span><b>↗</b></a>
    <a href="tel:+256781678974"><img src="assets/phone.jpg" alt=""><span><small>Call</small><strong>+256 781 678 974</strong></span><b>↗</b></a>
    <a href="https://wa.me/256781678974" target="_blank" rel="noopener"><img src="assets/whatsapp.jpg" alt=""><span><small>WhatsApp</small><strong>Message us</strong></span><b>↗</b></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Arua+City+Uganda" target="_blank" rel="noopener"><img src="assets/maps.jpg" alt=""><span><small>Head office</small><strong>Arua City, Uganda</strong></span><b>↗</b></a>
    <div class="contact-panel-socials"><span>Follow Tripoint</span>${socialLinksMarkup}</div>`;
}

document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});
