import React, { Component } from "react";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";

import {
  Container,
  Menu,
  Segment,
  Visibility,
  Image,
  Header
} from "semantic-ui-react";

class Encabezado extends Component {
  state = {};
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
          <Segment vertical style={{ height: "100px" }}>
            <Menu stackable fixed="top">
              <Container>
                <Menu.Item>
                  <Image
                    rounded
                    size={fixed ? "tiny" : "small"}
                    src={NahualLogo}
                  />
                </Menu.Item>
                <Menu.Item position="right">
                  <Header
                    color="grey"
                    as={fixed ? "h3" : "h2"}
                    icon="graduation"
                    content="Lista de Egresades"
                  />
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </>
    );
  }
}
export default Encabezado;
