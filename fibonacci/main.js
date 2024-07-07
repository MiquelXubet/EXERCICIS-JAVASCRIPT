const numero = parseInt(prompt("Escoja un número"));
let resultado;

if (numero === 0) {
  resultado = 0;
} else if (numero === 1) {
  resultado = 1;
} else {
  let anterior = 1;
  let anterior_al_anterior = 0;
  for (let i = 2; i <= numero; i++) {
    resultado = anterior + anterior_al_anterior;

    anterior_al_anterior = anterior;
    anterior = resultado;
  }
}

document.getElementById("numero_fibonacci").innerText = numero;
document.getElementById("resultado_fibonacci").innerText = resultado;
