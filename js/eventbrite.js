class API{
    constructor(oauth, orden){
        this.oauth = oauth;
        this.orden = orden; //orden de la petición
    }
    async obtenerCategorias(){
       const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.oauth}`
        const categorias = await fetch(url)
        const respuesta = await categorias.json();
        return respuesta
    } 
    async obtenerEventos(evento){
        const url = `https://www.eventbriteapi.com/v3/events/${evento}/?token=${this.oauth}`
        const res =  await fetch(url);
        const data = res.json();
        return data
    }
}
