import React from "react";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Container,
  Menu,
  Image,
  Header,
  Dropdown,
  Button
} from "semantic-ui-react";

function Encabezado() {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <>
      <Menu stackable fixed="top">
        <Container>
          <Menu.Item>
            <Image rounded size={"small"} src={NahualLogo} />
          </Menu.Item>
          {isAuthenticated ? (
            <>
              <Menu.Item position="right">
                <Header
                  color="grey"
                  as="h2"
                  icon="graduation"
                  content="Lista de Egresades"
                />
              </Menu.Item>
              <Menu.Item>
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
                  icon={null}
                  onChange={() => logout()}
                />
              </Menu.Item>
              <Menu.Item></Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item position="right">
                <Header
                  color="grey"
                  as="h2"
                  icon="graduation"
                  content="Bienvenido"
                />
              </Menu.Item>
              <Menu.Item>
                <Button onClick={() => loginWithRedirect()}>
                  Iniciar Sesíon
                </Button>
              </Menu.Item>
            </>
          )}
        </Container>
      </Menu>
    </>
  );
}

export default Encabezado;
