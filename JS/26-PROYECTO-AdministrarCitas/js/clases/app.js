//crear clase app (la app.js es como el nucleo del proyecto)
import {datosCita, nuevaCita} from '../funciones.js'
import {mascotaI,propietarioI,telefonoI,fechaI,horaI,sintomasI,formulario} from '../selectores.js'

class App {
    constructor() {
        this.initApp()
    }

    //eventos
    initApp() {
        eventListeners()
        function eventListeners() {
            mascotaI.addEventListener('change', datosCita)
            propietarioI.addEventListener('change', datosCita)
            telefonoI.addEventListener('change', datosCita)
            fechaI.addEventListener('change', datosCita)
            horaI.addEventListener('change', datosCita)
            sintomasI.addEventListener('change', datosCita)
            formulario.addEventListener('submit', nuevaCita)
        }
    }

}
export default App;






