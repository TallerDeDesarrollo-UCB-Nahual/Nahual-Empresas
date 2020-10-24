import Axios from "axios";
import React, { Component } from "react";
import ListaEgresades from "../ListaEgresades/ListaEgresades";
import NoAutorizado from "./NoAutorizado";
import { Auth0Context } from "@auth0/auth0-react";

import { Dimmer, Loader } from "semantic-ui-react";

class Autenticado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validado: false,
      mostrarBotonDeCarga: true
    };
  }
  static contextType = Auth0Context;

  componentDidMount() {
    this.obtenerVerificacion();
  }
  errorDeCaptura(error) {
    this.setState({
      mostrarBotonDeCarga: false
    });
    alert("Hay un error en la base de datos, status: " + error.status);
  }
  async obtenerVerificacion() {
    const SERVICIO_DE_VERIFICACION_API_NAHUAL =
      process.env.REACT_APP_API_ACCESO_URL;
    const { user } = this.context;

    await Axios.post(`${SERVICIO_DE_VERIFICACION_API_NAHUAL}/verificar`, {
      correo: user.email,
      nombre: user.name,
      origen: "nahual-empresas"
    })
      .then((respuesta) => {
        this.setState({
          validado: respuesta.data.response,
          mostrarBotonDeCarga: false
        });
      })
      .catch((error) => {
        //this.errorDeCaptura(error);
      });
    setTimeout(() => {
      this.setState({
        validado: false,
        mostrarBotonDeCarga: false
      });
    }, 2000);
  }
  iconoDeCarga() {
    return (
      this.state.mostrarBotonDeCarga === true && (
        <Dimmer active inverted>
          <Loader inverted>Verificando Acceso...</Loader>
        </Dimmer>
      )
    );
  }
  render() {
    return (
      <>
        {this.iconoDeCarga()}
        {this.state.validado ? <ListaEgresades /> : <NoAutorizado />}
      </>
    );
  }
}

export default Autenticado;
