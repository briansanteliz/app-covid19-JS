class Interfaz {
  constructor() {
    this.init();
    this.listado = document.getElementById("listado-paises");
    this.respuesta = document.getElementById("resultado");
  }
  init() {
    this.obtenerPaisesOption();
  }
  obtenerPaisesOption() {
    api.obtenerPaises().then((res) => {
      const datos = res.countryitems[0];
      for (const [key, value] of Object.entries(datos)) {
        const options = document.createElement("option");
        options.value = value.code;
        options.appendChild(document.createTextNode(value.title));
        this.listado.appendChild(options);
      }
    });
  }
  mostrarData(datos) {
    const mensaje = document.querySelector("#resultado > div");
    if (mensaje) {
      mensaje.remove();
    }
    let {
      total_cases,
      total_deaths,
      total_recovered,
      total_new_cases_today,
      total_new_deaths_today,
      total_serious_cases,
      total_danger_rank,
    } = datos.countrydata[0];
    let color;
    if (total_danger_rank < 50) {
      color = "red";
    } else if (total_danger_rank > 50 && total_danger_rank < 80) {
      color = "#ffc926";
    } else {
      color = "green";
    }
    let html = `
      <div class="col-md-4  text-center">
          <h1 style="color:#1877f2">${total_cases}</h1>
          <h4>Infectados</h4>
      </div>
      <div class="col-md-4  text-center">
          <h1 style="color:#fb3938">${total_deaths}</h1>
          <h4>Muertes</h4>
      </div>
      <div class="col-md-4  text-center">
          <h1 style="color:#3aa969">${total_recovered}</h1>
          <h4>Recuperados</h4>
      </div>
      <div class="col-md-4 mt-3 text-center">
          <h1 style="color:#1877f2">${total_new_cases_today}</h1>
          <h4> Casos Nuevos Hoy</h4>
      </div>
      <div class="col-md-4 mt-3 text-center">
          <h1 style="color:#fb3938">${total_new_deaths_today}</h1>
          <h4>Muertes Nuevas Hoy</h4>
      </div>
      <div class="col-md-4 mt-3 text-center">
          <h1 style="color:#fb9c38">${total_serious_cases}</h1>
          <h4>Casos Graves</h4>
      </div>
      <div class="col-md-4 text-center total">
          <h1>Top<span class="top" style="color:${color}">°${total_danger_rank}</span></h1>
          <h4>Rango De Peligro</h4>
      </div>
      
    `;
    this.mostrarSpinner("block");
    setTimeout(() => {
      this.respuesta.innerHTML = html;
      this.mostrarSpinner("none");
    }, 3000);
  }
  mostrarSpinner(vista) {
    const spinner = document.querySelector(".spinner");
    spinner.style.display = vista;
  }
  mostrarMensaje(mensaje, tipo) {
    const alerta = document.createElement("div");
    if (tipo === "error") {
      alerta.classList.add("alert", "alert-danger", "text-center", "col-12");
      alerta.appendChild(document.createTextNode(mensaje));
      this.respuesta.appendChild(alerta);
      setTimeout(() => {
        document.querySelector("#resultado .alert").remove();
      }, 2000);
    }
  }

  limpia() {
    this.respuesta.innerHTML = "";
  }
}
