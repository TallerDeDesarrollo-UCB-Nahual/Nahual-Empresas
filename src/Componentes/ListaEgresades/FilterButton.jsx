import React from "react";
import { Dropdown } from "semantic-ui-react";
import OptionsModuleCompleted from "../FiltradoDeEgresades/OpcionesDeModulosCompletados";
import OptionsEnglishLevel from "../FiltradoDeEgresades/OpcionesDeNivelDeIngles";
import OptionsNode from "../FiltradoDeEgresades/OpcionesDeNodo";

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
        <OptionsNode 
          handleOnSelectOption={props.handleOnSelectOption} 
          valor={props.valor}
          quitarUnFiltro={props.quitarUnFiltro} 
        />
        <OptionsModuleCompleted 
          handleOnSelectOption={props.handleOnSelectOption} 
          valor={props.valor}
          quitarUnFiltro={props.quitarUnFiltro} 
        />
        <OptionsEnglishLevel           
          handleOnSelectOption={props.handleOnSelectOption} 
          valor={props.valor}
          quitarUnFiltro={props.quitarUnFiltro} 
        />
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default FilterButton;
