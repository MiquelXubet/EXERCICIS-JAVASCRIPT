const validarFormulario = (event) => {
  const formulario = document.forms["datosDeUsuario"];
  const nombre = formulario.user;
  const email = formulario.mail;
  const password = formulario.password;
  const repeatPassword = formulario.repeatPassword;
  const mensajeError = document.getElementById("mensajeError");

  mensajeError.innerHTML = "";

  if (nombre.value.length < 4) {
    mensajeError.innerHTML = "El usuario debe tener al menos 4 caracteres";
    event.preventDefault();
    return false;
  }

  const expresion =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!expresion.test(email.value)) {
    mensajeError.innerHTML += "El email no es válido";
    event.preventDefault();
    return false;
  }

  if (password.value !== repeatPassword.value) {
    mensajeError.innerHTML += "La validación del password no coincide";
    event.preventDefault();
    return false;
  }
};

window.addEventListener("load", () => {
  const formulario = document.forms["datosDeUsuario"];
  formulario.onsubmit = validarFormulario;
});
