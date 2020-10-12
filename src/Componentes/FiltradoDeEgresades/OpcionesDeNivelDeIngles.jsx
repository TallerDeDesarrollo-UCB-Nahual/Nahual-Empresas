import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ServicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/ServicioDeFiltrado";

class OpcionesDeNivelDeIngles extends Component{
  constructor (props){
    super(props)
		this.state = {
      valor: '',
      opcionesDeFiltrado : []
    };
  }

  async componentDidMount() {
    await ServicioDeFiltrado.obtenerOpcionesDeNivelDeIngles()
    .then(respuesta => {
      this.agregarOpcionesDeFiltrado(respuesta.data.response);
    })
    .catch(error => {
      alert("Error en la base de datos.")
    })
  }

  agregarNivelDeInglesPorDefecto(){
    const nivelDeInglesTodos={
      id:0,
      key:0,
      text: "Todos",
      value: "Todos",
      filterby: "nivelDeIngles"
    }
    return nivelDeInglesTodos;
  }

  agregarOpcionesDeFiltrado(respuesta) {
    const opcionesDeNivelDeIngles = []
    opcionesDeNivelDeIngles.push(this.agregarNivelDeInglesPorDefecto());
    respuesta.forEach(opcionDeNivelDeIngles => {
        opcionDeNivelDeIngles={
        key: opcionDeNivelDeIngles.id,
        text: opcionDeNivelDeIngles.nombre,
        value: opcionDeNivelDeIngles.nombre,
        filterby: "nivelDeIngles"
      }
      opcionesDeNivelDeIngles.push(opcionDeNivelDeIngles);
    });
    this.setState({opcionesDeFiltrado :opcionesDeNivelDeIngles})
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
        text='Nivel de Ingles' 
        pointing='left'
        className='link item'
      >
        {this.opcionesDeFiltro()}
      </Dropdown>
    );
  }
}

export default OpcionesDeNivelDeIngles;