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
    document.addEventListener('DOMContentLoaded', ()=>{
        nuevaDB()
        setTimeout(()=>{
            imprimirCitas()
        },3000)
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
    imprimirCitas({ citas }) {

        this.limpiarHTML();

        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
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
            btnEditar.onclick = () => modificarCita(cita);
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
            //---------------
            //en DB se guarda la base de datos
                    let trans=DB.transaction(['citas-DB'],'readwrite');
                    trans.oncomplete=function(){ //lo que hace esta funcion es que me dice si la transaccion esta completa
                        console.log('Transaccion completada')
                    }
                    trans.onerror=function(){ //si la transaccion no se completo entra en esta transaccion
                        console.log('Hubo un error en la transaccion')
                    }
                    let objectStore=trans.objectStore('citas-DB')
                    console.log(objectStore)
                        //const nuevoCliente= citaObj
                    let peticion=objectStore.add(citaObj)
                    console.log(peticion)
                
        });
    }

    limpiarHTML() {
        while (listaCitas.firstChild) {
            listaCitas.removeChild(listaCitas.firstChild)

        }
    }
}
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
        citas.agregarCita({ ...citaObj })
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
//------------------------------------------------------------
let DB;
//creando una base de datos
function nuevaDB(){
    //asi abrimos una base de datos
    let crmDB=window.indexedDB.open('citas-DB', 1)
    crmDB.onerror=function(){
        console.log('Hubo un error al abrir la base de datos')
    }
    crmDB.onsuccess=function(){
        //console.log('todo esta listo!')
        DB=crmDB.result;
        console.log(DB)
    }
    //crear o configurar la BD, 
    crmDB.onupgradeneeded=function(e){
        //el evento que se va a correr, tomamos la DB del evento que se ejecuta
        let database=e.target.result;
        let objectStore=database.createObjectStore('citas-DB',{KeyPath:'ID',autoIncrement:true})
        //creatIndex, espera el nombre, la llave y opcion es lo que va en las llaves
        //este metodo me ayuda a crear las columnas que va tener mi DB
        objectStore.createIndex('mascota','mascota',{unique:false})
        objectStore.createIndex('propietario','propietario',{unique:false})
        objectStore.createIndex('telefono','telefono',{unique:false})
        objectStore.createIndex('fecha','fecha',{unique:false})
        objectStore.createIndex('hora','hora',{unique:false})
        objectStore.createIndex('sintomas','sintomas',{unique:false});
        console.log('DB creada y lista')
    }
}

