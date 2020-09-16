import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import FilterByModuleCompleted from "../FilterGraduates/ByModuleCompleted";

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
        <FilterByModuleCompleted handlOnChange={props.handlOnChange}/>
        <Menu.Item> Nivel de Ingles </Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
