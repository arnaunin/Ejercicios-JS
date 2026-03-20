const contrasena = document.getElementById("contrasena");
const formulario = document.getElementById("formulario");
const input = document.getElementById("longitud");
const generar = document.getElementById("generar");

const catalogo =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~\"\\";

let mensaje = "";

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const longitud = Number(input.value);

  if (longitud < 4) {
    mensaje = "¡La longitud debe ser mayor o igual a 4!";
  } else {
    mensaje = generarContrasena(longitud);
  }

  contrasena.textContent = mensaje;
});

function generarContrasena(x) {
  let passw = "";

  for (let i = 0; i < Number(x); i++) {
    const caracter = catalogo[Math.floor(Math.random() * catalogo.length)];
    passw += caracter;
  }

  return passw;
}
