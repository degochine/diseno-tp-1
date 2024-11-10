// === Modo Oscuro ===
document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    const body = document.body;

    // Comprobar si hay una preferencia guardada en localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (darkModeEnabled) {
        body.classList.add("dark-mode");
    }

    // Función para alternar el modo oscuro
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        
        // Guardar la preferencia en localStorage
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }

    // Evento para el botón de modo oscuro
    toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
});

document.addEventListener('DOMContentLoaded', function() {
    // === Formulario de Contacto ===
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario

            // Obtener los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validar que los campos no estén vacíos
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Mostrar mensaje de confirmación
            alert(`Gracias por contactarte, ${nombre}. Pronto recibirás una respuesta.`);

            // Limpiar los campos del formulario
            contactForm.reset();
        });
    } else {
        console.error("No se encontró el formulario");
    }
});
