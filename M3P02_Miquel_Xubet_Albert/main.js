// Calcular el radio de una esfera
// Volumen = ( 4/3 ) * PI * radio al cubo

const radio = prompt(`Ingrese el radio de la esfera:`);
const PI = Math.PI;
const radio3 = Math.pow(radio, 3);
const formula = "V = (4 / 3) * pi * radio3";
const resultado = (4 / 3) * PI * radio3;

console.log(
  `El Volumen de una esfera se calcula ${formula} por tanto, una esfera de radio ${radio} tiene un volumen de ${resultado}.`
);
