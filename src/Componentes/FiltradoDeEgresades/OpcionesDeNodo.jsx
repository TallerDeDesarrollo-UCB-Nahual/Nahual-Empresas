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

  agregarOpcionesDeFiltrado(respuesta) {
    const opcionesDeNodo = []
    respuesta.forEach(opcionNodo => {
      opcionNodo={
        llave: opcionNodo.id,
        text: opcionNodo.nombre,
        valor: opcionNodo.id,
        filtrar_por: "nodo"
      }
      opcionesDeNodo.push(opcionNodo);
    });
    this.setState({opcionesDeFiltrado:opcionesDeNodo})
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
    if (nuevasProps.valor.desactivarOpcion === false || nuevasProps.quitarUnFiltro.filtrar_por === 'nodo')
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