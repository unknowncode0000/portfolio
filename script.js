const targets = document.querySelectorAll('.section-label, .split-heading, .profile-grid, .feature, .wide-visual, .system-grid, .cap-grid, .contact-box');
targets.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
targets.forEach(el => observer.observe(el));
