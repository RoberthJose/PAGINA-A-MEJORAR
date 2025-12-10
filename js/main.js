// Seleccionamos elementos
const menuToggle = document.querySelector('.menu-toggle');
const userOptions = document.querySelector('.user-options');

// Función para abrir/cerrar menú en móvil
menuToggle.addEventListener('click', () => {
  userOptions.classList.toggle('show-menu');
});
