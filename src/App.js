import React from "react";
import ListaEgresades from "./Componentes/ListaEgresades/ListaEgresades.jsx"
import Encabezado from "./Componentes/Layouts/Encabezado.jsx";
import PieDePagina from "./Componentes/Layouts/PieDePagina.jsx";

function App() {
  return (
    <>
      <Encabezado />
      <div className="ui container" style={{ minHeight: "60vh" }} >
        <GraduatesList />
      </div>
      <PieDePagina />
    </>
  );
}

export default App;
