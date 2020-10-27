import React from "react";
import Encabezado from "./Componentes/Layouts/Encabezado";
import PieDePagina from "./Componentes/Layouts/PieDePagina";
import IniciarSesion from "./Componentes/Paginas/IniciarSesion";
import { useAuth0 } from "@auth0/auth0-react";
import Autenticado from "./Componentes/Paginas/Autenticado";
import { Container } from "semantic-ui-react";

function App() {
  const { isAuthenticated: estaAutenticado } = useAuth0();

  return (
    <>
      <Encabezado />
      <Container  style={{ minHeight: "60vh", marginTop: "115px" }} >
        {estaAutenticado ? <Autenticado /> : <IniciarSesion />}
      </Container>
      <PieDePagina />
    </>
  );
}

export default App;
