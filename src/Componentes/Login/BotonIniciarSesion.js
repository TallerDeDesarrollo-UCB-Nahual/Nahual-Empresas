import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const BotonIniciarSesion = ({ cambiarSesion }) => {
  // const { loginWithRedirect } = useAuth0();
  return <Button onClick={cambiarSesion}>Iniciar Sesíon</Button>;
};

export default BotonIniciarSesion;