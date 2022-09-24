//taza=object
//Js lenguaje es un paradigma basado en object, un object es una coleccion de propiedades y una property es un
// asociacion entre un nombre y un valor 
//los objects son la pieza principal es js, en lugar de declarar diferentes variables

/*const nombreProducto='monitor 20 pulgadas'
const precio=300
const disponible=true;*/

//esas tres lineas se  sustituyen por una sola
//const producto={
//    nombre:'Monitor',
//    precio:300,
//    disponible:true
//}
//accediendo a la informacion del objeto
//console.log(producto)
//console.log(producto.nombre)
//console.log(producto['precio'])

//producto.color= 'rojo' //esta es una manera de agregar propiedades a mi objeto, fuera del objeto mismo
//delete producto.disponible //esta es una manera de borrar una propiedad dentro de mi objeto

//const nombreProducto=producto.nombre //asignar el valor de una propiedad  hacia una variable
//nombreProducto= 'monitor de 25 pulgadas'

//Destructuring significa sacar datos de una estructura y asignarlos a variables de arreglos u objetos
//para hacer uso de esos datos
//const {nombre} = producto
//const {precio} = producto
//console.log(nombre);
//console.log(precio);
/*const usuarios={
    id:221514,
    status1:true,
    semestre:1,
    direccion: {
        calle:'Villas de Oriente',
        numero:104,
        fraccionamiento:'colinas de oriente'
    }, 
    informacion:{
        nombre:'Adriana Gzz',
        edad: '23 Años'
    }
}
//console.log(usuarios.informacion.calle)

usuarios.semestre= 4;
console.log(usuarios)
const {id,informacion, direccion: { calle,numero}} = usuarios

console.log(calle)
console.log(numero)
console.log(id)
console.log(informacion)
//-----------Metohod Object 1:Freeze 2:seal
Object.freeze(usuarios) //me congela el objeto para prevenir cambios, sin embargo no me dejara añadir 
//propiedades ni eliminar
usuarios.status1 = false;
console.log(usuarios)
//no me permite agregar ni eliminar, pero si puedo modificar
Object.seal(usuarios)
usuarios.informacion.edad = '24 años'*/

//-----------------------------------------------------------------------------
const producto={
    nombre: 'Monitor 20 pulgadas',
    precio: 200,
    dsiponible: true,
    mostrarInfo: function() {
        return `El producto: ${this.nombre} tiene un precio de ${this.precio}`}
    // la palabra reservada this es una propiedad que te va a hacer una llamada al valor de la 
    //propiedad, debe llevar comillas de concatenacion 
    // return te regresa el valor de un objeto de la propiedad, en este caso el nombre y precio
    
}
console.log(producto.mostrarInfo())
/*const medidas={
    peso:'1kg',
    medida:'1 metro',
}
//const resultado=Object.assign(producto, medidas)
console.log(producto)
console.log(medidas)

//------spread operator, su sintaxis debe llevar los tres puntos
const resultado={...producto,...medidas };
console.log(resultado)*/
