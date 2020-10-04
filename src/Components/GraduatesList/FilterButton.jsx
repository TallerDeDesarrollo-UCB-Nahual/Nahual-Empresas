import React from "react";
import { Dropdown } from "semantic-ui-react";
import OpcionesDeModulosCompletados from "../FilterGraduates/OpcionesDeModulosCompletados";
import OpcionesDeNivelDeIngles from "../FilterGraduates/OpcionesDeNivelDeIngles";
import OpcionesDeNodo from "../FilterGraduates/OpcionesDeNodo";

function FilterButton(props){
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
        <OpcionesDeNodo handleOnSelectOption={props.handleOnSelectOption}/>
        <OpcionesDeModulosCompletados handleOnSelectOption={props.handleOnSelectOption}/>
        <OpcionesDeNivelDeIngles handleOnSelectOption={props.handleOnSelectOption}/>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default FilterButton;
