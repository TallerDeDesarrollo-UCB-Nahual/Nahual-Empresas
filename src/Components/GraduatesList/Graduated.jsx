import React from "react";
import { Table } from "semantic-ui-react";
import GraduateDetail from "../GraduateDetail/GraduateDetail.jsx";

function Graduated(props) {
	const seleccionarEgresade = (egresade) => {
		let checkboxes = Array.from(document.getElementsByName("checkbox"));
		props.seleccionarEgresades(egresade, checkboxes[props.numeracion].checked);
	};
	return (
		<Table.Row style={{ border: "#81ce32 2px solid" }}>
			<Table.Cell style={{ textAlign: "center" }}>
				<input
					type="checkbox"
					name="checkbox"
					style={{ transform: "scale(1.4)" }}
					onClick={() => seleccionarEgresade(props.item)}
				/>
			</Table.Cell>
			<Table.Cell>{props.item.fullName}</Table.Cell>
			<Table.Cell>{props.item.node}</Table.Cell>
			<Table.Cell>{props.item.finishedCourses}</Table.Cell>
			<Table.Cell>{props.item.englishLevel}</Table.Cell>
			<Table.Cell style={{ textAlign: "center" }}>
				<GraduateDetail id={props.item.id}></GraduateDetail>
			</Table.Cell>
		</Table.Row>
	);
}

export default Graduated;
