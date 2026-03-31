const input = document.getElementById("texto");
const form = document.getElementById("formulario");
const listaUl = document.getElementsByClassName("lista")[0];
const cleanBtn = document.getElementById("cleanList");

let lista = JSON.parse(localStorage.getItem("listaTareas")) || [];

const render = () => {
  listaUl.innerHTML = "";
  lista.forEach((elemento, index) => {
    const li = document.createElement("li");
    li.textContent = elemento["text"];
    li.setAttribute("key", index);

    const btn = document.createElement("input");
    btn.type = "checkbox";
    btn.checked = elemento["completed"];
    btn.addEventListener("click", () => {
      btn.checked = !elemento["completed"];
      elemento["completed"] = !elemento["completed"];
      render();
    });

    li.appendChild(btn);
    listaUl.appendChild(li);

    localStorage.setItem("listaTareas", JSON.stringify(lista));
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (!texto) return;

  lista = [...lista, { text: texto, completed: false }];
  input.value = "";
  render();
});

cleanBtn.addEventListener("click", () => {
  lista = lista.filter((tarea) => !tarea["completed"]);
  localStorage.setItem("listaTareas", JSON.stringify(lista));
  render();
});

render();
