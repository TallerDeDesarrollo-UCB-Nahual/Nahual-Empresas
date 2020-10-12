import React from "react";
import { Dropdown } from "semantic-ui-react";
import OpcionesDeModulosCompletados from "../FiltradoDeEgresades/OpcionesDeModulosCompletados";
import OpcionesDeNivelDeIngles from "../FiltradoDeEgresades/OpcionesDeNivelDeIngles";
import OpcionesDeNodo from "../FiltradoDeEgresades/OpcionesDeNodo";

function BotonDeFiltrado(props){
  return (
    <Dropdown 
      text= 'Filtrar'
      icon='filter'
      floating
      labeled
      button
      className='icon'
    >
      <Dropdown.Menu style={{width:"165px"}}>
        <OpcionesDeNodo manejarEvento={props.manejarEvento} valor={props.valor}/>
        <OpcionesDeModulosCompletados manejarEvento={props.manejarEvento} valor={props.valor}/>
        <OpcionesDeNivelDeIngles manejarEvento={props.manejarEvento} valor={props.valor}/>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default BotonDeFiltrado;
