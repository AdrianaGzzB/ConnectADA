//GET-obtener (obtengo algo que yo ya le habia  dado que me guardara con el set)
//SET-asignar (con el set, le tengo que dar al servidor lo que yo quiero que me almacene)

//llave-valordellave (puede ser cualquier nombre, hay que tener cuidado en el valor de lo que guardo)
//el tipo de dato que va almacenar el local storage es 'string' asi que para utilizarla 
//vamos a tener que hacer una conversion de la 

setLocalStorage();
//siempre se va utilizar jason cuando tu intencion es intercambiar informacion con nuestro servidor

getLocalStorage();

function getLocalStorage(){ 
    if(localStorage.getItem('nombre')){
    let nombre=localStorage.getItem('nombre')
    let usuario=JSON.parse(localStorage.getItem('usuario'));
    //el parse lo convierte a su tipo de dato original
    console.log(nombre)
    console.log(usuario)
    }else{
        console.log('No mostramos datos porque no se encontro informacion que leer')
    }
}

function setLocalStorage(){
        let usuario={
            nombre:'Adriana',
            edad:20,
            correo:'Adriana@Adry.com'
        };
        let nombre='Adriana'
        localStorage.setItem('nombre',nombre) //string

localStorage.setItem('usuario',JSON.stringify(usuario));
//setItem asigna la informacion de usuario(objeto) al local storage,stringify convertir la informacion a 'string'
localStorage.clear(); //limpio la informacion que esta guardada
} 

function borrar(){
    localStorage.clear();//esta es una mejor practica crear el borrar la informacion por aparte
}