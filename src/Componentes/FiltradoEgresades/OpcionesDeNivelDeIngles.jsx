import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ServicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/servicioDeFiltrado";

class opcionesDeNivelDeIngles extends Component{
  constructor (props){
    super(props)
		this.state = {
      opcionesDeFiltrado: []
    };
  }

  async componentDidMount() {
    await ServicioDeFiltrado.obtenerOpcionesDeNivelesDeIngles()
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
        text: opcionDeNivelDeIngles.name,
        value: opcionDeNivelDeIngles.name,
        filterby: "nivelDeIngles"
      }
      opcionesDeNivelDeIngles.push(opcionDeNivelDeIngles);
    });
    this.setState({opcionesDeFiltrado:opcionesDeNivelDeIngles})
  }

  manejar(opcionSeleccionada){
    this.setState({ value: opcionSeleccionada.value });
    this.props.manejar(opcionSeleccionada)
  }
  
  render(){
    return  (
      <Dropdown
        text='Nivel de Ingles' 
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

export default opcionesDeNivelDeIngles;