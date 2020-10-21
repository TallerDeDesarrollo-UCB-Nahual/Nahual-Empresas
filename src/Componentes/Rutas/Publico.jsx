import React from "react";
import { Route, Redirect } from "react-router-dom";
import IniciarSesion from "../Login/IniciarSesion";

const Publico = ({ component: Component, userLogged, ...rest }) => {
  if (userLogged && Component === IniciarSesion) {
    return <Redirect to="/lista-egresades" />;
  }
  return <Route {...rest} component={Component} />;
};

export default Publico;
