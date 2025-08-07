const phrases = [
  "Te Amo",
  "My love",
  "Eres preciosa",
  "Me encantas",
  "Amor de mi vida",
  "Reina hermosa",
  "mi niña",
  "mi consentida",
  "Mi Biankita"
];

function mostrarFrase() {
  const fraseAleatoria = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("frase").textContent = fraseAleatoria;
}

window.onload = mostrarFrase;
