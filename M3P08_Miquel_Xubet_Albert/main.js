let datoUsuario;
let resultado;

while (true) {
  datoUsuario = parseInt(prompt("Introduzca un número entre 1 y 10:"));
  if (datoUsuario <= 10 && datoUsuario >= 1) {
    const factorial = (datoUsuario) => {
      let total = 1;
      for (let i = 1; i <= datoUsuario; i++) {
        total *= i;
      }
      return total;
    };
    resultado = factorial(datoUsuario);
    break;
  } else {
    alert("Valor incorrecto. Introduzca un número entre 1 y 10");
  }
}

document.getElementById("valor-introducido").innerText = datoUsuario;
document.getElementById("resultado-factorial").innerText = resultado;
