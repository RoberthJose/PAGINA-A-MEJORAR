// Seleccionamos elementos
const menuToggle = document.querySelector('.menu-toggle');
const sidebarLeft = document.querySelector('.sidebar-left');

// Evento click en hamburguesa
menuToggle.addEventListener('click', () => {
  sidebarLeft.classList.toggle('active');
});
