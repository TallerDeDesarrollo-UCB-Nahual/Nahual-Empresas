import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import OptionsModuleCompleted from "../FilterGraduates/OptionsModuleCompleted";

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
        <Menu.Item> Nivel de Ingles </Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
