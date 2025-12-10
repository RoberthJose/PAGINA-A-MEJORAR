// Selecciona el botón hamburguesa y el menú de usuario
const menuToggle = document.querySelector('.menu-toggle');
const userOptions = document.querySelector('.user-options');

// Cuando se hace click, alterna la clase "show-menu"
menuToggle.addEventListener('click', () => {
  userOptions.classList.toggle('show-menu');
});
