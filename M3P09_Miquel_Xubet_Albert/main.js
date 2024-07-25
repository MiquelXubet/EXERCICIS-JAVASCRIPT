const cargarFuncion = () => {
  document
    .getElementById("botonCrearTabla")
    .addEventListener("click", crearTabla);
};

const crearTabla = () => {
  const tabla = document.createElement("table");
  const tbody = document.createElement("tbody");

  for (let i = 0; i < 3; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const celda = document.createElement("td");
      celda.textContent = `Celda ${j + 1}, de la Fila ${i + 1}`;
      fila.appendChild(celda);
    }
    tbody.appendChild(fila);
  }
  tabla.appendChild(tbody);

  const contenedorTabla = document.getElementById("contenedorTabla");
  contenedorTabla.innerHTML = "";
  contenedorTabla.appendChild(tabla);
};
