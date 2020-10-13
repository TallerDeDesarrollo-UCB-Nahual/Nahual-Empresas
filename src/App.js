import React from "react";
import Encabezado from "./Componentes/Layouts/Encabezado.jsx";
import PieDePagina from "./Componentes/Layouts/PieDePagina.jsx";
import ListaEgresades from './Componentes/ListaEgresades/ListaEgresades.jsx'
function App() {
  return (
    <>
      <Encabezado />
      <div className="ui container" style={{ minHeight: "60vh" }} >
        <ListaEgresades />
      </div>
      <PieDePagina />
    </>
  );
}

export default App;
