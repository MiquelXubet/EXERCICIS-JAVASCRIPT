let stockInicial = 50;
let stockMonedas = 50;
let monedasPerdidas = 0;
let monedasGanadas = 0;
let monedasApostadas;
let numeroApostado;
let listadoPremiados = [];

// El usuario apuesta un número del 1 al 6
const apuesta = () => {
  while (true) {
    numeroApostado = parseInt(prompt("Introduzca un número entre el 1 y el 6"));
    if (numeroApostado >= 1 && numeroApostado <= 6) {
      break;
    } else {
      alert("Introduzca un número entre 1 y 6");
    }
  }
  document.getElementById("numeroApostado").textContent = numeroApostado;

  // El usuario apuesta sus monedas
  const apuestaMonedas = () => {
    while (true) {
      monedasApostadas = parseInt(prompt("Cuantas monedas quiere apostar?"));
      if (monedasApostadas <= stockMonedas) {
        break;
      } else {
        alert("No tienes suficientes monedas");
      }
    }
    return monedasApostadas;
  };
  monedasApostadas = apuestaMonedas();

  document.getElementById("monedasApostadas").textContent = monedasApostadas;
};

// Se genera un resultado Random y nos dice si hemos ganado o perdido
const resultadoApuesta = () => {
  let numeroPremiado = Math.floor(Math.random() * 6) + 1;
  document.getElementById("numeroGanador").textContent = numeroPremiado;
  listadoPremiados.push(numeroPremiado);

  if (numeroPremiado === numeroApostado) {
    alert("Has Ganado!");
    document.getElementById("resultadoApuesta").textContent = "HAS GANADO!";
    monedasGanadas = monedasApostadas;
    stockMonedas += monedasGanadas;
  } else {
    alert("Has Perdido!");
    document.getElementById("resultadoApuesta").textContent = "HAS PERDIDO!";
    monedasPerdidas = monedasApostadas;
    stockMonedas -= monedasPerdidas;
  }
  document.getElementById("monedasPerdidas").textContent = monedasPerdidas;
  document.getElementById("monedasGanadas").textContent = monedasGanadas;
  document.getElementById("stockActual").textContent = stockMonedas;

  if (stockMonedas <= 0) {
    alert("FIN DEL JUEGO. HAS PERDIDO TODAS LAS MONEDAS!!");
    finJuego();
  } else if (stockMonedas >= 100) {
    alert("FIN DEL JUEGO. HAS DERROTADO A LA BANCA!!");
    finJuego();
  }
};

// Finalizamos el juego
const finJuego = () => {
  document.getElementById("apostarNumerosButton").disabled = true;
  document.getElementById("apostarMonedasButton").disabled = true;
  document.getElementById("listadoNumeros").textContent = listadoPremiados;
};
