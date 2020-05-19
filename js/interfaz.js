//
const resultado = document.getElementById("resultado-eventos");

class Interfaz {
  constructor() {
    //instancea la app al iniciar
    this.init()
    this.selectedCategorias = document.getElementById("listado-categorias");
  }
  init() {
    //apenas instancea la clase, se ejecuta el metodo.
   this.mostrarCategorias();
  }

  mostrarCategorias()
    {
        //obteniendo las categorias de la api y contruyendo el opton
    apiConsulta.obtenerCategorias().then((respuesta) => {
      
    
       const resultadoQuery = respuesta.categories;
       resultadoQuery.forEach((element) => {
         const option = document.createElement("option");
         option.value = element.id;
         option.appendChild(document.createTextNode(element.name_localized));
         this.selectedCategorias.appendChild(option);
       });
    });
  }
  mostrarMensaje(mensaje, tipo){
    const alerta = document.createElement('div');
    const container = document.querySelector('.container');
    const buscador = document.getElementById('buscador')

    if(tipo === 'error'){
        alerta.classList.add('alert', 'alert-danger', 'text-center');
        alerta.appendChild(document.createTextNode(mensaje));
        container.insertBefore(alerta,buscador)
        //  buscador.appendChild(alerta)
      }
      this.fadedMensaje()
  }

  fadedMensaje(){
      setTimeout(()=>{
            document.querySelector('div .alert').remove()
      },2000)
  }
  //evalua la longitud del input y muestra un border de un color
  ejecutar(ejemplo){
       if(ejemplo.value.length === 0){
           ejemplo.style.border = '1px solid red'
       }else{
        ejemplo.style.border = '1px solid green'

       }
}
  //deja el div en blanco
  limpiarResultados(){
    resultado.innerHTML = ""; 
  }
  mostrarResultado(datos){
    this.limpiarResultados()
    const res = datos.events
    res.forEach(element=>{
      resultado.innerHTML = `
      <div class="col-md-4 mb-4">
          <div class="card">
              <div class="card-body">
                <img class="img-fluid mb-2" src="${element.logo !== null ? element.logo.url : ''}"> 
                  <div clas="card-text">
                      <h2 clas="text-center">
                         ${element.name}
                      </h2>
                      <p class="lead text-info">
                        Informacion del evento
                      </p>
                      <p>${element.description.text.substring(0,280)}...</p>
                        <span class="badge badge-primary badge-pill">Capacidad: ${element.capacity}</span>  
                        <span class="badge badge-secondary badge-pill">Fecha y hora: ${element.start.local}</span>  
                          <a class="btn btn-primary btn-block mt-4" href="${element.url}" target="_blank">Comprar Boletos</>
                    </div>
                </div>
          </div>
      </div>
     `;
    })
}
  
}
