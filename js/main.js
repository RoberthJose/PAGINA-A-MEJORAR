// Selecciona elementos
const menuToggle = document.querySelector('.menu-toggle');
const userOptions = document.querySelector('.user-options');
const header = document.querySelector('.header');

// Función para abrir/cerrar menú
menuToggle.addEventListener('click', () => {
  // Calcula ancho del header
  const headerWidth = header.offsetWidth;

  // Aplica estilo dinámico para que se vea dentro del header
  if (!userOptions.classList.contains('show-menu')) {
    userOptions.style.display = 'flex';
    userOptions.style.flexDirection = 'column';
    userOptions.style.position = 'absolute';
    userOptions.style.top = header.offsetHeight + 'px'; // justo debajo del header
    userOptions.style.left = header.offsetLeft + 'px';
    userOptions.style.width = headerWidth + 'px';
    userOptions.style.backgroundColor = '#fff';
    userOptions.style.border = '1px solid #ddd';
    userOptions.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    userOptions.style.transition = 'all 0.3s ease';
  } else {
    userOptions.style.display = 'none';
  }

  // Alterna la clase
  userOptions.classList.toggle('show-menu');
});

