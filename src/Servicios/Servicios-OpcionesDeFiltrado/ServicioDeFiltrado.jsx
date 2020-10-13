import axios from "axios";

const SERVICIO_DE_DATOS_API_NAHUAL  = process.env.REACT_APP_API_URL;

const ServicioDeFiltrado  = {
  obtenerOpcionesDeModulosCompletados(){
    return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL }/modulos`)
  },
  obtenerOpcionesDeNivelDeIngles(){
    return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL }/nivel-ingles`)
  },
  obtenerOpcionesDeNodos(){
    return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL }/nodos`)
  }
}

export default ServicioDeFiltrado;