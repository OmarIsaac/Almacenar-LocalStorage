// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = []; // arreglo que almacenara todos los tweets
// Event Listeners
eventListeners();
function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
}
// Funciones
function agregarTweet(e) {
  e.preventDefault();

  // textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value; // accedemos al valor

  // Validacion
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacio");
    return;
  }
  console.log("agregando tweets");
}

// Mostrar mensaje de error

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // Despues de 3 seg se elimina el mensaje de error
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}
