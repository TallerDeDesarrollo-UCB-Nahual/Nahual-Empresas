import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ServicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/servicioDeFiltrado";

class opcionesDeModulosCompletados extends Component{
  constructor (props){
    super(props)
		this.state = {
      value: '',
      opcionesDeFiltrado: []
    };
  }

  async componentDidMount() {
    await ServicioDeFiltrado.obtenerOpcionesDeModulosCompletados()
    .then(respuesta => {
      this.agregarOpcionesDeFiltrado(respuesta.data.response);
    })
    .catch(error => {
      alert("Error en la base de datos.")
    })
  }

  agregarModuloCompletadoPorDefecto(){
    const moduloCompletadoTodos={
      id:0,
      key:0,
      text: "Todos",
      value: "Todos",
      filterby: "moduloCompletado"
    }
    return moduloCompletadoTodos;
  }

  agregarOpcionesDeFiltrado(respuesta) {
    const opcionesDeModulosCompletados = []
    opcionesDeModulosCompletados.push(this.agregarModuloCompletadoPorDefecto());
    respuesta.forEach(opcionDeModuloCompletado => {
      opcionDeModuloCompletado={
        key: opcionDeModuloCompletado.id,
        text: opcionDeModuloCompletado.name,
        value: opcionDeModuloCompletado.name,
        filterby: "moduloCompletado"
      }
      opcionesDeModulosCompletados.push(opcionDeModuloCompletado);
    });
    this.setState({opcionesDeFiltrado:opcionesDeModulosCompletados})
  }

  manejar(opcionSeleccionada){
    this.setState({ value: opcionSeleccionada.value });
    this.props.manejar(opcionSeleccionada)
  }

  render(){
    return  (
      <Dropdown
        text='Modulo Cursado' 
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

export default opcionesDeModulosCompletados;