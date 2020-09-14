import React from "react";
import { Checkbox, Table } from "semantic-ui-react";
import GraduateDetail from "../GraduateDetail/GraduateDetail.jsx";

function Graduated(props) {
	return (
		<Table.Row>
			<Table.Cell style={{ textAlign: "center" }}>
				<Checkbox />
			</Table.Cell>
			<Table.Cell>{props.item.name}</Table.Cell>
			<Table.Cell>{props.item.nodo}</Table.Cell>
			<Table.Cell>{props.item.moduleCompleted[0].course}</Table.Cell>
			<Table.Cell>{props.item.englishLevel}</Table.Cell>
			<Table.Cell style={{ textAlign: "center" }}> 
				<GraduateDetail graduate={props.item}></GraduateDetail> 
			</Table.Cell>
			
		</Table.Row>
	);
}
export default Graduated;
