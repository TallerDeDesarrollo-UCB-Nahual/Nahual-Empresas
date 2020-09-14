import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import FilterByModuleCompleted from "../FilterGraduates/ByModuleCompleted";

function FilterButton() {
  return (
    <Dropdown
      text='Filtrar'
      icon='filter'
      floating
      labeled
      button
      className='icon'
    >
      <Dropdown.Menu style={{width:"165px"}}>
        <Menu.Item> Nodo </Menu.Item>
        <FilterByModuleCompleted></FilterByModuleCompleted>
        <Menu.Item> Nivel de Ingles </Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
