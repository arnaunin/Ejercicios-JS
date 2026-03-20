const inicio = document.getElementById("iniciar");
const pausa = document.getElementById("pausar");
const reinicio = document.getElementById("reiniciar");
const temporizador = document.getElementById("temporizador");

let tiempo = 0;
let corriendo = false;
let intervalo = null;

inicio.addEventListener("click", () => {
  if (corriendo) return;
  corriendo = true;
  intervalo = setInterval(() => {
    tiempo++;
    temporizador.textContent = parsearTiempo(tiempo);
  }, 1000);
});

pausa.addEventListener("click", () => {
  clearInterval(intervalo);
  corriendo = false;
});

reinicio.addEventListener("click", () => {
  clearInterval(intervalo);
  tiempo = 0;
  corriendo = false;
  temporizador.textContent = parsearTiempo(tiempo);
});

function parsearTiempo() {

    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}