import React from "react";
import { Dropdown } from "semantic-ui-react";
import OptionsModuleCompleted from "../FilterGraduates/OptionsModuleCompleted";
import OptionsEnglishLevel from "../FilterGraduates/OptionsEnglishLevel";
import OptionsNode from "../FilterGraduates/OptionsNode";

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
        <OptionsNode handleOnSelectOption={props.handleOnSelectOption} valor={props.valor}/>
        <OptionsModuleCompleted handleOnSelectOption={props.handleOnSelectOption} valor={props.valor}/>
        <OptionsEnglishLevel handleOnSelectOption={props.handleOnSelectOption} valor={props.valor}/>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default FilterButton;
