import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
function FilterButton() {
	const filterOptions = [
		{
			key: "Node",
			text: "Nodo",
			value: "Node",
			label: { color: "red", empty: true, circular: true }
		},
		{
			key: "ModuleCompleted",
			text: "Modulo Cursado",
			value: "Module",
			label: { color: "blue", empty: true, circular: true }
		},
		{
			key: "EnglishLevel",
			text: "Nivel de Ingles",
			value: "Level",
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
			style={{backgroundColor:"white"}}
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
