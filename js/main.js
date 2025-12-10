<script>
  // Detectar clic en el botón hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebarLeft = document.querySelector('.sidebar-left');
  const sidebarRight = document.querySelector('.sidebar-right');

  menuToggle.addEventListener('click', () => {
    // Alternar clase .active para mostrar/ocultar
    sidebarLeft.classList.toggle('active');
    sidebarRight.classList.toggle('active');
  });
</script>
