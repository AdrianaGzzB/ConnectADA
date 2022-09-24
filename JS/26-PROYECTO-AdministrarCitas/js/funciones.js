//con el import obtengo los valores prestados con el export
import Citas from './clases/citas.js'
import UI from './clases/ui.js'
import {mascotaI,propietarioI,telefonoI,fechaI,horaI,sintomasI,formulario} from './selectores.js'

//crear instancias
const ui = new UI();
const citas = new Citas();
let modificando = false;

//objetos
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//funciones
export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    //console.log(citaObj)
}

export function nuevaCita(e) {
    e.preventDefault();
    const{mascota, propietario, telefono, fecha, hora,sintomas}=citaObj;

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        return;
    }
    if (modificando) {
        citas.cargarEdicion({ ...citaObj })
        ui.imprimirAlerta('Se guardaron los cambios', 'correcto')
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita'
        modificando = false
    } else {

        citaObj.id = Date.now()
        citas.agregarCita({ ...citaObj })
        ui.imprimirAlerta('Cita Realizada', 'correcto')
    }
    ui.imprimirCitas(citas)
    limpiarCitaObj()
    formulario.reset();
   
}
export function limpiarCitaObj() {
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
    citaObj.id = ''
}

export function modificarCita(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  // reiniciar el objto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //llenar los input
    mascotaI.value = mascota;
    propietarioI.value = propietario;
    telefonoI.value = telefono;
    fechaI.value = fecha;
    horaI.value = hora;
    sintomasI.value = sintomas;
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    modificando = true;

    //otra forma de llenar los input cuando mis variables globales se llaman igual que las variables locales
    // formulario.querySelector('#mascota').value = mascota
    // formulario.querySelector('#propietario').value= propietario
    // formulario.querySelector('#telefono').value =telefono
    // formulario.querySelector('#fecha').value= fecha
    // formulario.querySelector('#hora').value=hora
    // formulario.querySelector('#sintomas').value=sintomas

}

export function borrarCita(id) {
    citas.eliminarCita(id)
    ui.imprimirCitas(citas)
}

