import axios from "axios";

const SERVICIO_DE_DATOS_API_NAHUAL = process.env.REACT_APP_API_URL;
let [
  filtrar_porModuloCompletado,
  filtrar_porNivelDeIngles,
  filtrar_porNombreDeNodo,
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
      filtrar_porModuloCompletado = "";
      break;
    case "nivelDeIngles":
      filtrar_porNivelDeIngles = "";
      break;
    case "nodo":
      filtrar_porNombreDeNodo = "";
      break;
    default:
      reiniciarFiltros();
      break;
  }
}

function establecerVariablesDeFiltroLocal(criterioDeFiltrado) {
  switch (criterioDeFiltrado.filtrar_por) {
    case "moduloCompletado":
      if (criterioDeFiltrado.valor === "Todos") filtrar_porModuloCompletado = "";
      else filtrar_porModuloCompletado = `modulo=${criterioDeFiltrado.valor}&`;
      break;
    case "nivelDeIngles":
      if (criterioDeFiltrado.valor === "Todos") filtrar_porNivelDeIngles = "";
      else filtrar_porNivelDeIngles = `nivelInglesId=${criterioDeFiltrado.valor}&`;
      break;
    case "nodo":
      if (criterioDeFiltrado.valor === "Todos") filtrar_porNombreDeNodo = "";
      else filtrar_porNombreDeNodo = `nodoId=${criterioDeFiltrado.valor}&`;
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
  filtrar_porNivelDeIngles = "";
  filtrar_porNombreDeNodo = "";
  filtrar_porModuloCompletado = "";
}

function construirFiltroDeConsulta() {
  let consulta = "";
  return consulta.concat(
    filtrar_porModuloCompletado,
    filtrar_porNivelDeIngles,
    filtrar_porNombreDeNodo
  );
}

export default FabricaDeFiltros;
