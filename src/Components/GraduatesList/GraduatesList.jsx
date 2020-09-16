import React, { Component } from "react";
import { Checkbox, Input, Table } from "semantic-ui-react";
import FilterButton from "./FilterButton";
import Graduated from "./Graduated";
import axios from "axios";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";

class GraduatesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graduates: [],
			filterBy: 'All',
			filterCriteria: 'All'
		};
	}

	componentDidMount() {
		const API_URL = process.env.REACT_APP_API_URL;
		axios
			.get(`${API_URL}/graduates/unemployes`)
			.then(response => {
				this.setState({
					graduates: response.data.resultSet
				});
			})
			.catch(function(error) {
				console.log(error);
		});
	}

	listGraduates() {
		if (this.state.filterCriteria === 'All')
			return this.mapGraduatedList(this.state.graduates);
		else
			return this.mapGraduatedList(this.factoryFilter())
	}
	
	mapGraduatedList(graduatedList) {
		return(
			graduatedList.map((graduated, index) => {
				return <Graduated item={graduated} key={index} />
		}));
	}

	factoryFilter() {
		switch (this.state.filterBy) {
			case 'ModuleCompleted':
				return this.filterByModuleCompleted(this.state.filterCriteria.toLowerCase());				
			default:
				return this.state.graduates;
		}
	}

	filterByModuleCompleted(filterCriteria) {
		const listFiltered = [];
			this.state.graduates.forEach((graduated) => {
				graduated.moduleCompleted.forEach((module) => {
					if (module.course.toLowerCase() === filterCriteria)
						listFiltered.push(graduated);
			})
		})
		return listFiltered;
	}

	handleOnSelectOption = (event,data) => {
		this.setState({
			filterBy : data.filterby,
			filterCriteria:data.value})
	}

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
									<FilterButton handleOnSelectOption = {this.handleOnSelectOption}/>
								</Table.HeaderCell>
								<Table.HeaderCell colSpan="4">
									<Input icon="search" iconPosition="left" className="search"/>
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
