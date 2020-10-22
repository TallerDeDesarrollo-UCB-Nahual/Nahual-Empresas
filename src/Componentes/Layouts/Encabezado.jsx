import React, { useState } from "react";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Container,
  Menu,
  Segment,
  Visibility,
  Image,
  Header,
  Responsive
} from "semantic-ui-react";
import BotonIniciarSesion from "../Login/BotonIniciarSesion";
import BotonCerrarSesion from "../Login/BotonCerrarSesion";

function Encabezado () {
  
  const state = {};
  const [fixed, setFixed] = useState(true);
  
  const hideFixedMenu = () => this.setState({ fixed: false });
  const showFixedMenu = () => this.setState({ fixed: true });

    const {
      isAuthenticated
    } = useAuth0();
    return (
      <>
        <Visibility
          once={false}
        >
          <Responsive maxWidth={767}>
            <Segment vertical style={{ height: "11rem" }}></Segment>
          </Responsive>
          <Responsive minWidth={768}>
            <Segment vertical style={{ height: "7rem" }}></Segment>
          </Responsive>
          <Menu stackable fixed="top">
            <Container>
              <Menu.Item>
                <Image
                  rounded
                  size={fixed ? "tiny" : "small"}
                  src={NahualLogo}
                />
              </Menu.Item>
              {isAuthenticated ? (
                <>
                  <Menu.Item position="right">
                    <Header
                      color="grey"
                      as={fixed ? "h3" : "h2"}
                      icon="graduation"
                      content="Lista de Egresades"
                    />
                  </Menu.Item>

                  <Menu.Item>
                    <BotonCerrarSesion
                      cambiarSesion={() => this.cambiarSesion2()}
                    />
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item position="right">
                    <Header
                      color="grey"
                      as={fixed ? "h3" : "h2"}
                      icon="graduation"
                      content="Bienvenido"
                    />
                  </Menu.Item>

                  <Menu.Item>
                    <BotonIniciarSesion
                      cambiarSesion={() => this.cambiarSesion2()}
                    />
                  </Menu.Item>
                </>
              )}
            </Container>
          </Menu>
        </Visibility>
      </>
    );
  }

export default Encabezado;
