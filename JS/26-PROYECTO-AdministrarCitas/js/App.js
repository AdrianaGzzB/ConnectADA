let DB;
const mascotaInput = document.querySelector('#mascota');
const tutorInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


//Contenedor para las citas.

const contenedorCitas = document.querySelector('#citas');

//Formulario para las nuevas citas.

const formulario = document.querySelector('#nueva-cita');
formulario.addEventListener('submit', nuevaCita);

let modificando = false;

window.onload = () => {
    eventListeners();
    crearBD()
}
//Eventos.
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    tutorInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);


}

const citaObj = {
    mascota: '',
    tutor: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

}

//Clases
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        //Crear div.
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        //Agregar una clase si es de tipo error.

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');

        }
        //Mensaje de error.
        divMensaje.textContent = mensaje;

        //Insertar en el DOM.
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Quitar la alerta despu??s de 3 segundos.

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }
    imprimirCitas() {

        this.limpiarHTML();

        //leyendo el contenido del indexedDB
        const objectStore = DB.transaction('citas').objectStore('citas')

        //openCursos es un metodo que funciona como iterador, retorna un objeto request o peticion
        objectStore.openCursor().onsuccess = function (e) {
            //cursor se va a ubicar en el registro para acceder a los datos
            const cursor = e.target.result;
            if (cursor) {

                const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cursor.value

                const divCita = document.createElement('div');
                divCita.classList.add('cita', 'p-3');
                divCita.dataset.id = id;

                const mascotaParrafo = document.createElement('h2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.innerHTML = `${mascota}`;

                const propietarioParrafo = document.createElement('p');
                propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

                const telefonoParrafo = document.createElement('p');
                telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Tel??fono: </span> ${telefono}`;

                const fechaParrafo = document.createElement('p');
                fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

                const horaParrafo = document.createElement('p');
                horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

                const sintomasParrafo = document.createElement('p');
                sintomasParrafo.innerHTML = `<span class="font-weight-bolder">S??ntomas: </span> ${sintomas}`;

                const botonEliminar = document.createElement('button');
                botonEliminar.onclick = () => eliminarCita(id); // a??ade la opci??n de eliminar
                botonEliminar.classList.add('btn', 'btn-danger', 'mr-2');
                botonEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'


                const botonEditar = document.createElement('button');
                const cita = cursor.value;
                botonEditar.onclick = () => cargarEdicion(cita);
                botonEditar.classList.add('btn', 'btn-info');
                botonEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'




                //Agregar al HTML.
                divCita.appendChild(mascotaParrafo);
                divCita.appendChild(propietarioParrafo);
                divCita.appendChild(telefonoParrafo);
                divCita.appendChild(fechaParrafo);
                divCita.appendChild(horaParrafo);
                divCita.appendChild(sintomasParrafo);
                divCita.appendChild(botonEliminar);
                divCita.appendChild(botonEditar);

                contenedorCitas.appendChild(divCita);
                //una vez terminado todo el proceso para un registro, ve al siguiente elemento
                cursor.continue();
            }//fin del if
        };//fin de la funcion cursor
    }


    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}




const administrarCitas = new Citas();
// console.log(administrarCitas)
const ui = new UI(administrarCitas);

function nuevaCita(e) {
    e.preventDefault();

    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // Validar
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')
        return;
    }

    if (modificando) {
        //Nuevo codigo que lee el contenido de nuestra BD
        const trans = DB.transaction(['citas'], 'readwrite')
        const objectStore = trans.objectStore('citas')
        const peticion=objectStore.put(citaObj)

        trans.oncomplete = () => {
            console.log('Editado correctamente')
            // Estamos editando
            administrarCitas.editarCita({ ...citaObj });

            ui.imprimirAlerta('Guardado Correctamente');

            formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

            modificando = false;
        }

        trans.onerror = () => {
            console.log('Hubo un error')
        }

    } else {
        // Nuevo Registrando

        // Generar un ID ??nico
        citaObj.id = Date.now();

        // A??ade la nueva cita
        administrarCitas.agregarCita({ ...citaObj });

        //insertar el registro en el indexedDB
        const trans = DB.transaction(['citas'], 'readwrite')

        const objectStore = trans.objectStore('citas')
        objectStore.add(citaObj)

        trans.oncomplete = () => {
            console.log('Cita agregada correctamente!')

            // Mostrar mensaje de que todo esta bien...
            ui.imprimirAlerta('Se agreg?? correctamente')
        }
        trans.onerror = () => {
            console.log('Hubo un error!')
        }

    }
    // Imprimir el HTML de citas
    ui.imprimirCitas(administrarCitas);
    // Reinicia el objeto para evitar futuros problemas de validaci??n
    reiniciarObjeto();
    // Reiniciar Formulario
    formulario.reset();
}

function reiniciarObjeto() {

    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id) {
    const trans=DB.transaction(['citas'],'readwrite')
    const objectStore=trans.objectStore('citas')

    objectStore.delete(id)
    trans.oncomplete=()=>{
        console.log( `cita ${id} ha sido elimniada`)
        ui.imprimirCitas()
    }
    trans.onerror=()=>{
        console.log('hubo un error')
    }
}

function cargarEdicion(cita) {

    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;


    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;


    mascotaInput.value = mascota;
    tutorInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    modificando = true;

}

function crearBD() {
    const citaDB = window.indexedDB.open('citas', 1)
    citaDB.onerror = function () {
        console.log('hubo un error en la creacion de la BD')
    }
    citaDB.onsuccess = function () {
        console.log('Citas Listas')

        DB = citaDB.result
        //mostrar citas al cargar  navegador 
        ui.imprimirCitas()
    }
    citaDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore('citas', { keyPath: 'id', autoIncrement: true })
        objectStore.createIndex('mascota', 'mascota', { unique: false })
        objectStore.createIndex('propietario', 'propietario', { unique: false })
        objectStore.createIndex('telefono', 'telefono', { unique: false })
        objectStore.createIndex('fecha', 'fecha', { unique: false })
        objectStore.createIndex('hora', 'hora', { unique: false })
        objectStore.createIndex('sintomas', 'sintomas', { unique: false })
        objectStore.createIndex('id', 'id', { unique: false })
        console.log('DataBase creada y lista')
    }

}