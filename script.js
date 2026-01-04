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

function cerrarCertificado() {
  document.getElementById("popup-certificado").style.display = "none";
}


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


// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
// Cerrar menú al tocar un link (mobile)
document.querySelectorAll('#nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('show'));
});


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

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

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cerrar menú al tocar un link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
