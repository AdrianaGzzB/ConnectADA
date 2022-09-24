import Presupuesto from './clases/presupuesto.js'
import UI from './clases/ui.js';
import {formulario} from './selectores.js'

//instanciar
export const ui = new UI();
let presupuesto;
//funciones

export function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?')
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) { //isNaN siempre va esperar un valor numerico, te va regresas un valor booleano
        window.location.reload(); //el location reload te da un refresh a la pantalla hasta que obtenga un valor puede pasar a la pagina, mientras no haiga valor me seguira mostrando lo mismo.
    }
    //siendo un presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)
    ui.insertarPresupuesto(presupuesto)
}


export function agregarGasto(e) {
    e.preventDefault();
    //leer del formulario los gastos(cantidad y concepto)
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    const{restante} = presupuesto;
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error')
    }else if(cantidad>restante ) {
        ui.imprimirAlerta('Saldo Insuficiente', 'error')
    } else {
        const gasto = { nombre, cantidad, id: Date.now() }//now es un metodo del objeto date, devuelve el segundo(fecha con hora exacta) en el que se efectua el gasto, te devuelve el valor registrado desde 1970
        //vamos a añadir nuevo gasto
        presupuesto.nuevoGasto(gasto)
        //insertar HTML
        ui.imprimirAlerta('Correcto', 'correcto')
        //imprimir el gasto
        const { gastos } = presupuesto
        ui.agregarGastoLista(gastos)
        //actualizar el presupuesto restante
        const { restante } = presupuesto
        ui.actualizarRestante(restante)
        //cambiar la clase que nos avisa si el presupuesto se va terminando
        ui.comprobarPresupuesto(presupuesto)
        //reiniciar formulario
        formulario.reset();
    }
}

export function eliminarGasto(id) {
    presupuesto.borrarGasto(id)
    const { gastos, restante } = presupuesto
    ui.agregarGastoLista(gastos)
    ui.actualizarRestante(restante)
    ui.comprobarPresupuesto(presupuesto)
}

