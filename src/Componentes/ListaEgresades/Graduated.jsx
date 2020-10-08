import React from "react";
import { Checkbox, Table } from "semantic-ui-react";
import DetalleDeEgresade from "../DetalleDeEgresade/DetalleDeEgresade.jsx";

function Graduated(props) {
  return (
    <Table.Row style={{ border: "#81ce32 2px solid" }}>
      <Table.Cell style={{ textAlign: "center" }}>
        {/* <Checkbox /> */}
      </Table.Cell>
      <Table.Cell>{props.item.fullName}</Table.Cell>
      <Table.Cell>{props.item.node}</Table.Cell>
      <Table.Cell>{props.item.finishedCourses}</Table.Cell>
      <Table.Cell>{props.item.englishLevel}</Table.Cell>
      <Table.Cell style={{ textAlign: "center" }}>
				<DetalleDeEgresade id={props.item.id}></DetalleDeEgresade>
			</Table.Cell>
    </Table.Row>
  );
}

export default Graduated;
