import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ServicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/ServicioDeFiltrado";

class OpcionesDeNodo extends Component{
  constructor (props){
    super(props)
		this.state = {
      valor: '',
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
        text: opcionNodo.nombre,
        value: opcionNodo.nombre,
        filterby: "nodo"
      }
      opcionesDeNodo.push(opcionNodo);
    });
    this.setState({opcionesDeFiltrado:opcionesDeNodo})
  }

  manejarEvento(opcionSeleccionada){
    this.setState({ valor: opcionSeleccionada.value });
    this.props.handleOnSelectOption(opcionSeleccionada)
  }

  opcionesDeFiltro(){
     return (
      <Dropdown.Menu >
        {this.state.opcionesDeFiltrado.map((opcionSeleccionada) => (
          <Dropdown.Item 
            active={opcionSeleccionada.value === this.state.valor}
            key={opcionSeleccionada.key}
            value={opcionSeleccionada.value}
            text={opcionSeleccionada.text}
            {... opcionSeleccionada}
            onClick={() => this.manejarEvento(opcionSeleccionada)}
          />
        ))}
      </Dropdown.Menu>
      )
  }

  recibirProps(nuevasProps){
    if (nuevasProps.valor.desactivarOpcion === false)
      this.setState({valor:'Todos'})
  }

  render(){
    return  (
      <Dropdown
        text='Nodo' 
        pointing='left' 
        className='link item'
      >
        {this.opcionesDeFiltro()}
      </Dropdown>
    );
  }
}

export default OpcionesDeNodo;