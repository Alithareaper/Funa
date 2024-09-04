document.addEventListener('DOMContentLoaded', (event) => {
  // Toggle navigation menu on mobile
  const navLinks = document.querySelector('.nav__links');
  const navToggle = document.createElement('button');
  navToggle.innerHTML = '☰';
  navToggle.classList.add('nav-toggle');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--active');
  });

  document.querySelector('nav').insertBefore(navToggle, navLinks);

  // Smooth scroll to sections
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  // Handle default scroll behavior on mobile
  if (window.innerWidth <= 600) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Schedule call button alert
  const scheduleButton = document.querySelector('.footer__container button[type="submit"]');

  scheduleButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent actual form submission
    alert('Your call has been scheduled!');
  });

  // Add scroll animation to images
  const images = document.querySelectorAll('.display__col img');

  window.addEventListener('scroll', () => {
    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (imageTop < screenHeight) {
        image.classList.add('slide-up');
      }
    });
  });
});

