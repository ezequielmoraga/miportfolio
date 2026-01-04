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



// certificaciones carrusel

let indexActual = 0;

function actualizarCarrusel() {
  const cards = document.querySelectorAll('.curso-card');
  const total = cards.length;

  cards.forEach((card, i) => {
    card.classList.remove("active", "left", "right", "hidden");

    if (i === indexActual) {
      card.classList.add("active"); // centro
    } else if (i === (indexActual - 1 + total) % total) {
      card.classList.add("left"); // izquierda
    } else if (i === (indexActual + 1) % total) {
      card.classList.add("right"); // derecha
    } else {
      card.classList.add("hidden"); // fuera de vista
    }
  });
}

function moverCarrusel(direccion) {
  const cards = document.querySelectorAll('.curso-card');
  indexActual = (indexActual + direccion + cards.length) % cards.length;
  actualizarCarrusel();
}

document.addEventListener("DOMContentLoaded", actualizarCarrusel);


function abrirCertificado(src) {
  const popup = document.getElementById("popup-certificado");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = src;
  popup.style.display = "flex";
}

function cerrarCertificado(e) {
  // Si hacen click en la imagen NO cierres (solo cerrar fondo o X)
  if (e && e.target && e.target.id === "popup-img") return;

  const popup = document.getElementById("popup-certificado");
  const popupImg = document.getElementById("popup-img");

  popup.style.display = "none";
  popupImg.src = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarCertificado();
});


//carrusesel
// Swipe en el carrusel para móviles
const carrusel = document.getElementById("carrusel");
let startX = 0;

if (carrusel) {
  carrusel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carrusel.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (Math.abs(diff) > 50) { // si se movió más de 50px
      if (diff > 0) {
        moverCarrusel(1);  // swipe izquierda → siguiente
      } else {
        moverCarrusel(-1); // swipe derecha → anterior
      }
    }
  });
}


//contacto frases
// Frases dinámicas para la sección de contacto
const frasesContacto = [
  "¿Buscan un profesional IT resolutivo? Estoy listo para sumar valor en su equipo de trabajo.",
  "Con experiencia en programación, documentación técnica y gestión IT, puedo aportar a los objetivos de su empresa.",
  "Soy un perfil proactivo, organizado y con formación sólida en sistemas. Disponible para nuevos desafíos laborales.",
  "Mi compromiso es ofrecer soluciones eficientes y prácticas. Si su equipo necesita un refuerzo, estoy preparado.",
  "Estoy en constante capacitación en tecnologías actuales para contribuir al crecimiento de su organización."
];
// Reemplazar el texto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.querySelector("#contacto p");
  if (parrafo) {
    const fraseRandom = frasesContacto[Math.floor(Math.random() * frasesContacto.length)];
    parrafo.textContent = fraseRandom;
  }
});
// Fin frases contacto
// Menú hamburguesa (ÚNICO y correcto)

function closeMenu() {
  document.body.classList.remove("menu-open");
}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

// cerrar al tocar un link
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});
