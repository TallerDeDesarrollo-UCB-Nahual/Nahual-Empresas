import axios from "axios";

const SERVICIO_DE_DATOS_API_NAHUAL = process.env.REACT_APP_API_URL;
let [
  filtrarPorModuloCompletado,
  filtrarPorNivelDeIngles,
  filtrarPorNombreDeNodo,
  filtroDeConsulta,
] = ["", "", "", ""];

function FabricaDeFiltros(criterioDeFiltrado) {
  establecerVariablesDeFiltroLocal(criterioDeFiltrado);
  filtroDeConsulta = construirFiltroDeConsulta();
  return axios.get(
    `${SERVICIO_DE_DATOS_API_NAHUAL}/egresades/desempleados/DTO?${filtroDeConsulta}`
  );
}

function removerUnFiltro(filtro) {
  switch (filtro.valor) {
    case "moduloCompletado":
      filtrarPorModuloCompletado = "";
      break;
    case "nivelDeIngles":
      filtrarPorNivelDeIngles = "";
      break;
    case "nodo":
      filtrarPorNombreDeNodo = "";
      break;
    default:
      reiniciarFiltros();
      break;
  }
}

function establecerVariablesDeFiltroLocal(criterioDeFiltrado) {
  switch (criterioDeFiltrado.filtrar_por) {
    case "moduloCompletado":
      if (criterioDeFiltrado.valor === "Todos") filtrarPorModuloCompletado = "";
      else filtrarPorModuloCompletado = `modulo=${criterioDeFiltrado.valor}&`;
      break;
    case "nivelDeIngles":
      if (criterioDeFiltrado.valor === "Todos") filtrarPorNivelDeIngles = "";
      else filtrarPorNivelDeIngles = `nivelInglesId=${criterioDeFiltrado.valor}&`;
      break;
    case "nodo":
      if (criterioDeFiltrado.valor === "Todos") filtrarPorNombreDeNodo = "";
      else filtrarPorNombreDeNodo = `nodoId=${criterioDeFiltrado.valor}&`;
      break;
    case "Todos":
      reiniciarFiltros();
      break;
    case "SinFiltros":
      removerUnFiltro(criterioDeFiltrado);
      break;
    default:
      alert(
        "Parece haber un error con la base de datos, intentelo nuevamente."
      );
      break;
  }
}

function reiniciarFiltros() {
  filtrarPorNivelDeIngles = "";
  filtrarPorNombreDeNodo = "";
  filtrarPorModuloCompletado = "";
}

function construirFiltroDeConsulta() {
  let consulta = "";
  return consulta.concat(
    filtrarPorModuloCompletado,
    filtrarPorNivelDeIngles,
    filtrarPorNombreDeNodo
  );
}

export default FabricaDeFiltros;
