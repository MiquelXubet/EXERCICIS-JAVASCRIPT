let resultado = "";

const borrarTodo = () => {
  resultado = "";
  document.getElementById("resultado").textContent = "";
};

const pedirLetra = () => {
  while (true) {
    let letra = prompt("Introduzca una letra:");
    if (letra === null) {
      break;
    } else if (letra.length > 1) {
      alert("Introducir máximo una letra cada vez");
    } else if (!/^[a-zA-Z]$/.test(letra)) {
      alert("Carácter inválido. Introduzca una letra");
    } else {
      resultado += letra;
    }
  }
  document.getElementById("resultado").textContent =
    "Palabra formada:" + resultado;
};
