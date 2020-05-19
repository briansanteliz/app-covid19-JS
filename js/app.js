//intanceando la clase de la consulta y de la interfaz
const apiConsulta = new API('DQYQVK2O5TUCTQ2BOVGR', 'date');
const ui = new Interfaz()

const botonSubmit = document.getElementById('buscarBtn')
const inputEvento = document.getElementById('evento')

// document.addEventListener('DOMContentLoaded', function(){
//     botonSubmit.disabled = true
// })

inputEvento.addEventListener('blur', ejecutar)
  function ejecutar(){
      ui.ejecutar(this)
  }
botonSubmit.addEventListener('click', function(){
    //obteniendo elemtos del form y extrayendo valor del formulario
const categorias = document.getElementById('listado-categorias');
const evento = document.getElementById('evento').value;
categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

//validando

if(categoriaSeleccionada.trim().length === 0 || evento.trim().length === 0){
    console.log('todos los campos son obligatorios')
    ui.mostrarMensaje('Todos los campos son obligatorios','error')
}else{
    botonSubmit.disabled = false
    apiConsulta.obtenerEventos(categoriaSeleccionada) 
        .then(res=>{
            //validando que el arreglo de eventos no este vacio
            if(res.events.length > 0){
              ui.mostrarResultado(res)

            }else{
                //test this.
                ui.mostrarMensaje('no existen eventos', 'error');
            }
        })
}
})