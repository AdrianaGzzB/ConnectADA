//una promesa es cuando alguien promete algo
//tres metodos que tienen las promesas (then(entonces), catch(error), finally(es un callback  que me devuelve la promesa))
/*const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento se ha aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    }
})
//resolve(es para la respuesta satisfactoria, cuando la promesa se cumple y el reject(es para el error))
//siempre que la promesa falle ahi va estar el catch para atraparla

aplicarDescuento
  .then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})
console.log(aplicarDescuento)*/

//callback to promise
//es una declaracion de funcion a una promesa
const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Se agrego el pais: ${pais}`)
    }, 3000)
})
//esta nueva funcion
nuevoPais('Mexico')
    .then(resultado => {
        console.log(resultado) //se agrego el pais Mexico
        console.log(paises) //enseñame el arreglo con Mexico y EUA
        return nuevoPais('EUA') //regreso la funcion con el parametro que espera, en este caso EUA pero puede ser cualquier otro pais.
    })
    .then(resultado => {
        console.log(resultado)//se agrego EUA
        console.log(paises)//se agrego Mexico y EUA
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado)//se agrego Francia
        console.log(paises)//se agrego Mexico,EUA y Francia
    })





