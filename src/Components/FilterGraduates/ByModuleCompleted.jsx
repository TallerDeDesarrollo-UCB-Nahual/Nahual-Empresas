import React from "react";
import { Dropdown } from "semantic-ui-react";

function  FilterByModuleCompleted(props){
  const filterOptions = [
    {
      key: "All",
      text: "Todos",
      value: "All",
      filterby: "ModuleCompleted"
    },
    {
      key: "FunctionalTesting",
      text: "Testing Funcional",
      value: "Testing Funcional",
      filterby: "ModuleCompleted"
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
            onClick={props.handleOnSelectOption}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterByModuleCompleted;