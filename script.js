  document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('theme-toggle');
            const savedTheme = localStorage.getItem('theme') || 'light';
            
            // Aplicar tema guardado al cargar
            document.documentElement.setAttribute('data-theme', savedTheme);
            
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Opcional: Cambiar el favicon según el tema
                // const favicon = document.querySelector('link[rel="icon"]');
                // favicon.href = newTheme === 'dark' ? 'favicon-dark.ico' : 'favicon-light.ico';
            });
            
            // Opcional: Detectar preferencia del sistema
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            if (savedTheme === 'light' && prefersDark.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }

            //efecto ola en letras de menu
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
            const hamburger = document.getElementById('menu-hamburger');
            const menu = document.getElementById('menu');

            hamburger.addEventListener('click', () => {
                menu.classList.toggle('active');
            });

            document.querySelectorAll('.project-note').forEach(note => {
                const angles = [-2, -1, 0, 1, 2];
                const angle = angles[Math.floor(Math.random() * angles.length)];
                note.style.setProperty('--rotation', `${angle}deg`);
              });
              



           
});