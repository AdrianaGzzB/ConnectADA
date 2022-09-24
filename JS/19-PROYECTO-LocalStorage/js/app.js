//variable
const listaTweets = document.querySelector('#lista-tweets')
const formulario = document.querySelector('#formulario')
let tweets = [];

//event Lesteners

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
    listaTweets.addEventListener('click', borrarTweet);
    document.addEventListener('DOMContentLoaded',getLocalStorage);


}

//funciones
function agregarTweet(e) {
    e.preventDefault();
    //extraer el valor del textarea
    const tweet = document.querySelector('#tweet').value;

    //valiadacion
    if (tweet === '') {
        mostrarError('Un tweet no puede ir vacio');
        return;
    }
    //creamos un onjeto con la finalidad de hacer un registro temporal de nuestro tweet
    const tweetObj = {
            id: Date.now(), //
            texto: tweet
        }
        //Añadirlo a los tweets
    tweets = [...tweets, tweetObj];

    //renderizar
    crearHTML();
    //reiniciar
    formulario.reset();
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}

function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {

        tweets.forEach(tweet => {
            //crear el boton de eliminar
            const botonBorrar = document.createElement('a');
            botonBorrar.classList = 'borrar-tweet';
            botonBorrar.innerText = 'X'

            //crear elemento y añadirlo a una lista
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.texto;

            //añadimos el boton de borrar
            li.appendChild(botonBorrar);

            //atributo unico
            li.dataset.tweetId = tweet.id;

            //añadir el tweet a la lista
            listaTweets.appendChild(li)
        })
    }

  setLocalStorage();
}

function getLocalStorage(){
 tweets=JSON.parse(localStorage.getItem('tweets'))
 crearHTML();
}
function setLocalStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets))
}

function borrarTweet(e) {
    e.preventDefault();

    // console.log(e.target.parentElement.dataset.tweetId);
    const id = e.target.parentElement.dataset.tweetId;
    tweets = tweets.filter(tweet => tweet.id != id);
    crearHTML();


}

function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}