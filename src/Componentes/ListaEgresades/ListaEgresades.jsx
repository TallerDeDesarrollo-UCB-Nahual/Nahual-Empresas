import React, { Component } from "react";
import {
  Table,
  Loader,
  Dimmer,
  Message,
  Label,
  Icon,
  Segment,
  Header
} from "semantic-ui-react";
import Egresade from "./Egresade";
import FabricaDeFiltros from "../FiltradoDeEgresades/FabricaDeFiltros/FabricaDeFiltros";
import ServicioDeEgresades from "../../Servicios/Servicios-Egresades/ServicioDeEgresades";
import BotonExportar from "./BotonExportar";
import OpcionesDeQuitarFiltro from "../FiltradoDeEgresades/OpcionesDeQuitarFiltro";
import BotonDeFiltrado from "./BotonDeFiltrado";
import iconoEgresade from "../../assets/egresadeIcon.png"

class ListaEgresades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egresades: [],
      filtrarPor: "Todos",
      criterioDeFiltrado: "",
      nuevaPeticionDeFiltrado: false,
      mostrarBotonDeCarga: true,
      quitarUnFiltro: "",
      deshabilitarFiltro: {
        value: "Todos",
        filtrarPor: "Todos",
        desactivarOpcion: false
      },
      egresadesSeleccionados: []
    };
  }

  componentDidMount() {
    this.obtenerTodesLosEgresades();
  }

  obtenerRespuesta(respuesta) {
    this.setState({
      egresades: respuesta.data.response,
      nuevaPeticionDeFiltrado: false,
      mostrarBotonDeCarga: false
    });
  }

  errorDeCaptura(error) {
    this.setState({
      nuevaPeticionDeFiltrado: false,
      mostrarBotonDeCarga: false
    });
    alert("Hay un error en la base de datos, status: " + error.status);
  }

  async obtenerTodesLosEgresades() {
    await ServicioDeEgresades.obtenerEgresades()
      .then((respuesta) => {
        this.obtenerRespuesta(respuesta);
      })
      .catch((error) => {
        this.errorDeCaptura(error);
      });
  }

  async obtenerEgresadesFiltrados() {
    await FabricaDeFiltros(this.state.criterioDeFiltrado)
      .then((respuesta) => {
        this.obtenerRespuesta(respuesta);
      })
      .catch((error) => {
        this.errorDeCaptura(error);
      });
  }

  listaEgresades() {
    if (this.state.nuevaPeticionDeFiltrado) {
      this.obtenerEgresadesFiltrados();
    }
    return this.mapeoListaEgresades(this.state.egresades);
  }

  mapeoListaEgresades(listaEgresades) {
    return listaEgresades.map((egresade, index) => {
      return (
        <Egresade
          item={egresade}
          key={egresade.id}
          seleccionarEgresades={this.seleccionarEgresades}
          numeracion={index + 1}
        />
      );
    });
  }

  enviarDatosAlEstado(data, estado) {
    this.setState({
      criterioDeFiltrado: data,
      filtrarPor: data.value,
      nuevaPeticionDeFiltrado: true,
      mostrarBotonDeCarga: true,
      egresadesSeleccionados: [],
      quitarUnFiltro: "",
      deshabilitarFiltro: {
        value: "Todos",
        filtrarPor: "Todos",
        desactivarOpcion: estado
      }
    });
    this.cambiarEstadoDeCheckbox(true);
  }

  manejarEvento = (data) => {
    this.enviarDatosAlEstado(data, true);
  };

  quitarFiltros(data) {
    this.enviarDatosAlEstado(data, false);
  }

  iconoDeCarga() {
    return (
      this.state.mostrarBotonDeCarga === true && (
        <Dimmer active inverted>
          <Loader inverted>Cargando</Loader>
        </Dimmer>
      )
    );
  }

  listaVacia() {
    let cabeceraDelMensaje = "por el momento no tenemos egresades disponibles.";
    let contenidoDelMensaje = "Intenta mas tarde";
    if (this.state.filtrarPor !== "Todos") {
      cabeceraDelMensaje = "no existen datos relacionados con su busqueda.";
      contenidoDelMensaje = "Intenta con otro filtro";
    }
    return this.state.egresades.length === 0 ? (
      <Message
        icon="warning sign"
        warning
        header={`Lo sentimos, ${cabeceraDelMensaje}`}
        content={`${contenidoDelMensaje}. Gracias`}
      />
    ) : (
      <BotonExportar
        seleccionados={this.state.egresadesSeleccionados}
        deseleccionarEgresades={() => {
          this.cambiarEstadoDeCheckbox(true);
          this.setState({ egresadesSeleccionados: [] });
        }}
      />
    );
  }

  removerFiltros() {
    return (
      this.state.deshabilitarFiltro.desactivarOpcion === true && (
        <Label
          pointing="left"
          as="a"
          onClick={() => this.quitarFiltros(this.state.deshabilitarFiltro)}
          valor={this.state.deshabilitarFiltro}
        >
          Quitar Todos
          <Icon name="delete" />
        </Label>
      )
    );
  }

  seleccionarTodosEgresades() {
    let checkboxes = this.cambiarEstadoDeCheckbox(false);
    checkboxes[0].checked
      ? this.setState({ egresadesSeleccionados: this.state.egresades })
      : this.setState({ egresadesSeleccionados: [] });
  }

  seleccionarEgresades = (egresade, checked) => {
    if (checked) {
      this.setState({
        egresadesSeleccionados: this.state.egresadesSeleccionados.concat(
          egresade
        )
      });
    } else {
      this.state.egresadesSeleccionados.map(() => {
        return this.setState({
          egresadesSeleccionados: this.state.egresadesSeleccionados.filter(
            (e) => e.id !== egresade.id
          )
        });
      });
    }
  };
  cambiarEstadoDeCheckbox(filtro) {
    let checkboxes = Array.from(document.getElementsByName("checkbox"));
    checkboxes.map((checkbox) => {
      return filtro
        ? (checkbox.checked = false)
        : (checkbox.checked = checkboxes[0].checked);
    });
    return checkboxes;
  }

  quitarUnFiltro = (data) => {
    this.setState({
      criterioDeFiltrado: {
        value: data.filtrarPor,
        filtrarPor: "SinFiltros"
      },
      quitarUnFiltro: data,
      nuevaPeticionDeFiltrado: true,
      mostrarBotonDeCarga: true
    });
  };

  verificarSiEraUltimoBoton = (data) => {
    if (data === false) this.quitarFiltros(this.state.deshabilitarFiltro);
  };

  render() {
    return (
      <>
        {this.iconoDeCarga()}
				<Header as='h2' image={iconoEgresade} textAlign="center" content='Lista Egresades' />
        <Segment>
          <BotonDeFiltrado
            manejarEvento={this.manejarEvento}
            valor={this.state.deshabilitarFiltro}
            quitarUnFiltro={this.state.quitarUnFiltro}
          />
          {this.removerFiltros()}
          <OpcionesDeQuitarFiltro
            quitarFiltro={this.quitarUnFiltro}
            esUltimoFiltro={this.verificarSiEraUltimoBoton}
            opcion={this.state.criterioDeFiltrado}
          />
        </Segment>
        <div style={{ overflowX: "auto" }}>
          <Table singleLine selectable striped unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onClick={() => this.seleccionarTodosEgresades()}
                    style={{ transform: "scale(1.4)" }}
                  />
                </Table.HeaderCell>
                <Table.HeaderCell>NOMBRE Y APELLIDO</Table.HeaderCell>
                <Table.HeaderCell>NODO</Table.HeaderCell>
                <Table.HeaderCell>MÓDULOS CURSADOS</Table.HeaderCell>
                <Table.HeaderCell>NIVEL DE INGLES</Table.HeaderCell>
                <Table.HeaderCell textAlign="center"></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.listaEgresades()}</Table.Body>
          </Table>
        </div>
        {this.listaVacia()}
      </>
    );
  }
}

export default ListaEgresades;
