const nota = prompt("Introduzca la nota");

if (nota < 3.0) {
  alert("Muy Deficiente");
} else if (nota < 5.0) {
  alert("Insuficiente");
} else if (nota < 6.0) {
  alert("Suficiente");
} else if (nota < 7.0) {
  alert("Bien");
} else if (nota < 9.0) {
  alert("Notable");
} else if (nota < 10.01) {
  alert("Sobresaliente");
} else {
  alert("Nota incorrecta");
}
