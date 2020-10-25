import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button, Header, Image, Segment } from "semantic-ui-react";
import imagenSaludo from "../../assets/saludo.png";

const IniciarSesion = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Segment vertical textAlign="center">
      <Image size="small" centered src={imagenSaludo} />
      <Header textAlign="center" size="huge" icon>
        !Bienvenido!
        <Header.Subheader>
          Es bueno tenerte acá, para poder continuar debes:
        </Header.Subheader>
      </Header>
      <Button
       style={{  marginTop: "30px" }}
        content="Iniciar Sesión"
        icon="right chevron"
        labelPosition="right"
        size='big'
        onClick={() => loginWithRedirect()}
      />
    </Segment>
  );
};

export default IniciarSesion;
