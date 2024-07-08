const elegirMenu = () => {
  const primerosPlatos = [
    "Ensalada verde",
    "Sopa de Pescado",
    "Macarrones Bolognesa",
    "Melón con jamón",
    "Alcachofas al horno",
  ];
  const segundosPlatos = [
    "Merluza con guarnición",
    "Huevos fritos con chorizo",
    "Hamburguesa con patatas",
    "Lenguado con verduras",
    "Solomillo con pimientos",
  ];

  let primerPlatoNum = prompt("Escoja el Primer plato");
  let segundoPlatoNum = prompt("Escoja el Segundo plato");

  primerPlatoNum = parseInt(primerPlatoNum) - 1;
  segundoPlatoNum = parseInt(segundoPlatoNum) - 1;

  if (
    primerPlatoNum >= 0 &&
    primerPlatoNum < primerosPlatos.length &&
    segundoPlatoNum >= 0 &&
    segundoPlatoNum < segundosPlatos.length
  ) {
    const primerPlato = primerosPlatos[primerPlatoNum];
    const segundoPlato = segundosPlatos[segundoPlatoNum];

    alert(
      `Ha elegido de Primer plato ${primerPlato} y de Segundo Plato ${segundoPlato}`
    );
  } else {
    alert("Número incorrecto. Vuelva a realizar su elección");
  }
};
