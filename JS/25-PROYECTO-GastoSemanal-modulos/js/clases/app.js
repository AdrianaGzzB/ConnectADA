//instancias
import { preguntarPresupuesto,agregarGasto,eliminarGasto} from "../funciones.js"
import {formulario, gastoListado}  from "../selectores.js"

class App {
    constructor() {
        this.initApp();
    }

    //eventos
    initApp() {
        eventListeners()
        function eventListeners() {
            document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
            formulario.addEventListener('submit', agregarGasto)
            gastoListado.addEventListener('click', eliminarGasto)


        }
    }
}
export default App;
