document.addEventListener('DOMContentLoaded', () => {
  const secs = document.querySelectorAll('.fade-in-section');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  secs.forEach(s => obs.observe(s));
});

// Función que se llama al hacer clic en el botón "Más"
function toggleMenu() {
  // Agrega o quita la clase "show" al menú desplegable
  document.getElementById("miDropdown").classList.toggle("show");
}

// Si el usuario hace clic fuera del botón, se cierra el menú
window.onclick = function(e) {
  // Si el clic NO fue sobre el botón
  if (!e.target.matches('.dropbtn')) {
    // Oculta todos los dropdowns
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
};

window.embeddedChatbotConfig = {
  chatbotId: "2t-x0QxNsdXDIP_6NeFSd",
  domain: "www.chatbase.co",
  color: "none"
};

(function() {
  var s = document.createElement("script");
  s.src = "https://www.chatbase.co/embed.min.js";
  s.setAttribute("chatbotId", "2t-x0QxNsdXDIP_6NeFSd");
  s.setAttribute("domain", "www.chatbase.co");
  s.defer = true;
  document.body.appendChild(s);
})();