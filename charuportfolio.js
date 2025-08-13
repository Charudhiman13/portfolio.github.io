// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Animate headers with stagger effect
  const headers = document.querySelectorAll('.animated-header');
  headers.forEach((header, index) => {
    header.style.animationDelay = `${index * 0.3}s`;
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  });

  // Smooth scroll for nav links handled by CSS scroll-behavior

  // Optional: Highlight active nav link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function changeActiveLink() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));
    if(navLinks[index]) {
      navLinks[index].classList.add('active');
    }
  }

  window.addEventListener('scroll', changeActiveLink);

  // Initial call
  changeActiveLink();
});
