import React, { Component } from "react";
import { Checkbox, Input, Table } from "semantic-ui-react";
import FilterButton from "./FilterButton";
import Graduated from "./Graduated";
import axios from "axios";
import NahualLogo from "../../images/NahualLogo.png";

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
			.get(`${API_URL}/unemployes`)
			.then(response => {
				this.setState({
					graduates: response.data.resultSet
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
			<div>
				<img
					src={NahualLogo}
					width="150"
					style={{ marginTop: 20 }}
					alt="Nahual"
				/>
				<h1>Lista Egresades</h1>
				<div style={{ marginLeft: "150px", marginRight: "150px" }}>
					<Table
						style={{
							borderCollapse: "collapse",
							border: "#81ce32 2px solid"
						}}
						inverted
						unstackable
						verticalAlign="middle"
						celled
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
							<Table.Row style={{ textAlign: "left" }}>
								<Table.HeaderCell style={{ textAlign: "center" }}>
									<Checkbox />
								</Table.HeaderCell>
								<Table.HeaderCell>NOMBRE</Table.HeaderCell>
								<Table.HeaderCell>NODO</Table.HeaderCell>
								<Table.HeaderCell>MODULOS CURSADOS</Table.HeaderCell>
								<Table.HeaderCell>NIVEL DE INGLES</Table.HeaderCell>
								<Table.HeaderCell></Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body
							style={{
								color: "black",
								backgroundColor: "white",
								textAlign: "left"
							}}
						>
							{this.listGraduates()}
						</Table.Body>
					</Table>
				</div>
			</div>
		);
	}
}
export default GraduatesList;
