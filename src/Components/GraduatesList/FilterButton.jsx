import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
function FilterButton(props) {
  const filterOptions = [
    {
      key: "Nodo",
      text: "Nodo",
      value: "Important",
      label: { color: "red", empty: true, circular: true }
    },
    {
      key: "Modulo",
      text: "Modulo Cursado",
      value: "Announcement",
      label: { color: "blue", empty: true, circular: true }
    },
    {
      key: "Nivel",
      text: "Nivel de Ingles",
      value: "Cannot Fix",
      label: { color: "black", empty: true, circular: true }
    }
  ];
  return (
    <Dropdown
      text="Filtrar Lista"
      icon="filter"
      floating
      labeled
      button
      className="icon"
    >
      <Dropdown.Menu>
        <Input icon="search" iconPosition="left" className="search" />
        <Dropdown.Divider />
        <Dropdown.Header icon="tags" content="Tag Label" />
        <Dropdown.Menu scrolling>
          {filterOptions.map(option => (
            <Dropdown.Item key={option.value} {...option} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
