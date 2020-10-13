import React from "react";
import GraduatesList from "./Components/GraduatesList/GraduatesList.jsx";
import Encabezado from "./Components/Layouts/Encabezado.jsx";
import PieDePagina from "./Components/Layouts/PieDePagina.jsx";

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
