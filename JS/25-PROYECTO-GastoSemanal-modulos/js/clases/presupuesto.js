//clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    borrarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);//tal vez se necesite cambiar a 
        this.calcularRestante()
    }
    //reduce
    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado
    }
}
export default Presupuesto;