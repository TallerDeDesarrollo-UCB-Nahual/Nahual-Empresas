import React, { Component } from "react";
import { Button, Modal, Image, Segment, Loader, Dimmer } from 'semantic-ui-react'
import CuerpoModal from './CuerpoModal';
import axios from "axios";

class detalleDeEgresade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false
    };
  }

  obtenerAPIDeEgresade() {
    const API_URL = process.env.REACT_APP_API_URL;
    axios
      .get(`${API_URL}/students/${this.props.id}`)
      .then(respuesta => {
        this.setState({
          egresade: respuesta.data.response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  mostrarModal(state) {
    this.setState({
      abierto: state
    });
  }

  render() {
    return (
      <Modal
        abierto={this.state.abierto}
        onClose={() => this.mostrarModal(false)}
        onabierto={() => this.mostrarModal(true)}
        size="small"
        closeIcon
        trigger={<Button onClick={() => (this.obtenerAPIDeEgresade(this.props.id))} icon='eye' />}
      >
        {
          this.state.egresade ?
            <CuerpoModal egresade={this.state.egresade} closeModal={() => (this.mostrarModal(false))} />
            :
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Cargando</Loader>
              </Dimmer>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        }
      </Modal>
    )
  }
}

export default detalleDeEgresade;
