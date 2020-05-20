import { Api} from './api.js'
import {Interfaz } from './interfaz.js'

const api = new Api();
const ui = new Interfaz();

document.getElementById("buscarBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const opciones = document.getElementById("listado-paises");
  const opcionesSeleccionada = opciones.options[opciones.selectedIndex].value;
  if (opcionesSeleccionada === "") {
    ui.mostrarMensaje("Selecciona un pais", "error");
    
    
  } else {
    api.Query(opcionesSeleccionada).then((res) => {
      ui.limpia();
      ui.mostrarData(res);
    });
  }
});
