import axios from "axios";

const SERVICIO_DE_DATOS_API_NAHUAL  = process.env.REACT_APP_API_URL;
let [filtrarPorModuloCompletado ,filtrarPorNivelDeIngles,filtrarPorNombreDeNodo,filtroDeConsulta] = ['','','','']

function FabricaDeFiltros (criterioDeFiltrado) {
  establecerVariablesDeFiltroLocal(criterioDeFiltrado)
  filtroDeConsulta = construirFiltroDeConsulta() 
  return axios.get(`${SERVICIO_DE_DATOS_API_NAHUAL }/egresades/desempleados?${filtroDeConsulta}`)
} 

function establecerVariablesDeFiltroLocal(criterioDeFiltrado){
  switch (criterioDeFiltrado.filterby) {
    case 'moduloCompletado':
      if (criterioDeFiltrado.value==='Todos')
        filtrarPorModuloCompletado  = ''
      else
        filtrarPorModuloCompletado  =`modulo=${criterioDeFiltrado.value}&`;
      break
    case 'nivelDeIngles':
      if (criterioDeFiltrado.value==='Todos')
        filtrarPorNivelDeIngles = ''
      else
        filtrarPorNivelDeIngles =`nivelIngles=${criterioDeFiltrado.value}&`;
      break
    case 'nodo':
      if (criterioDeFiltrado.value==='Todos')
        filtrarPorNombreDeNodo = ''
      else
        filtrarPorNombreDeNodo =`nombreNodo=${criterioDeFiltrado.value}&`;
      break
    case 'Todos':
        filtrarPorNivelDeIngles = ''
        filtrarPorNombreDeNodo = ''
        filtrarPorModuloCompletado  = ''
      break
    default:
      break
  }
}

function construirFiltroDeConsulta(){
  let consulta = '';
  return consulta.concat(filtrarPorModuloCompletado ,filtrarPorNivelDeIngles,filtrarPorNombreDeNodo)
}

export default FabricaDeFiltros ;