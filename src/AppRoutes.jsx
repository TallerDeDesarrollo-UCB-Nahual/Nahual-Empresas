import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Encabezado from "./Componentes/Layouts/Encabezado";
import PieDePagina from "./Componentes/Layouts/PieDePagina";
import ListaEgresades from "./Componentes/ListaEgresades/ListaEgresades";
import IniciarSesion from "./Componentes/Login/IniciarSesion";
import Privado from "./Componentes/Rutas/Privado";
import Publico from "./Componentes/Rutas/Publico";
import ComprobarAutorizacion from "./Componentes/Login/ComprobarAutorizacion";
import { useAuth0 } from "@auth0/auth0-react";


const AppRoutes = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <Router>
      <Encabezado />
      <div className="ui container" style={{ minHeight: "60vh" }}>
        <Switch>
          {/* admin */}
          <Privado
            path="/comprobar-autorizacion"
            exact
            component={ComprobarAutorizacion}
          />

          <Privado
            path="/lista-egresades"
            exact
            component={ListaEgresades}
          />
          {/* Publico */}
          <Publico
            path="/"
            exact
            seInicioSesion={isAuthenticated}
            component={IniciarSesion}
          />

          <Route component={() => <h2>ERROR 404</h2>} />
        </Switch>
      </div>
      <PieDePagina />
    </Router>
  );
};

export default AppRoutes;
