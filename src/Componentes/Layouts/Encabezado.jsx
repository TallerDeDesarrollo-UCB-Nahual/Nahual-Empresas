import React from "react";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Container,
  Menu,
  Image,
  Dropdown
} from "semantic-ui-react";

function Encabezado() {
  const { user: usuario, isAuthenticated: estaAutenticado, logout: cerrarSesion } = useAuth0();
  return (
    <>
      <Menu stackable fixed="top">
        <Container>
          <Menu.Item>
            <Image rounded size={"small"} src={NahualLogo} />
          </Menu.Item>
          {estaAutenticado && (
            <>
              <Menu.Item  position="right">
                <Dropdown
                  trigger={
                    <span>
                      <Image src={usuario.picture} avatar />
                      {usuario.name}
                    </span>
                  }
                  options={[
                    {
                      key: "cerrar-sesion",
                      text: "Cerrar Sesión",
                      icon: "sign out"
                    }
                  ]}
                  pointing="top left"
                  onChange={() => cerrarSesion()}
                />
              </Menu.Item>
              <Menu.Item></Menu.Item>
            </>
          ) }
        </Container>
      </Menu>
    </>
  );
}

export default Encabezado;
