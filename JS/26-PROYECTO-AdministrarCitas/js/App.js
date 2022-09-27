//variables
const mascotaI = document.querySelector('#mascota')
const propietarioI = document.querySelector('#propietario')
const telefonoI = document.querySelector('#telefono')
const fechaI = document.querySelector('#fecha')
const horaI = document.querySelector('#hora')
const sintomasI = document.querySelector('#sintomas')
//contenedor para las citas
const listaCitas = document.querySelector('#citas')
//formulario nuevas citas
const formulario = document.querySelector('#nueva-cita')


//eventos

eventListeners()
function eventListeners() {
    mascotaI.addEventListener('change', datosCita)
    propietarioI.addEventListener('change', datosCita)
    telefonoI.addEventListener('change', datosCita)
    fechaI.addEventListener('change', datosCita)
    horaI.addEventListener('change', datosCita)
    sintomasI.addEventListener('change', datosCita)
    formulario.addEventListener('submit', nuevaCita)
    document.addEventListener('DOMContentLoaded', () => {
        nuevaDB()
        setTimeout(() => { }, 3000)
    })
}

//clases
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];

    }
    cargarEdicion(citaActualizada) {
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }
    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);

    }
}
class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        //mensaje de error
        divMensaje.textContent = mensaje
        //crear alerta antes del formulario
        document.querySelector('.agregar-cita').insertBefore(divMensaje, formulario)
        //insertar antes de  y dentro del parentesis lo que quiero insertar
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    imprimirCitas() {

        this.limpiarHTML();
        //estoy leyendo la informacion que tiene mi base de datos

        const objectStore = DB.transaction('citas-DB').objectStore('citas-DB')
        //openCursor es un metodo que funciona como iterador y retorna un objeto request o peticion
        objectStore.openCursor().onsuccess = function (e) {
            //cursor se va ubicar en el registro para acceder a los datos   
            //poder ubicar en el registro la informacion correspondiente, va tomar el valor de la posicion
            const cursor = e.target.result;
            if (cursor) { //validamos con el if porque si no existe nada, no me genere error al tratar de traer datos que no hay

                const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cursor.value;
                const divCita = document.createElement('div');
                divCita.classList.add('cita', 'p-3');
                divCita.dataset.id = id;
                //spring de los elementos
                const mascotaParrafo = document.createElement('h2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.innerHTML = `${mascota}`;

                const propietarioParrafo = document.createElement('p');
                propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario:</span> ${propietario}`;
                const telefonoParrafo = document.createElement('p');
                telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono:</span> ${telefono}`;
                const fechaParrafo = document.createElement('p');
                fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha:</span> ${fecha}`;
                const horaParrafo = document.createElement('p');
                horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora:</span> ${hora}`;
                const sintomasParrafo = document.createElement('p');
                sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas:</span> ${sintomas}`;

                //agregar btn de eliminar
                const btnEliminar = document.createElement('button');
                btnEliminar.onclick = () => borrarCita(id);

                btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
                btnEliminar.innerHTML = '<button type="button" class="btn btn-danger">Eliminar</button>'

                //añade un boton de editar
                const btnEditar = document.createElement('button');
                btnEditar.onclick = () => modificarCita(cursor);
                btnEditar.classList.add('btn', 'btn-info');
                btnEditar.innerHTML = '<button type="button" class="btn btn-info">Editar</button>'

                //agregar al HtML
                divCita.appendChild(mascotaParrafo);
                divCita.appendChild(propietarioParrafo);
                divCita.appendChild(telefonoParrafo);
                divCita.appendChild(fechaParrafo);
                divCita.appendChild(horaParrafo);
                divCita.appendChild(sintomasParrafo);
                divCita.appendChild(btnEliminar);
                divCita.appendChild(btnEditar);
                //contenedor citas cambia a la variable que tengan con #citas
                listaCitas.appendChild(divCita);
                //una vez terminador todo el proceso para un registro ve al siguiente elemento
                cursor.continue();
                //en DB se guarda la base de datos
            }//fin del if
        }//fin de la funcion cursor
    };

    limpiarHTML() {
        while (listaCitas.firstChild) {
            listaCitas.removeChild(listaCitas.firstChild)

        }
    }
}

//crear instancias
const citas = new Citas();
const ui = new UI(citas);
//console.log(citas)
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
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    //console.log(citaObj)
}

function nuevaCita(e) {
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

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
        //añade la nueva cita   
        citas.agregarCita({ ...citaObj })

        //esta linea de codigo me va insertar el registro en el indexDB
        //dentro del parentesis va el nombre del arreglo donde guardamos esa transaccion,y el modo en el cual se va aplicar esa transaccion, la informacion se almacena en forma de matriz por eso va en corchetes 
        let trans = DB.transaction(['citas-DB'], 'readwrite');
        //lo que hace esta funcion es que me dice si la transaccion esta completa
        
        trans.oncomplete = () => { console.log('Transaccion completada') }
        //si la transaccion no se completo entra en esta transaccion
        trans.onerror = () => { console.log('Hubo un error en la transaccion') }
        const objectStore = trans.objectStore('citas-DB')
        //const nuevoCliente= citaObj
        let peticion = objectStore.add(citaObj)
        //la transaction es una operacion
        ui.imprimirAlerta('Cita Realizada', 'correcto')
    }
    ui.imprimirCitas(citas)
    limpiarCitaObj()
    formulario.reset();

}
function limpiarCitaObj() {
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
    citaObj.id = ''
}

function modificarCita(cita) {
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

function borrarCita(id) {
    citas.eliminarCita(id)
    ui.imprimirCitas(citas)
}
//---------------------------Craeando una DB---------------------------------
let DB;

function nuevaDB() {
    //asi abrimos una base de datos
    const crmDB = window.indexedDB.open('citas-DB', 1)
    crmDB.onerror = function () {
        console.log('Hubo un error al abrir la base de datos')
    }

    crmDB.onsuccess = function () {
        //console.log('todo esta listo!')
        DB = crmDB.result;
        //mostrar
        ui.imprimirCitas()
        //console.log(DB)
    }
    //crear o configurar la BD, 
    crmDB.onupgradeneeded = function (e) {
        //el evento que se va a correr, tomamos la DB del evento que se ejecuta
        const database = e.target.result;
        const objectStore = database.createObjectStore('citas-DB', { KeyPath: 'ID', autoIncrement: true })
        //creatIndex, espera el nombre, la llave y opcion es lo que va en las llaves
        //este metodo me ayuda a crear las columnas que va tener mi DB
        objectStore.createIndex('mascota', 'mascota', { unique: false })
        objectStore.createIndex('propietario', 'propietario', { unique: false })
        objectStore.createIndex('telefono', 'telefono', { unique: false })
        objectStore.createIndex('fecha', 'fecha', { unique: false })
        objectStore.createIndex('hora', 'hora', { unique: false })
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
        objectStore.createIndex('id', 'id', { unique: true })
        //console.log('DB creada y lista')
    }
}

