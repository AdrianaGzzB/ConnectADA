/*creacion de arreglo
//const edades=[19,25,16,40]
//--indice----0--1--2--3
//console.log(edades);
//const deTodo=['Enero', 'febrero', 'Marzo', 10, true,[1,2,3,4], {nombre:'Adry', trabajo:'developer'}]
//console.log(deTodo)
//acceder al arreglo, a un dato especifico, el arreglo su indice comienza en cero
//console.log(edades[2])
//console.log(deTodo[5])

const meses=['Enero','Febrero', 'Marzo','Abril','Mayo', 'Junio']
console.log(meses.length); //para saber el largo de mi arreglo, solo imprimer el numero del largo sin datos
//accediendo a los elementos se le llama ITERANDO, esto se hace cuando son muchos datos y se va buscar durante 
//el largo de mi arreglo(con el length se cual es el largo de mi arreglo )
for(let i=0;i<meses.length;i++) {
//    console.log(meses[i])
}
//Modificar el valor de un const, sin importar el tipo de dato
meses[2]='Julio'
console.log(meses); */
//--------------Carrito de compras
/*const carrito=[];
//añadir elementos al carrito de compra
const producto1={
    nombre:'Celular',
    precio:500
}
const producto2={
    nombre:'Pantalla 50',
    precio:100
}

//push lo que hace es añadir las propiedades del objeto a un arreglo que en este caso se llama carrito
//carrito.push(producto1)
//carrito.push(producto2)
//console.log(carrito)
const producto3={
    nombre:'teclado',
    precio:50
}
//carrito.unshift(producto3) //unshift te añade el objeto al inicio del arreglo
let resultado=[...carrito, producto1]; //tot=tot+num
resultado=[...resultado,producto2];

resultado=[producto3,...resultado] //agrega el producto 3 al inicio de la lista
//...spread Operator  
console.log(resultado)*/
/*
const carrito=[];
const producto1={
    nombre:'Celular',
    precio:500
}
const producto2={
    nombre:'Pantalla 50',
    precio:100
}
const producto3={
    nombre:'teclado',
    precio:50
}
const producto4={
    nombre:'mouse',
    precio:50
}
carrito.push(producto1) //lo que hace un push es unir
carrito.push(producto2) //unir los objetos al arreglo
carrito.push(producto4)
carrito.unshift(producto3) //añadir al inicio del carrito
//carrito.shift(); //elimina el primer elemento
//carrito.pop(); //elimina el ultimo elemento
carrito.splice(1,2); //el primer numero indica la posicion y el segundo cuantos elementos se van a eliminar)
console.log(carrito)*/
//--------------------------Destructuracion-----------------------------------------------
/*const numero =[10,20,30,40,50];
const [primero,segundo, , ,quinto]=numero; //te da el valor por posicion, te va a acceder al numero de esa posicion
console.log(primero)
console.log(segundo)
console.log(quinto)
//desarmamos todo nuestro arreglo igual como lo hacemos con objetos */
//---------------------for
const carrito=[
    {nombre:'Monitor de 32 pulgadas', precio:500},
    {nombre:'Monitor de 50 pulgadas', precio:700},
    {nombre:'Tablet', precio:800},
    {nombre:'Teclado', precio:300},
    {nombre:'mouse', precio:600},
]
//forma tradicional de recorrer un arreglo y mostrar su contenido
//for(let i=0;i<carrito.length;i++){
//    console.log(`Articulo: ${carrito[i].nombre}Precio:$ ${carrito[i].precio}`)
//}
//forma mas moderna de recorrer un arreglo  ----foreach----
//metodo foreach que va a hacer una funcion para un metodo de un arreglo
carrito.forEach(function(producto){
console.log(`Articulo:${producto.nombre} precio$ ${producto.precio}`)
})


