document.getElementById("btn_media").onclick = function () {
  const nota1 = parseFloat(prompt("Introduzca la nota 1:"));
  const nota2 = parseFloat(prompt("Introduzca la nota 2:"));
  const nota3 = parseFloat(prompt("Introduzca la nota 3:"));
  const nota4 = parseFloat(prompt("Introduzca la nota 4:"));
  const nota5 = parseFloat(prompt("Introduzca la nota 5:"));
  const nota6 = parseFloat(prompt("Introduzca la nota 6:"));

  const notaMedia = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;
  let notaFinal;

  if (notaMedia < 3.0) notaFinal = "Muy Deficiente";
  else if (notaMedia < 5.0) notaFinal = "Insuficiente";
  else if (notaMedia < 6.0) notaFinal = "Suficiente";
  else if (notaMedia < 7.0) notaFinal = "Bien";
  else if (notaMedia < 9.0) notaFinal = "Notable";
  else if (notaMedia <= 10.0) notaFinal = "Sobresaliente";
  else notaFinal = "Nota incorrecta";

  document.getElementById("nota_media").innerText = notaMedia.toFixed(2);

  document.getElementById("nota_media_final").innerText = notaMedia.toFixed(2);
  document.getElementById("nota_final").innerText = notaFinal;
};
