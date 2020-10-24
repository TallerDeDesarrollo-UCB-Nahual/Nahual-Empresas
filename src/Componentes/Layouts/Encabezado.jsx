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
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <Menu stackable fixed="top">
        <Container>
          <Menu.Item>
            <Image rounded size={"small"} src={NahualLogo} />
          </Menu.Item>
          {isAuthenticated && (
            <>
              <Menu.Item  position="right">
                <Dropdown
                  trigger={
                    <span>
                      <Image src={user.picture} avatar />
                      {user.name}
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
                  onChange={() => logout()}
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
