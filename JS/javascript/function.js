//-----------------------dos maneras de declarar las funciones
//function nombreFuncion(x){
//    suma=num+x
//}
//nombreFuncion() 
//function suma(){
   // console.log(2+2)
//}
//suma() //2+2

//-------------------------------------------------------
//const suma1=function(){
//    console.log(3+3)
//}
//suma1()
//---------------------importante---------------
//Hoisting -- se ejecuta con doble vuelta, primero crea todas las funciones y luego ejecuta
// todas las operaciones
//suma1();//esto es incorrecto
//const suma1=function(){
//    console.log(3+3)
//}
//lo correcto es 
/*const suma1=function(){
    console.log(3+3)
}
suma1();//esta es la manera correcta, despues de que hacemos la operacion, nuestra funcion ya tiene un valor y 
//podemos mandarlas llamar, no al principio
alert('Hubo un error')
prompt('Cual es tu edad')*/
//----------------------
/*const numero1=20;
const numero2= '20';
console.log(parseInt(numero2))//funcion
console.log(numero1.toString)//metodo*/
//----------------------------------parametros reales
/*function saludo(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido} tu edad es ${edad}`)
}
saludo('Adriana', 'Gonzalez') //esto va imprimir Hola Adriana Gonzalez
saludo(); //esto va imprimir Hola indefinido indefinido
//-----------------------------------parametros por default
function saludar(nombre='desconocido', apellido=''){ //aqui en apellido es lo que va mandar por defaul y no te lo marca
    //como indefinido sino que como lo dejaste en blanco, que es que puede haber como no y no pasa nada.
    console.log(`Hola ${nombre} ${apellido} `)
}
saludar('Adriana, Regalado')
saludar('Adriana');*/
//-------------------------------------
//como hacer que al llamar una funcion me arrastre en automatico las otras funciones.
/*
iniciarApp()
function iniciarApp(){
    console.log('Iniciando App........') 
    segundaF();    
}
function segundaF(){
    console.log('Elige tu usuario')
    inicioSesion('Adriana')     
}
function inicioSesion(usuario){
    console.log('Autenticacion usuario...')  
    console.log(`usuario autenticando existosamente, Bienvenida ${usuario}`)   
}*/
//-----------------------------------------
/*
function suma(a,b){
    return a+b
}
const resultado=suma(1,2)
console.log(resultado)

let total=0;
function agregarCarrito(precio){
    return total+=precio; //con el += estoy sumando y acumulando
}
function calcularImpuesto(total){
    return 1.15*total
}
total=agregarCarrito(500)
console.log(`El precio antes de impuesto es de ${total}`)
const totalPago=calcularImpuesto(total) //es constante porque siempre el totalPago siempre sera el total del proceso de calcularImpuesto
console.log(`El total a pagar es de ${totalPago}`)*/

//---------------metodos de propiedad----------------------------------
//se utiliza cuando la funcion es muy grande y es una combinacion de objeto y funcion
/*const reproductor={ 
    reproducir:function(id){
    console.log(`Reproduciendo cancion id ${id}`)
    },
     pausar: function() {
        console.log('pausando...')
    },
     borrar: function(id){
        console.log(`Eliminando la cancion con id ${id}`)
     },
     crearPlayList: function(nombre) {
        console.log(`Creando la playList ${nombre}`)
     }
    }
reproductor.reproducir(25);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlayList('Connect.Ada') */

//--------------------arrowfunctions
/*Cuando se ejecuta una sola linea de codigo no se necesita  poner llaves

const funcion1= function() {
    console.log('Aprendiendo js')
}
//otra forma de hacerlo mas facil es con el arowFunctions
const funcion2=(nombre) => console.log(`usando ArrowFunctions soy ${nombre}`)

funcion2('Adriana')
funcion1()*/