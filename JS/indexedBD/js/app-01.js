//indexDB
//es una API en js para almacenar grandes cantidades de datos estructurados
//a diferencia de LocalStorage puede almacenar strings, booleans e incluso archivos, en realidad cualquier tipo de dato soportado por js
//no tiene "limites" conocidos, aunque los archivos de mas de 50mb van a requerir permisos
//existene muchos metodos 
//creando una base de datos
let DB;
//aqui mandamos llamar la funcion mediante el evento addEventListener
document.addEventListener('DOMContentLoaded', ()=>{
    nuevaDB()
    //despues de 3 segundos me ejecuta mi crear cliente
    setTimeout(()=>{crearCliente()
    },3000)
})
//creando una base de datso
//ya que creamos la funcion ahora tenemos que crear o configurar la BD 
function nuevaDB(){
    //asi abrimos una base de datos, con la siguiente peticion, open abre la DB
    let crmDB=window.indexedDB.open('myFirstDB', 1)
    //entre parentesis va el nombre de la DB
    //crear un manejador de datos (onerror), si hay un error, lanzarlo
    crmDB.onerror=function(){
        console.log('Hubo un error al a rir la base de datos')
    }
    crmDB.onsuccess=function(){
        //console.log('todo esta listo!')
        DB=crmDB.result;
        console.log(DB)
    }
    //crear o configurar la BD, vienen siendo como las filas y columnas que vamos a necesitar en nuestra BD
    //este metodo solo se ejcuta una vez
    crmDB.onupgradeneeded=function(e){
        //el evento que se va a correr, tomamos la DB del evento que se ejecuta
        let database=e.target.result;

        //crear nuestros objetos , para poder manejar nuestra informacion
        //la KeyPath se conoce como la llave primaria es por la cual vamos a hacer nuestras consultas
        //en este caso se va hacer por id, lleva el nombre de la DB y las opciones
        //las llaves que se van a generar son consecutivas 
        let objectStore=database.createObjectStore('myFirstDB',{KeyPath:'ID',autoIncrement:true})
        //creatIndex, espera el nombre, la llave y opcion es lo que va en las llaves
        //este metodo me ayuda a crear las columnas que va tener mi DB
        objectStore.createIndex('nombre','nombre',{unique:false})
        objectStore.createIndex('email','email',{unique:true})
        objectStore.createIndex('telefono','telefono',{unique:false})
        console.log('DB creada y lista')
    }
}
//darle los valores a las llaves que ya cree
function crearCliente(){
//en DB se guarda la base de datos
    let trans=DB.transaction(['myFirstDB'],'readwrite');
    trans.oncomplete=function(){
        console.log('Transaccion completada')
    }
    trans.onerror=function(){
        console.log('Hubo un error en la transaccion')
    }
    let objectStore=trans.objectStore('myFirstDB')
    console.log(objectStore)
    const nuevoCliente={
        nombre:'Adry',
        email:'adry@adry.com',
        telefono:12321221
    }

    let peticion=objectStore.add(nuevoCliente)
    console.log(peticion)
}