window.onload = () => {
  let enlaces = [];

  document.getElementById("numero").addEventListener("click", function () {
    enlaces = document.getElementsByTagName("a");
    const count = enlaces.length;

    document.getElementById(
      "parrafo"
    ).innerText = `El número de enlaces en esta página es de ${count}`;
    console.log(`El número de enlaces es de ${count}`);
  });

  document.getElementById("penultimo").addEventListener("click", function () {
    enlaces = document.getElementsByTagName("a");
    const penultimoEnlace = enlaces[enlaces.length - 2];

    document.getElementById(
      "parrafo"
    ).innerText = `El penúltimo enlace de esta página es ${penultimoEnlace}`;
    console.log(enlaces[enlaces.length - 2]);
  });

  document.getElementById("twitter").addEventListener("click", function () {
    const enlacesTwitter = document.querySelectorAll('a[href*="twitter.com"]');
    const countTwitter = enlacesTwitter.length;

    document.getElementById(
      "parrafo"
    ).innerText = `El número de enlaces a twitter de esta página es de ${countTwitter}`;
    console.log(
      `El numero de enlaces de twitter a esta página es de ${countTwitter}`
    );
  });

  document.getElementById("parrafo3").addEventListener("click", function () {
    enlaces = document
      .getElementById("tercerParrafo")
      .getElementsByTagName("a");
    const count = enlaces.length;

    document.getElementById(
      "parrafo"
    ).innerText = `El número de enlaces del tercer párrafo es de ${count}`;
    console.log(`El número de enlaces del tercer párrafo es de ${count}`);
  });
};
