import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ServicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/ServicioDeFiltrado";

class OpcionesDeNodo extends Component{
  constructor (props){
    super(props)
		this.state = {
      value: '',
      opcionesDeFiltrado: []
    };
  }

  async componentDidMount() {
    await ServicioDeFiltrado.obtenerOpcionesDeNodos()
    .then(respuesta => {
      this.agregarOpcionesDeFiltrado(respuesta.data.response);
    })
    .catch(error => {
      alert("Error en la base de datos.")
    })
  }

  agregarNodoPorDefecto(){
    const nodoTodos={
      id:0,
      key:0,
      text: "Todos",
      value: "Todos",
      filterby: "nodo"
    }
    return nodoTodos;
  }

  agregarOpcionesDeFiltrado(respuesta) {
    const opcionesDeNodo = []
    opcionesDeNodo.push(this.agregarNodoPorDefecto());
    respuesta.forEach(opcionNodo => {
      opcionNodo={
        key: opcionNodo.id,
        text: opcionNodo.name,
        value: opcionNodo.name,
        filterby: "nodo"
      }
      opcionesDeNodo.push(opcionNodo);
    });
    this.setState({opcionesDeFiltrado:opcionesDeNodo})
  }

  manejarEvento(opcionSeleccionada){
    this.setState({ value: opcionSeleccionada.value });
    this.props.manejarEvento(opcionSeleccionada)
  }

  render(){
    return  (
      <Dropdown
        text='Nodo' 
        pointing='left' 
        className='link item'
      >
        <Dropdown.Menu >
          {this.state.opcionesDeFiltrado.map((opcion) => (
            <Dropdown.Item 
              active={opcion.value === this.state.value}
              key={opcion.key}
              value={opcion.value}
              text={opcion.text}
              {... opcion}
              onClick={() => this.manejarEvento(opcion)}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default OpcionesDeNodo;