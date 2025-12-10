// Seleccionamos elementos
const menuToggle = document.querySelector('.menu-toggle');
const sidebarLeft = document.querySelector('.sidebar-left');
const userOptions = document.querySelector('.user-options');

// Función para abrir/cerrar menú en móvil
menuToggle.addEventListener('click', () => {
  // Alterna clase para mostrar/ocultar sidebar
  sidebarLeft.classList.toggle('show-menu');
  userOptions.classList.toggle('show-menu');
});
