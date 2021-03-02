// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = []; // arreglo que almacenara todos los tweets
// Event Listeners
eventListeners();
function eventListeners() {
  // cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);
  // cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    crearHTML();
  });
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

  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];
  // Crear HTML
  crearHTML();
  //Reiniciar el formulario
  formulario.reset();
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

// mostrando un listado de los tweets

function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // agregar boton de eliminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";
      // añadir funcion de eliminar
      btnEliminar.onclick = () => {
        borrartweet(tweet.id);
      };
      // creando el HTML
      const li = document.createElement("li");
      // añadir el texto
      li.innerText = tweet.tweet;

      // agregar el boton
      li.appendChild(btnEliminar);

      //insertar en el HTML
      listaTweets.appendChild(li);
    });
  }
  sincronizarStorage();
}
// agregando los tweets actuales al localStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
// elimina un tweet
function borrartweet() {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML();
}
// limpiar el HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
