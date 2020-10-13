import React from "react";
import ListaEgresades from "./Componentes/ListaEgresades/ListaEgresades.jsx"
import Encabezado from "./Components/Layouts/Encabezado.jsx";
import PieDePagina from "./Components/Layouts/PieDePagina.jsx";

function App() {
  return (
    <>
      <Encabezado />
      <div className="ui container">
        <ListaEgresades />
      </div>
      <PieDePagina/>
    </>
  );
}

export default App;
