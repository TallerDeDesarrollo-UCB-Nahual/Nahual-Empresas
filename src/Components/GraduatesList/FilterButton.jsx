import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import ByModuleCompleted from "../FilterGraduates/ByModuleCompleted";

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
        <ByModuleCompleted handleOnSelectOption={props.handleOnSelectOption}/>
        <Menu.Item> Nivel de Ingles </Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
