//const paises=['Francia','España','Protugal','Mexico','Argentina']
//async

/*function nuevoPais(pais,callback){
    setTimeout(()=>{
        paises.push(pais)
        callback()
    },3000)
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais=>{
            console.log(pais)
        })
        
    }, 2000);
}
*/
//mostrarPaises()
//nuevoPais('Alemania',mostrarPaises)
//----------callbackHell o una llamada infernal
//callback hells es un callback que se repite muchas veces y es muy dificil y peligroso de tronar cuando ya esta en funcionamiento
const paises=[]
function nuevoPais(pais,callback){
        paises.push(pais)
        console.log(`Agregado: ${pais}`)
        callback()
}

function mostrarPaises(){
            console.log(paises)
    }

function iniciarCallbackHell(){
    setTimeout(()=>{
        nuevoPais('Alemania',mostrarPaises)
        setTimeout(()=>{
            nuevoPais('Mexico',mostrarPaises)
            setTimeout(()=>{
                nuevoPais('Francia',mostrarPaises)
            },3000)
        },3000)
    },3000)
}
iniciarCallbackHell()

//diseño modular es una serie de pasos para poder darle a la persona el costo y tiempo estimado del proyecto y es una manera de prevenir caer en un callbackHell

//


