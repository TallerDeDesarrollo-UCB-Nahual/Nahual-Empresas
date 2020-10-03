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
        <OptionsNode handleOnSelectOption={props.handleOnSelectOption}/>
        <OptionsModuleCompleted handleOnSelectOption={props.handleOnSelectOption} value={props.value}/>
        <OptionsEnglishLevel handleOnSelectOption={props.handleOnSelectOption}/>
        <Dropdown.Item > {props.value.value}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default FilterButton;
