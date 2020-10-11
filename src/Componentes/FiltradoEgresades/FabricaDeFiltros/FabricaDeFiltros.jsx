import axios from "axios";

const SERVICIO_DE_DATOS_API_NAHUAL = process.env.REACT_APP_API_URL;
let [filtrarPorModuloCompletado, filtrarPorNivelDeIngles, filtrarPorNombreDeNodo, filtroDeConsulta] = ['','','','']

function FabricaDeFiltros (criterioDeFiltrado) {
  establecerVariablesDeFiltroLocal(criterioDeFiltrado)
  filtroDeConsulta = construirFiltroDeConsulta() 
  return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL}/graduates/unemployes?${filtroDeConsulta}`)
} 

function establecerVariablesDeFiltroLocal(criterioDeFiltrado){
  switch (criterioDeFiltrado.filterby) {
    case 'moduloCompletado':
      if (criterioDeFiltrado.value==='Todos')
        filtrarPorModuloCompletado = ''
      else
        filtrarPorModuloCompletado =`module=${criterioDeFiltrado.value}&`;
      break
    case 'nivelDeIngles':
      if (criterioDeFiltrado.value==='Todos')
        filtrarPorNivelDeIngles = ''
      else
        filtrarPorNivelDeIngles =`englishLevel=${criterioDeFiltrado.value}&`;
      break
    case 'nodo':
      if (criterioDeFiltrado.value==='Todos')
        filtrarPorNombreDeNodo = ''
      else
        filtrarPorNombreDeNodo =`nodeName=${criterioDeFiltrado.value}&`;
      break
    default:
  }
}

function construirFiltroDeConsulta(){
  let consulta = '';
  return consulta.concat(filtrarPorModuloCompletado,filtrarPorNivelDeIngles,filtrarPorNombreDeNodo)
}

export default FabricaDeFiltros;