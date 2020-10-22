import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Encabezado from "./Componentes/Layouts/Encabezado";
import PieDePagina from "./Componentes/Layouts/PieDePagina";
import ListaEgresades from "./Componentes/ListaEgresades/ListaEgresades";
import IniciarSesion from "./Componentes/Login/IniciarSesion";
import Privado from "./Componentes/Rutas/Privado";
import Publico from "./Componentes/Rutas/Publico";
import { useAuth0 } from "@auth0/auth0-react";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Encabezado />
      <div className="ui container" style={{ minHeight: "60vh" }}>
        <Switch>
          {/* admin */}
          <Privado
            path="/lista-egresades"
            component={ListaEgresades}
            userLogged={isAuthenticated}
          />
          {/* Publico */}
          <Publico
            path="/IniciarSesion"
            component={IniciarSesion}
            userLogged={isAuthenticated}
          />
        
          <Route component={() => <h2>ERROR 404</h2>} />
        </Switch>
      </div>
      <PieDePagina />
    </Router>
  );
};

export default AppRoutes;
