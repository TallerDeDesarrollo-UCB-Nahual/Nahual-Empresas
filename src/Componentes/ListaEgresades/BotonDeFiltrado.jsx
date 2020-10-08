import React from "react";
import { Dropdown } from "semantic-ui-react";
import OpcionesDeModulosCompletados from "../FiltradoEgresades/OpcionesDeModulosCompletados";
import OpcionesDeNivelDeIngles from "../FiltradoEgresades/OpcionesDeNivelDeIngles";
import OpcionesDeNodo from "../FiltradoEgresades/OpcionesDeNodo";

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
        <OpcionesDeNodo manejar={props.manejar}/>
        <OpcionesDeModulosCompletados manejar={props.manejar}/>
        <OpcionesDeNivelDeIngles manejar={props.manejar}/>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default BotonDeFiltrado;
