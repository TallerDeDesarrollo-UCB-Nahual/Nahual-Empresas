import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import OptionsModuleCompleted from "../FilterGraduates/OptionsModuleCompleted";
import OptionsEnglishLevel from "../FilterGraduates/OptionsEnglishLevel";

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
        <Menu.Item> Nodo </Menu.Item>
        <OptionsModuleCompleted handleOnSelectOption={props.handleOnSelectOption}/>
        <OptionsEnglishLevel handleOnSelectOption={props.handleOnSelectOption}/>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default FilterButton;
