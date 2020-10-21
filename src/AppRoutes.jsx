import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Encabezado from "./Componentes/Layouts/Encabezado";
import PieDePagina from "./Componentes/Layouts/PieDePagina";
import ListaEgresades from "./Componentes/ListaEgresades/ListaEgresades";
import IniciarSesion from "./Componentes/Login/IniciarSesion";
import Privado from "./Componentes/Rutas/Privado";
import Publico from "./Componentes/Rutas/Publico";

const AppRoutes = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    // eslint-disable-next-line
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cambiarAutenticacion = () => {
    console.log("cambio");
    if (isAuthenticated) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", true);
    }
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <Router>
      <Encabezado
        usuarioLogueado={isAuthenticated}
        cambiarAutenticacion={cambiarAutenticacion}
      />
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
