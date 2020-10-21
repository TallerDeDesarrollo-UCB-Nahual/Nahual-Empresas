import React, { Component } from "react";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";

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

class Encabezado extends Component {
  state = {};
  cambiarSesion2() {
    this.props.cambiarAutenticacion();
  }
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    const { fixed } = this.state;
    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
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
              {this.props.usuarioLogueado ? (
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
}
export default Encabezado;
