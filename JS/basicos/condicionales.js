//-------------------------CICLO-------------------------------------------------------
/*if (true) {
      console.log("La condición es verdadera.");
    }
    
    // Condición verdadera (true).
    
    var x = 5;
    
    if (x > 2) {
      console.log("La condición es verdadera");
    }
    
    var x=20;
    if (x > 2 && x < 10) {
      console.log("La condición es verdadera");
    }*/
//var a=8;
//(a<5)||(a<15)
//a=2;
//console.log((a<5)||(a>15));
//console.log((a<5)&&(a>15));
//--------------------------------------------FUNCION------------------------------------------------
//declarando una funcion, patron de una funcion declarada o simple
//function nombbreDeLaFuncion(argumento:parametro1,parametro2,....){todo adentro es el cuerpo de la funcion})
//como invoco o llamo a la funcion:nombreDeLaFuncion(parametro1,parametro2);
/*forma1
function retornarMinimo(x,y){ //retornando el valor minimo
    if(x<y){
        return x;
    } else{
        return y;
    }
}
//forma2
function retornarMinimo(x,y) {
    return x<y ? x:y; //el operador ternario es el signo de pregunta '?'
}
 console.log(retornarMinimo(8, 7));*/
//--------------------------------FOR------------------------------------------------------
// resuelve un problema donde imprimas los multiplos de 5 en un rango del 1 al 100 
 
/*for (var i = 1; i <= 100; i++) { 
    let resto = i % 5; 
    if(resto === 0){ 
        console.log(i); 
    } 
     
}*/
//----------------------------------------------------------------------------------- 
/* 
   Tabla de verdad del operador OR  
   Para: X || Y 
   |  X  |  Y  | X || Y |  
   ----------------------- 
   |  T  |  T  |    T   | 
   |  T  |  F  |    T   | 
   |  F  |  T  |    T   | 
   |  F  |  F  |    F   | 
  La expresión es verdadera si alguno de los dos operandos  
  o ambos son verdaderos. 
*/
//-----------------CASE o SWITCH------------------------------------------------------------
/*function clasificarValor(valor) { 
    var respuesta='nada'; 
    switch (valor) { 
      case 1: 
        respuesta = "alpha"; 
        break; 
      case 2: 
        respuesta = "beta"; 
        break; 
      case 3:  
        respuesta = "gamma"; 
        break; 
      case 4: 
        respuesta = "delta"; 
        break;    
    } 
    return respuesta; 
  } 
 
 console.log(clasificarValor(1));*/
//-------------------------------while,do while------------------
 /*var miArreglo = []; 
console.log(miArreglo); 
 
var i=1; 
while (i < 10) { 
  miArreglo.push(i); 
  i=i+3; 
} 
console.log(miArreglo);
var x=0; 
do { 
  console.log(x); 
  x++; 
} while (x < 10);
let resultado=0;*/
//--------------------------------------------------------------------------------
/*formas posibles de declarar una funcion 
//funcion simple 
function add2(x, y) {  return x + y; }; 
//----------------------------------------------------------------------- 
// funcion anonima asignada a una variable 
// cuando asignas una funcion a una variable, esta se vuelve de tipo funcion 
let add1 = function(x, y) {  return x + y; }; 
//----------------------------------------------------------------------- 
// funcion arrow asignada a una variable 
let add3 = (x, y) => { return x + y }; // una funcion anonima o arrow function 
//----------------------------------------------------------------------- 
// funcion arrow simplificada asignada a una variable 
// la uso cuando hago una sola operacion dentro de la funcion 
let add4 = (x, y) => x + y; 
//----------------------------------------------------------------------- 
//console.log(add1(add2(1,1),2)); // concatenacion o anidacion de funciones una dentro de otra 
console.log(add2(2,2)); 
console.log(add4(3,3));*/
