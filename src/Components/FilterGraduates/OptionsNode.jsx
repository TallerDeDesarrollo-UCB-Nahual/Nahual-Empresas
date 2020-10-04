import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import servicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/ServicioDeFiltrado";

class opcionesDeNodo extends Component{
  constructor (props){
    super(props)
		this.state = {
      value: '',
      opcionesDeFiltrado: []
    };
  }

  async componentDidMount() {
    await servicioDeFiltrado.obtenerOpcionesDeNodos()
    .then(response => {
      this.agregarOpcionesDeFiltrado(response.data.response);
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
      value: "All",
      filterby: "Node"
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
        filterby: "Node"
      }
      opcionesDeNodo.push(opcionNodo);
    });
    this.setState({opcionesDeFiltrado:opcionesDeNodo})
  }

  manejar(opcionSeleccionada){
    this.setState({ value: opcionSeleccionada.value });
    this.props.handleOnSelectOption(opcionSeleccionada)
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
              onClick={() => this.manejar(opcion)}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default opcionesDeNodo;