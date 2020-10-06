import React, { Component } from "react";
import {Label, Icon } from "semantic-ui-react";

class OpcionesDeQuitarFiltro extends Component{
  constructor (props){
    super(props)
		this.state = {
      removerFiltro: {
        id:0,
        key:0,
        text: "Todos",
        value: "All",
        filterby: "Todos"
      },
      moduloCompletado:{
        mostrarBoton: false,
        texto: '',
        value: "All"
      },
      nivelDeIngles:{
        mostrarBoton: false,
        texto: '',
        value: "All"
      },
      nodo:{
        mostrarBoton: false,
        texto: '',
        value: "All"
      }
    };
  }

  ocultarBotones(){
    this.setState({nodo: {
      mostrarBoton:false,
    },moduloCompletado: {
      mostrarBoton:false
    },nivelDeIngles: {
      mostrarBoton:false
    }})
  }

  validarTodosLosFiltrosRemovidos(){
    if (this.state.moduloCompletado.mostrarBoton === false &&
      this.state.nodo.mostrarBoton===false &&
      this.state.nivelDeIngles.mostrarBoton===false)  
      this.props.quitarFiltro(false)
  }

  opciones(opcionSeleccionada){
    switch (opcionSeleccionada.filterby) {
      case 'ModuleCompleted':
        if (opcionSeleccionada.value==='All')
          this.setState({moduloCompletado: {
            mostrarBoton:false,
          }})
        else
          this.setState({moduloCompletado: {
            mostrarBoton:true,
            texto: opcionSeleccionada.value,
            filtro: 'Modulo Completado',
            value: "All",
            filterby: opcionSeleccionada.filterby
          }})
        break
      case 'EnglishLevel':
          if (opcionSeleccionada.value==='All')
          this.setState({nivelDeIngles: {
            mostrarBoton:false,
          }})
          else
            this.setState({nivelDeIngles: {
              mostrarBoton:true,
              texto: opcionSeleccionada.value,
              filtro: 'Nivel de Ingles',
              value: "All",
              filterby: opcionSeleccionada.filterby
            }})
         break
      case 'Node':
          if (opcionSeleccionada.value==='All')
          this.setState({nodo: {
            mostrarBoton:false,
          }})
          else
            this.setState({nodo: {
              mostrarBoton:true,
              texto: opcionSeleccionada.value,
              filtro: 'Nodo',
              value: "All",
              filterby: opcionSeleccionada.filterby
            }})
         break
      case 'Todos':
            this.validarTodosLosFiltrosRemovidos();
          this.ocultarBotones();
        break
      default:          
      this.validarTodosLosFiltrosRemovidos();
          this.ocultarBotones();
        break
    }
  }
  
  componentWillReceiveProps(newProps){
    this.opciones(newProps.opcion)
  }
  
  gato(opcionSeleccionada){
    this.opciones(opcionSeleccionada)
    this.props.quitarFiltro(opcionSeleccionada)
  }
  
  render(){
    return  (
      <div>
        {
          this.state.nodo.mostrarBoton === true &&
          <Label image >								
            {this.state.nodo.filtro}
            <Icon name='delete' link onClick={()=>this.gato(this.state.nodo)}/>
            <Label.Detail>{this.state.nodo.texto}</Label.Detail>
          </Label>
        }

        {
          this.state.moduloCompletado.mostrarBoton === true &&
          <Label image>								
            {this.state.moduloCompletado.filtro}
            <Icon name='delete' link onClick={()=>this.gato(this.state.moduloCompletado)}/>
            <Label.Detail>{this.state.moduloCompletado.texto}</Label.Detail>
          </Label>
        }
  
        {
          this.state.nivelDeIngles.mostrarBoton === true &&
          <Label image>								
            {this.state.nivelDeIngles.filtro}
            <Icon name='delete' link onClick={()=>this.gato(this.state.nivelDeIngles)}/>
            <Label.Detail>{this.state.nivelDeIngles.texto}</Label.Detail>
          </Label>
        }
      </div>
    );
  }
}

export default OpcionesDeQuitarFiltro;