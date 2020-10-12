import React from "react";
import { Table } from "semantic-ui-react";
import DetalleDeEgresade from "../DetalleDeEgresade/GraduateDetail.jsx";

function Egresade(props) {
	const seleccionarEgresade = (egresade) => {
		let checkboxes = Array.from(document.getElementsByName("checkbox"));
		props.seleccionarEgresades(egresade, checkboxes[props.numeracion].checked);
	};

	function PrimeraLetraEnMayuscula(str) {
		return str.replace(/\b\w/g, (l) => l.toUpperCase());
	}

	return (
		<Table.Row >
			<Table.Cell textAlign='center' >
				<input
					type="checkbox"
					name="checkbox"
					style={{ transform: "scale(1.4)" }}
					onClick={() => seleccionarEgresade(props.item)}
				/>
			</Table.Cell>
			<Table.Cell>{PrimeraLetraEnMayuscula(props.item.nombreCompleto)}</Table.Cell>
			<Table.Cell>{props.item.nombreNodo}</Table.Cell>
			<Table.Cell>{props.item.modulo}</Table.Cell>
			<Table.Cell>{props.item.nivelIngles}</Table.Cell>
			<Table.Cell textAlign='center'>
				<DetalleDeEgresade id={props.item.id}></DetalleDeEgresade>
			</Table.Cell>
		</Table.Row>
	);
}

export default Egresade;
