// Get the current page URL
const currentPage = window.location.pathname;

// Add the "active" class to the corresponding navigation link
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Handle form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Display form data in the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear form fields
  contactForm.reset();
});
