const api = new Api();
const ui = new Interfaz();

document.getElementById("buscarBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const opciones = document.getElementById("listado-paises");
  const opcionesSeleccionada = opciones.options[opciones.selectedIndex].value;
  if (opcionesSeleccionada.value === "") {
    api.Query(opcionesSeleccionada).then((res) => {
      ui.limpia();
      ui.mostrarData(res);
    });
  } else {
    ui.mostrarMensaje("Selecciona un pais", "error");
  }
});
