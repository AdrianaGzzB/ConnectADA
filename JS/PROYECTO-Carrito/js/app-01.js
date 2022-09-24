//set permite almacenar valores unicos de culquier tipo a diferencia del map que si permite valores duplicados
//el set es una lista de valores y el map crea un objeto
//un set te permite crear una lista de valores 
/*let carrito=new Set()
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')
carrito.add('Disco #4')
console.log(carrito.size)//el size me regresa el puro valor del largo de mi lista

//comprobar que un valor existe en el set con el has, este te regresa un valor booleano
console.log(carrito.has('Camisa'))
//en el delete un falso es que no encontro el elemento que quiere eliminar
//console.log(carrito.delete('Disco #4'))
//una manera de verificar si se borro el elemento es imprimiendo toda la lista y ya no debe de aparecer, o de la siguiente manera,
//si el resultado me arroja un false es que no lo encontro 
console.log(carrito.has('Disco #4'))


//manera de crear un arreglo con el set primera opcion
//let numero=[1,2,3,4,5]
//let numeros=new Set(numero)
//console.log(arreglo)

//segunda opcion
let numeros=new Set([1,2,3,4,5])
console.log(numeros)

//estamos iterando nuestro set con el forEach
//carrito.forEach((producto,index)=>{
//    console.log(producto)
//    console.log(index)
//})

//concatenacion
carrito.forEach((producto,index)=>{
    console.log(`$[{index}: ${producto}`)
})
//convertir un set en un array se hace por medio de un sprin
const arrayCarrito=[...carrito]
console.log(arrayCarrito)
carrito.clear() //limpia todo lo que contiene el set
console.log(carrito)

//WeakSet
//pasa o agrega objetos
let ws=new WeakSet();
const cliente={ //cliente es igual a mi objeto
    nombre:'Adriana',
    saldo:300,
}
const nombre='Monse'
const cliente2={
    nombre:'Andy',
    saldo:1000,
}
ws.add(cliente)
ws.add(cliente2)
//ws.add(nombre) //es invalido porque el ws solo acepta objetos a diferencia del set
//ws no cuenta con la propiedad del size, pero tiene el length
//ws no son iterables, no tiene llaves no tiene keys
//ws es para guardar un arreglo de objetos
//console.log(ws.has(cliente))
console.log(cliente2)
console.log(ws.delete(cliente))
console.log(ws.has(cliente))
*/
//diferencias entre set y maps
//un objeto permite una propiedad
/*let cliente=new Map(); //metodo map
cliente.set('nombre','Adriana'); //metodo set dentro del map
cliente.set('categoria','Premium')
cliente.set('saldo','300');
console.log(cliente)

console.log(cliente.get('nombre'))
console.log(cliente.get('categoria'))
console.log(cliente.get('saldo'))
//metodos del map
console.log(cliente.size)//el size me da el tamaño
console.log(cliente.has('categoria')) //true
console.log(cliente.has('tipo')) //false
//cliente.delete('saldo') //borra solo saldo
console.log(cliente.has('saldo'))
//cliente.clear() //limpia todo lo que hay
//console.log(cliente)

//inicializando el map con diferentes valores
const paciente=new Map([
    ['nombre','paciente'],
    ['habitacion','undefined'],
])
paciente.set('nombre','Adriana')//con el set asignas el valor a la llave
paciente.set('habitacion','piso1-H3')
console.log(paciente)
cliente.forEach((datos,index) => {  //iteramos
    //console.log(datos)
    console.log(`${index}: ${datos}`)
});*/
//symbol , son nuevos elementos en js
//el tipo symbol agregan propiedades a nuestro objeto a manera de que sean unicas, nos permite obtener valores que no se pueden volver a crear, se utilizan como identificadores unicos e inmutables.
//se utilizan para un id, nip,  son claves que son unicas
const sym=Symbol() //entre parentesis va la descripcion del simbolo
const sym2=Symbol()
/*if(sym===sym2){ //su valor es igual pero su variable es unica y por eso son diferentes
    console.log('Son iguales!!')
}else{
    console.log('Son diferentes')
} */
console.log(Symbol()===Symbol()); //false
let nombre=Symbol()
let apellido=Symbol()
//creando un objeto vacio
let persona={ //dentro de aui no podemos declarar los Symbol, solo las propiedades del objeto

}
 //acceder a la informacion
 //persona.datos; //la sintaxis del Symbol para accesar no es con punto sino con corchetes
 persona[nombre]='Adriana' //sintaxis para acesar a la informacion en Symbol
 persona[apellido]='Gonzalez'
 persona.categoria='Premium' //agregar propiedades a nuestro objeto
 persona.saldo=500
 console.log(persona)
 //tambien se puede crear una descripcion de symbol
 let nombreCliente=Symbol('Nombre del cliente')
 let cliente={}
 cliente[nombreCliente]='Adriana'
 console.log(cliente)



