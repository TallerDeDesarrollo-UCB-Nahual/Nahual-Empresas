import React, { Component } from "react";
import { Button, Modal, Image, Segment, Loader, Dimmer } from 'semantic-ui-react'
import BodyModal from './BodyModal';
import axios from "axios";

class GraduateDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  getGraduateAPI() {
    const API_URL = process.env.REACT_APP_API_URL;
    axios
      .get(`${API_URL}/estudiantes/${this.props.id}`)
      .then(response => {
        this.setState({
          graduate: response.data.response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  showModal(state) {
    this.setState({
      open: state
    });
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={() => this.showModal(false)}
        onOpen={() => this.showModal(true)}
        size="small"
        closeIcon
        trigger={<Button onClick={() => (this.getGraduateAPI(this.props.id))} icon='eye' />}
      >
        {
          this.state.graduate ?
            <BodyModal graduate={this.state.graduate} closeModal={() => (this.showModal(false))} />
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

export default GraduateDetail
