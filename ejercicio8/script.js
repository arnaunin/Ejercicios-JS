const textarea = document.querySelector("textarea");
const caracteres = document.getElementById("caracteres");
const palabras = document.getElementById("palabras");

textarea.addEventListener("input", (e) => {
  caracteres.textContent = `Caracteres totales: ${contarCarateres(e.target.value)}`;
  palabras.textContent = `Palabras totales: ${contarPalabras(e.target.value)}`;
});

const contarPalabras = () => {
  return listaPalabras().length;
};

const contarCarateres = () => {
  const palabras = listaPalabras();
  console.log(palabras);
  let char = 0;
  palabras.forEach((palabra) => {
    for (let caracter of palabra) {
      char++;
    }
  });
  return char;
};

const listaPalabras = () => {
  const texto = textarea.value;
  const textoLimpio = texto.replace(/[^A-Za-z0-9]+/g, " ");
  const lista = textoLimpio.split(" ").filter((palabra) => palabra.length > 0);
  return lista;
};