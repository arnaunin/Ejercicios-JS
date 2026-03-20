import { listaAnimales } from "../data.js";

const input = document.getElementById("input");
const list = document.querySelector(".lista");

const render = (text = "") => {
  const query = text.trim().toLowerCase();
  list.innerHTML = "";

  listaAnimales.forEach((animal) => {
    if (query === "" || animal.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      li.textContent = animal;
      list.appendChild(li);
    }
  });
};

input.addEventListener("input", (e) => {
  render(e.target.value);
});

// Mostrar la lista completa al cargar
render("");
