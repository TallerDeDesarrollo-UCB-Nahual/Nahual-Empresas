import React from "react";
import { Route, Redirect } from "react-router-dom";

const Privado = ({ component: Component, userLogged, ...rest }) => {
  if (!userLogged) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};

export default Privado;
