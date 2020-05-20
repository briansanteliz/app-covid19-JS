export class Api {
  async obtenerPaises() {
    const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
    const res = await fetch(url);
    const datos = await res.json();
    return datos;
  }
  async Query(pais) {
    const url = `https://api.thevirustracker.com/free-api?countryTotal=${pais}`;
    const res = await fetch(url);
    const datos = res.json();
    return datos;
  }
}
