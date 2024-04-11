const form = document.querySelector('form');
const codeModal = document.getElementById('codeModal');
const codeDisplay = document.getElementById('codeDisplay');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  form.reset();
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

const codeLinks = document.querySelectorAll('a[data-toggle="modal"]');

codeLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const codeId = event.target.getAttribute('data-code-id');
    const codeElement = document.getElementById(codeId);
    codeDisplay.textContent = codeElement.textContent;
    $('#codeModal').modal('show');
  });
});

// Add this code at the bottom
const loginLink = document.getElementById('loginLink');

loginLink.addEventListener('click', (event) => {
  window.location.href = 'login.html';
});