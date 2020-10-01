import axios from "axios";

const SERVICIO_DE_DATOS_API_NAHUAL = process.env.REACT_APP_API_URL;

const servicioDeFiltrado = {
   obtenerOpcionesDeModulosCompletados(){
    return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL}/modules`)
  },
  obtenerOpcionesDeNivelesDeIngles(){
    return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL}/english-levels`)
  },
  obtenerOpcionesDeNodos(){
    return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL}/nodes`)
  }
}

export default servicioDeFiltrado;