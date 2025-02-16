function obtenerFechaHora() {
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const ahora = new Date();
  const diaSemana = dias[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const anio = ahora.getFullYear();
  const horas = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");

  return `Hoy es ${diaSemana}, ${dia} de ${mes} de ${anio}, y son las ${horas}:${minutos} horas`;
}

document.getElementById("fecha-hora").textContent = obtenerFechaHora();
