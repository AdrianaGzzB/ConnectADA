//------------Variables
const formulario = document.querySelector('#enviar-mail')
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const btnEnviar = document.querySelector('#enviar')
const btnReset = document.querySelector('#resetBtn')
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//-------------------Eventos
eventListeners()
function eventListeners() {
    //el DOMContentLoaded carga todo nuestro documento(HTML) al navegador y es por eso que nos aparece nuestra pagina
    // web con todos los elementos que hicimos.  
    document.addEventListener('DOMContentLoaded', inicioApp)
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    //boton de reset
    formulario.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetFormulario);

    //el evento 'blur' se ejecuta cuando el elemento pierde su propiedad o su foco, cuando se valide va cambiar su color siempre y cuando la informacion sea correcta.
}

//-------------Validacion de Formulario(va a validar que el campo tenga algo escrito)
function inicioApp() {
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


function validarFormulario(e) {
    //elimina el mensaje de error,los parrafos de errror
    //cambia el borde de los input a verde cuando el valor es mayor que cero, osea que tiene algo escrito
    if (e.target.value.length > 0) { //dame el valor de lo largo 
        const error = document.querySelector('p.error')//eliminar mensaje de error
        if (error) {
            error.remove()
        }
        e.target.classList.remove('border', 'border-red-500') //console.log('Si hay algo')
        e.target.classList.add('border', 'border-green-500')
    } else {
        //cambia el borde de los input a rojo cuando el valor es menor que cero(o sea tiene algo escrito)
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500') //quiere decir que no tiene nada y te va cambiar el color del cuadro para alertar de que te falta agregar infromacion. //le doy estilos como clases
        //va a llevar un mensaje diciendo que todos los campos son obligatorios, por medio de una funcion llamada 'errores'
        mostrarError('Todos los parametros son obligatorios');
    }

    //-----------validar Email
    if (e.target.type === 'email') { //solo compara que el tipo de dato sea email, es una validacion
        if (re.test(e.target.value)) {
            const error = document.querySelector('p.error')
            if (error) {
                error.remove()
            }
            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')

        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')
            mostrarError('Email no valido')
        }
    }
    if (re.test(email.value) && asunto.value !== '' && mensaje.value !== '') { //validar si hay valores
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
    }
}
//----------Mostrar error
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p') //hay que darle estilo al parrafo
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-400', 'texr-center', 'p-2', 'mt-2', 'error')//agregar estilos desde js a manera de clases,
    //classList es de solo lectura, nos permite acceder a las clases de mi lista, entre parentesis va el estilo 
    const errores = document.querySelectorAll('.error')//revisamos si hay algo previo, un parrafo con un mensaje y no nos agrega mas mensajes
    if (errores.length === 0) {//si el largo de errores es 0 entonces me agrega o crea un nodo a formulario   
        formulario.appendChild(mensajeError);//revisar 
    }

}
//-----------------resetear los input del formulario
function resetinput() {
    email.classList.remove('border', 'border-green-500')
    asunto.classList.remove('border', 'border-green-500')
    mensaje.classList.remove('border', 'border-green-500')
}

//------------------resetear el formulario
function resetFormulario(e) {
    //e.preventDefault()//solo sive para cancelar el boton reset, pero no para el boton enviar, por lo tanto no me va resetear.
    formulario.reset(); //reset,  te resetea el formulario
    resetinput();
    inicioApp();
}

//---------Validar informacion del email
/*function validarEmail(campo) {
    const mensaje = campo.value //es una variable local, entramos a nuestro parametro campo y se lo asignamos a mensaje
    // re(regular expresion) son patrones diseñados de programacion que te ayudan para que puedan coincidir varias combinaciones de 
    //campos de , estos patrones ya existen.
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //re tienen diferentes metodos test es uno de ellos
    /*if (re.test(mensaje.toLowerCase)) { //nos va regresar un valor boleano, si es que se cumple o no la expresion 
        //el toLowerCase me convierte toda la informacion en  
        campo.style.borderBottomColor='green';
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor='red';
        campo.classList.add('error')
    }
}*/
function enviarEmail(e) {
    console.log(e.target.id)
    if (e.target.id === 'enviar') {
        e.preventDefault() //cancelamos el evento pero no la funcion de mi evento
        spinner = document.querySelector('#spinner')
        spinner.style.display = 'flex'
        //despues de cierto tiempo vamos a ocultar el spinner y mostrar un mensaje
        setTimeout(() => {
            spinner.style.display = 'none'//El spinner se ejecuta despues de 3'seg ')
            //mensaje cuando la info se haya enviado "correctamente"
            //creamos un parrafo que me dire el mensaje  "el mensaje se envio correctamente"
            //textContent
            const parrafo = document.createElement('p')
                parrafo.textContent = 'El mensaje se envio correctamente'
            //hay que darle un lugar en la pagina
            //formulario.appendChild("parrafo")
            parrafo.classList.add('text-center', 'bg-green-500', 'p-3', 'my-10', 'text-white', 'font-bold', 'uppercase')
            //my es margin,bg es background, las avbreviacion se puede buscar asi como abreviacions para jv de estilos
            formulario.insertBefore(parrafo, spinner)//primero se pone el nodo que se quiere agregar, aqui dice quiero el parrafo antes del spinner
            setTimeout(() => { 
                parrafo.remove(); 
                resetFormulario();
            }, 4000) 

        }, 3000)  //ayuda a dar un rango de tiempo de ejecucion
     
    }
   
}
