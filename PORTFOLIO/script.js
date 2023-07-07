// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav a');
for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  // Perform form submission logic here
  console.log('Form submitted');
}
