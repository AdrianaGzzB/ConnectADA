import { borrarCita, modificarCita } from "../funciones.js";
import { listaCitas, formulario} from "../selectores.js";

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

        });
    }

    limpiarHTML() {
        while (listaCitas.firstChild) {
            listaCitas.removeChild(listaCitas.firstChild)

        }
    }
}
export default UI;