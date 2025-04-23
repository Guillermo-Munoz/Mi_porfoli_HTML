document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const hamburger = document.getElementById('menu-hamburger');
    const menu = document.getElementById('menu');
  
    // Aplicar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  
    themeToggle?.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  
    // Mostrar / ocultar menú
    hamburger?.addEventListener('click', (e) => {
      e.stopPropagation(); // evitar cierre inmediato
      menu.classList.toggle('active');
    });
  
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      const clickedOutside = !menu.contains(e.target) && !hamburger.contains(e.target);
      if (menu.classList.contains('active') && clickedOutside) {
        menu.classList.remove('active'); // ✅ Aquí removemos la clase
      }
    });
  
    // Cerrar al hacer clic en los links del menú (opcional)
    menu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  
    // Efecto ola
    document.querySelectorAll('.wave-hover').forEach(el => {
      const text = el.textContent.trim();
      el.innerHTML = '';
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.style.setProperty('--char-index', i);
        span.style.transitionDelay = `${i * 0.05}s`;
        span.textContent = char;
        el.appendChild(span);
      });
    });
  
    // Rotación de notas
    document.querySelectorAll('.project-note').forEach(note => {
      const angles = [-2, -1, 0, 1, 2];
      const angle = angles[Math.floor(Math.random() * angles.length)];
      note.style.setProperty('--rotation', `${angle}deg`);
    });
  });
  