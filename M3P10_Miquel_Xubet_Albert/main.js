class Persona {
  nombre;
  apellido;
  edad;

  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

const personas = [];

document.getElementById("añadir").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  const nuevaPersona = new Persona(nombre, apellido, parseInt(edad));
  personas.push(nuevaPersona);
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  console.log(personas);
});

document.getElementById("mostrar").addEventListener("click", function () {
  const lista = document.getElementById("listaDePersonas");
  lista.innerHTML = "";

  personas.forEach((persona) => {
    const item = document.createElement("li");
    item.textContent = `Nombre: ${persona.nombre}, Apellido: ${persona.apellido}, Edad: ${persona.edad}.`;

    lista.appendChild(item);
  });
});
