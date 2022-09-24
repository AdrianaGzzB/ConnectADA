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
//cuando solo se exporta un valor se puede poner el default y por js el export va hasta abajo o despues de la clase
export default Citas;
