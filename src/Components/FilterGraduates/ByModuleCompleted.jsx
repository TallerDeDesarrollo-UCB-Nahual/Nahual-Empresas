import React from "react";
import { Dropdown } from "semantic-ui-react";

function  FilterByModuleCompleted(props){
  const filterOptions = [
    {
      key: "All",
      text: "Todos",
      value: "All",
      title: "Modulo Completado",
      filterby: "ModuleCompleted",
      label: { color: "red", empty: true, circular: true },
    },
    {
      key: "Functional Testing",
      text: "Testing Funcional",
      value: "Testing Funcional",
      title: "Modulo Completado",
      filterby: "ModuleCompleted",
      label: { color: "red", empty: true, circular: true },
    }
  ];

  return  (
    <Dropdown
      text='Modulo Cursado' 
      pointing='left' 
      className='link item'
    >
      <Dropdown.Menu >
        {filterOptions.map((option) => (
          <Dropdown.Item 
            key={option.key}
            value={option.value}
            text={option.text}
            {... option}
            onClick={props.handlOnChange}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterByModuleCompleted;