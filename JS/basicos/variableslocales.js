var miVariableGlobal = 4;
console.log(miVariableGlobal);


function miFuncion() { //todo lo que esta dentro de las llaves es la funcion
  console.log(miVariableGlobal);//aqui la variable vale 4
  var miVariableLocal = 8; //estoy declarando 
  console.log(miVariableLocal);
}//aqui termina la funcion
miFuncion();

