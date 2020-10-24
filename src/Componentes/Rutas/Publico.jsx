import React from "react";
import { Route, Redirect } from "react-router-dom";

const Publico = ({ component: Component, ...rest }) => {
  let seInicioSesion = Object.keys(localStorage)[0]
    ? Object.keys(localStorage)[0].includes("@@auth0")
    : false;

  console.log(seInicioSesion, "publico");

  if (seInicioSesion) {
    return <Redirect to="/comprobar-autorizacion" />;
  }
  return <Route {...rest} component={Component} />;
};

export default Publico;
