import React from "react";
import GraduatesList from "./Components/GraduatesList/GraduatesList.jsx";
import Encabesado from "./Components/Layouts/Encabesado.jsx";

function App() {
  return (
    <>
      <Encabesado />
      <div className="ui container">
        <GraduatesList />
      </div>
    </>
  );
}

export default App;
