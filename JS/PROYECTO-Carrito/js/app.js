//declaracion de variables
const carrito = document.querySelector('#carrito'); //carrito es un id en html
const contenedorCarrito = document.querySelector('#lista-carrito tbody');//lista-carrito es un id en 
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []; //declaramos un arreglo

//listeners
cargarEventListeners(); //declaramos una funcion

function cargarEventListeners() { //lo que va en llaves es lo que va realizar la funcion
    document.addEventListener('DOMContentLoaded', getLocalStorage)
    listaCursos.addEventListener('click', agregarCurso);//añadimos un evento al elemento para eso es el addEventListener
    carrito.addEventListener('click', eliminarCurso); //el 'click' es un evento dentro de js, lo que hace es que al momento de hacer click va hacer una ccion
    // te va agregar el curso , el addEventListener es  un metodo ya predefinido para eventos
    vaciarCarritoBtn.addEventListener('clicK', vaciarCarrito);
}

// funcion Agregar al carrito
function agregarCurso(e) { //en parentesis debe llevar el nombre del curso
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}
//target es una propiedad hace la referencia de lo que hace el evento, se ejecuta cuando hace el clic en agregar-carrito, contains es un metodo
//el contains nos va regresar un resultado booleano, si es true es que si hay elementos dentro de nuestra funcion entonces me hace lo siguiente
//curso va tomar el valor del nodo, que son todas las propiedades, los datos del curso que le dieron click  
//leer datos del curso
function leerDatosCurso(curso) { //la funcion va accesar a los datos del curso 
    const infoCurso = { //declaramos la constante
        imagen: curso.querySelector('img').src, //la imagen se accede mediante su ruta con .src
        titulo: curso.querySelector('h4').textContent, //se  accede a la infromacion con .textContent
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),  //el getAttribut se obtiene mediante un metodo,estoy entrando directo al 
        //enlace con ('a') y por eso se hace de esta forma, cada input lleva un id, los id se usan en js y estos se leen con el getAttribut 
        cantidad: 1 //contador
    }
    if (articulosCarrito.some(curso => curso.id === infoCurso.id)) { //infoCurso es un objeto
        //metodo 'some' nos va a comprobar si al menos un elemento del arreglo cumple con la condicion implementada por la funcion establecida, si es verdad entonces hara lo siguiente, esto es para cuando ya hay uno en el carrito, solo te va incrementar la cantidad.
        const cursos = articulosCarrito.map(curso => {//hace el recorrido para ver si lo encuentra y si es que si, solo se incrementa en cantidad
            //declaramos la constante cursos, utilizamos el metodo 'map' para hacer un arreglo con la informacion de curso.id
            if (curso.id === infoCurso.id) { //si el valor es true entonces
                curso.cantidad++; //incremento mi variable cantidad
                return curso;

            } else {
                return curso;
            } // sino retorna el valor que tenia curso
        })
        articulosCarrito = [...cursos];// a mi array le agrego el valor que tenga mi constante cursos
    } else { articulosCarrito = [...articulosCarrito, infoCurso]; } //sino a mi array le pongo lo que contiene mi arreglo mas lo que contiene infoCurso
    console.log(articulosCarrito)
    carritoHTML();
}

//-------------eliminar
function eliminarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        //
        const cursoId = e.target.getAttribute('data-id')
        //eliminar del arreglo del carrito
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        //filter es un filtro que se le aplica articulosCarrito  y nos crea un nuevo arreglo
        carritoHTML();
    }

}
//--------------------localstorage--------------------------------
function getLocalStorage(){ 
    articulosCarrito=JSON.parse(localStorage.getItem('carrito'))||[] 
    carritoHTML();
}
function setLocalStorage(){
    localStorage.setItem('carritoHTML',JSON.stringify(articulosCarrito))
}
//------------------------------------------------------------------
function carritoHTML() {
    vaciarCarrito();
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
               <td>
                  <img src=${curso.imagen} width=100>
               </td>
                 <td>${curso.titulo}</td>
                 <td>${curso.precio}</td>
                 <td>${curso.cantidad}</td>
                 <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
               </td>` ;
        contenedorCarrito.appendChild(row); // el DOM se maneja por nodos, Child(son los hijos) agrega un nuevo nodo al final de la lista de los elementos,entre parentesis va la infromacion que se le va agregar
    });
 setLocalStorage();
}
//----------------Vaciar Carrito
function vaciarCarrito() {
    //forma lenta
    //contenedorCarrito.innerHTML=''
    //forma rapida
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild) //removeChild se elimina el hijo primero de la lista.
    }
    
    localStorage.clear()
}









