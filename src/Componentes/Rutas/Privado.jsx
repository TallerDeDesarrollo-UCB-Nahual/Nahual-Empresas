import React from "react";
import { Route, Redirect } from "react-router-dom";

const Privado = ({ component: Component, ...rest }) => {
  let seInicioSesion = Object.keys(localStorage)[0]
    ? Object.keys(localStorage)[0].includes("@@auth0")
    : false;
  console.log(seInicioSesion,"privado");
  if (!seInicioSesion) {
    console.log("falsse");
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};

export default Privado;
