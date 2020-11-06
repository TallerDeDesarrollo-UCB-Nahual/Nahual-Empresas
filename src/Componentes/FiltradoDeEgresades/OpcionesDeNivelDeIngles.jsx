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

  agregarOpcionesDeFiltrado(respuesta) {
    const opcionesDeNivelDeIngles = []
    respuesta.forEach(opcionDeNivelDeIngles => {
        opcionDeNivelDeIngles={
        llave: opcionDeNivelDeIngles.id,
        text: opcionDeNivelDeIngles.nombre,
        valor: opcionDeNivelDeIngles.id,
        filtrar_por: "nivelDeIngles"
      }
      opcionesDeNivelDeIngles.push(opcionDeNivelDeIngles);
    });
    this.setState({opcionesDeFiltrado :opcionesDeNivelDeIngles})
  }

  manejarEvento(opcionSeleccionada){
    this.setState({ valor: opcionSeleccionada.valor });
    this.props.manejarEvento(opcionSeleccionada)
  }

  opcionesDeFiltro(){
     return (
      <Dropdown.Menu >
        {this.state.opcionesDeFiltrado.map((opcionSeleccionada) => (
          <Dropdown.Item 
            activo={opcionSeleccionada.valor === this.state.valor} 
            llave={opcionSeleccionada.key}
            valor={opcionSeleccionada.valor}
            texto={opcionSeleccionada.text}
            {... opcionSeleccionada}
            onClick={() => this.manejarEvento(opcionSeleccionada)}
          />
        ))}
      </Dropdown.Menu>
      )
  }

  componentWillReceiveProps(nuevasProps){
    if (nuevasProps.valor.desactivarOpcion === false || nuevasProps.quitarUnFiltro.filtrar_por === 'nivelDeIngles')
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