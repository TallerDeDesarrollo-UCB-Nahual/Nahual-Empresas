import React from "react";
import GraduatesList from "./Components/GraduatesList/GraduatesList.jsx";
import Encabezado from "./Components/Layouts/Encabezado.jsx";
import PieDePagina from "./Components/Layouts/PieDePagina.jsx";

function App() {
  return (
    <>
      <Encabezado />
      <div className="ui container">
        <GraduatesList />
      </div>
      <PieDePagina/>
    </>
  );
}

export default App;
