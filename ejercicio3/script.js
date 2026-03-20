const input = document.getElementById("texto");
const form = document.getElementById("formulario");
const listaUl = document.getElementsByClassName("lista")[0];

let lista = [];

const render = () => {
  listaUl.innerHTML = "";
  lista.forEach((elemento, index) => {
    const li = document.createElement("li");
    li.textContent = elemento;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.addEventListener("click", () => {
      lista.splice(index, 1);
      render();
    });

    li.appendChild(btn);
    listaUl.appendChild(li);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (!texto) return;

  lista = [...lista, texto];
  input.value = "";
  render();
});