import React from "react";
import { Checkbox, Table } from "semantic-ui-react";

function Graduated(props) {
	return (
		<Table.Row style={{border: "#81ce32 2px solid"}}>
			<Table.Cell style={{ textAlign: "center" }}>
				<Checkbox />
			</Table.Cell>
			<Table.Cell>{props.item.name}</Table.Cell>
			<Table.Cell>{props.item.nodo}</Table.Cell>
			<Table.Cell>{props.item.moduleCompleted[0].course}</Table.Cell>
			<Table.Cell>{props.item.englishLevel}</Table.Cell>
			<Table.Cell style={{ textAlign: "center" }}></Table.Cell>
		</Table.Row>
	);
}
export default Graduated;
