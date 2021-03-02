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

  console.log("Agregando Tweet");
}
