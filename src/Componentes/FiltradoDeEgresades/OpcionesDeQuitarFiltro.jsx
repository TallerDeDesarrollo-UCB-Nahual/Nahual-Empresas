import React, { Component } from "react";
import { Label, Icon } from "semantic-ui-react";

class OpcionesDeQuitarFiltro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removerFiltro: {
        id: 0,
        key: 0,
        text: "Todos",
        value: "Todos",
        filterby: "Todos",
      },
      moduloCompletado: {
        mostrarBoton: false,
        texto: "",
        value: "Todos",
      },
      nivelDeIngles: {
        mostrarBoton: false,
        texto: "",
        value: "Todos",
      },
      nodo: {
        mostrarBoton: false,
        texto: "",
        value: "Todos",
      },
    };
  }

  ocultarBotones() {
    this.setState({
      nodo: {
        mostrarBoton: false,
      },
      moduloCompletado: {
        mostrarBoton: false,
      },
      nivelDeIngles: {
        mostrarBoton: false,
      },
    });
  }

  validarTodosLosFiltrosRemovidos() {
    if (
      this.state.moduloCompletado.mostrarBoton === false &&
      this.state.nodo.mostrarBoton === false &&
      this.state.nivelDeIngles.mostrarBoton === false
    ) {
      this.ocultarBotones();
      this.props.esUltimoFiltro(false);
    }
  }

  enviarEstadosModuloCompletado(valor, filtroPor, objeto) {
    if (valor === "Todos") {
      this.setState(
        {
          moduloCompletado: {
            mostrarBoton: false,
          },
        },
        () => {
          this.validarTodosLosFiltrosRemovidos();
          this.props.quitarFiltro(objeto);
        }
      );
    } else
      this.setState({
        moduloCompletado: {
          mostrarBoton: true,
          texto: objeto.text,
          filtro: "Modulo Completado",
          value: "Todos",
          filterby: filtroPor,
        },
      });
  }

  enviarEstadosNivelDeIngles(valor, filtroPor, objeto) {
    if (valor === "Todos") {
      this.setState(
        {
          nivelDeIngles: {
            mostrarBoton: false,
          },
        },
        () => {
          this.validarTodosLosFiltrosRemovidos();
          this.props.quitarFiltro(objeto);
        }
      );
    } else
      this.setState({
        nivelDeIngles: {
          mostrarBoton: true,
          texto: objeto.text,
          filtro: "Nivel de Ingles",
          value: "Todos",
          filterby: filtroPor,
        },
      });
  }

  enviarEstadosNodo(valor, filtroPor, objeto) {
    if (valor === "Todos") {
      this.setState(
        {
          nodo: {
            mostrarBoton: false,
          },
        },
        () => {
          this.validarTodosLosFiltrosRemovidos();
          this.props.quitarFiltro(objeto);
        }
      );
    } else
      this.setState({
        nodo: {
          mostrarBoton: true,
          texto: objeto.text,
          filtro: "Nodo",
          value: "Todos",
          filterby: filtroPor,
        },
      });
  }

  opciones(opcionSeleccionada) {
    switch (opcionSeleccionada.filterby) {
      case "moduloCompletado":
        this.enviarEstadosModuloCompletado(
          opcionSeleccionada.value,
          opcionSeleccionada.filterby,
          opcionSeleccionada
        );
        break;
      case "nivelDeIngles":
        this.enviarEstadosNivelDeIngles(
          opcionSeleccionada.value,
          opcionSeleccionada.filterby,
          opcionSeleccionada
        );
        break;
      case "nodo":
        this.enviarEstadosNodo(
          opcionSeleccionada.value,
          opcionSeleccionada.filterby,
          opcionSeleccionada
        );
        break;
      case "Todos":
        this.ocultarBotones();
        break;
    }
  }

  componentWillReceiveProps(newProps) {
    this.opciones(newProps.opcion);
  }

  alHacerClick(opcionSeleccionada) {
    this.opciones(opcionSeleccionada);
  }

  render() {
    return (
      <>
        {this.state.nodo.mostrarBoton === true && (
          <Label image>
            {this.state.nodo.filtro}
            <Icon
              name="delete"
              link
              onClick={() => this.alHacerClick(this.state.nodo)}
            />
            <Label.Detail>{this.state.nodo.texto}</Label.Detail>
          </Label>
        )}

        {this.state.moduloCompletado.mostrarBoton === true && (
          <Label image>
            {this.state.moduloCompletado.filtro}
            <Icon
              name="delete"
              link
              onClick={() => this.alHacerClick(this.state.moduloCompletado)}
            />
            <Label.Detail>{this.state.moduloCompletado.texto}</Label.Detail>
          </Label>
        )}

        {this.state.nivelDeIngles.mostrarBoton === true && (
          <Label image>
            {this.state.nivelDeIngles.filtro}
            <Icon
              name="delete"
              link
              onClick={() => this.alHacerClick(this.state.nivelDeIngles)}
            />
            <Label.Detail>{this.state.nivelDeIngles.texto}</Label.Detail>
          </Label>
        )}
      </>
    );
  }
}

export default OpcionesDeQuitarFiltro;
