import React from "react";
import { Checkbox, Table, Dropdown } from "semantic-ui-react";

function Graduated(props) {
  return (
    <Table.Row>
      <Table.Cell style={{ textAlign: "center" }}>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>{props.item.name}</Table.Cell>
      <Table.Cell>{props.item.username}</Table.Cell>
      <Table.Cell>{props.item.email}</Table.Cell>
      <Table.Cell>{props.item.address.city}</Table.Cell>
      <Table.Cell style={{ textAlign: "center" }}>
        <Dropdown icon="ellipsis vertical">
          <Dropdown.Menu>
            <Dropdown.Item>Exportar</Dropdown.Item>
            <Dropdown.Item>Ver Egresade</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  );
}
export default Graduated;
