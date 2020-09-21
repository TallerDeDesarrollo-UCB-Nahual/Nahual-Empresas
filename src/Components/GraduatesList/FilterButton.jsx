import React from "react";
import { Dropdown } from "semantic-ui-react";
import OptionsModuleCompleted from "../FilterGraduates/OptionsModuleCompleted";
<<<<<<< HEAD
import OptionsEnglishLevel from "../FilterGraduates/OptionsEnglishLevel";
=======
>>>>>>> Add OptionsNode to FilterButton and change url of filtered node
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
<<<<<<< HEAD
      <Dropdown.Menu style={{width:"165px"}}>
        <OptionsNode handleOnSelectOption={props.handleOnSelectOption}/>
=======
      <Dropdown.Menu style={{width:"165px"}} >
        <Menu.Item> Nodo </Menu.Item>
>>>>>>> Added MultiFilter just for test
        <OptionsModuleCompleted handleOnSelectOption={props.handleOnSelectOption}/>
        <OptionsEnglishLevel handleOnSelectOption={props.handleOnSelectOption}/>
      </Dropdown.Menu>
    </Dropdown>
    );
  }

export default FilterButton;
