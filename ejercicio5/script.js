const sumBtn = document.getElementById("sum-btn");
const resBtn = document.getElementById("res-btn");
const multBtn = document.getElementById("mult-btn");
const divBtn = document.getElementById("div-btn");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
  if (b === 0) {
    return "No se puede dividir por cero";
  }
  return a / b;
};

const getValores = () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  return { a, b };
};

const validar = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor, introduce números válidos";
  }
  return null;
};

const mostrarResultado = (valor) => {
  result.textContent = valor;
};

const calcular = (operacion) => {
  const { a, b } = getValores();

  const error = validar(a, b);
  if (error) {
    mostrarResultado(error);
    return;
  }

  mostrarResultado(operacion(a, b));
};

sumBtn.addEventListener("click", () => calcular(sumar));
resBtn.addEventListener("click", () => calcular(restar));
multBtn.addEventListener("click", () => calcular(multiplicar));
divBtn.addEventListener("click", () => calcular(dividir));
