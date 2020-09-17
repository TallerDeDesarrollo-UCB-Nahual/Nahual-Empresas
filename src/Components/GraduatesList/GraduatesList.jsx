import React, { Component } from "react";
import { Checkbox, Input, Table } from "semantic-ui-react";
import FilterButton from "./FilterButton";
import Graduated from "./Graduated";
import axios from "axios";

class GraduatesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graduates: []
		};
	}

	componentDidMount() {
		const API_URL = process.env.REACT_APP_API_URL;
		axios
			.get(`${API_URL}/empresas-egresades`)
			.then(response => {
				this.setState({
					graduates: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	listGraduates = () => {
		return this.state.graduates.map((graduated, index) => {
			return <Graduated item={graduated} key={index} />;
		});
	};

	render() {
		return (
			<>
				<h2 style={{ marginTop: 40 }}>Lista Egresades</h2>
				<div style={{ marginLeft: "80px", marginRight: "80px" }}>
					<Table
						style={{ borderCollapse: "collapse", border: "#81ce32 2px solid" }}
						celled
						inverted
						unstackable
						verticalAlign="middle"
					>
						<Table.Header style={{ backgroundColor: "#81ce32" }}>
							<Table.Row>
								<Table.HeaderCell colSpan="2">
									<FilterButton />
								</Table.HeaderCell>
								<Table.HeaderCell colSpan="4">
									<Input icon="search" iconPosition="left" className="search" />
								</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Header style={{ backgroundColor: "#81ce32" }}>
							<Table.Row style={{ textAlign: "center" }}>
								<Table.HeaderCell>
									<Checkbox />
								</Table.HeaderCell>
								<Table.HeaderCell>Nombre</Table.HeaderCell>
								<Table.HeaderCell>Nodo</Table.HeaderCell>
								<Table.HeaderCell>Modulos Cursados</Table.HeaderCell>
								<Table.HeaderCell>Nivel de Ingles</Table.HeaderCell>
								<Table.HeaderCell></Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body
							style={{
								color: "black",
								backgroundColor: "white",
								textAlign: "center"
							}}
						>
							{this.listGraduates()}
						</Table.Body>
					</Table>
				</div>
			</>
		);
	}
}
export default GraduatesList;
