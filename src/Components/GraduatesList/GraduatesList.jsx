import React, { Component } from "react";
import { Input, Table, Loader, Dimmer, Message, Button } from "semantic-ui-react";
import FilterButton from "./FilterButton";
import Graduated from "./Graduated";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";
import FactoryFilter from "../FilterGraduates/FactoryFilter/FactoryFilter";
import GraduateService from "../../Services/Services-Graduates/GraduateService";

class GraduatesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graduates: [],
			filterBy: "All",
			filterCriteria: "",
			newFilterRequest: false,
			displayLoader: true,
			deshabilitarFiltro:{
				desactivarOpcion:false
			},
			egresadesSeleccionados: []
		};
	}

	componentDidMount() {
		this.getAllGraduates();
	}

	getResponse(response) {
		this.setState({
			graduates: response.data.response,
			newFilterRequest: false,
			displayLoader: false,
		});
	}

	catchError(error) {
		this.setState({
			newFilterRequest: false,
			displayLoader: false,
		});
		alert("There is an error with the data base. status: " + error.status);
	}

	async getAllGraduates() {
		await GraduateService.GetGraduates()
			.then((response) => {
				this.getResponse(response);
			})
			.catch((error) => {
				this.catchError(error);
			});
	}

	async getFilteredGraduates() {
		await FactoryFilter(this.state.filterCriteria)
			.then((response) => {
				this.getResponse(response);
			})
			.catch((error) => {
				this.catchError(error);
			});
	}

	listGraduates() {
		if (this.state.newFilterRequest) {
			this.getFilteredGraduates();
		}
		return this.mapGraduatedList(this.state.graduates);
	}

	mapGraduatedList(graduatedList) {
		return graduatedList.map((graduated, index) => {
			return (
				<Graduated
					item={graduated}
					key={graduated.id}
					seleccionarEgresades={this.seleccionarEgresades}
					numeracion={index + 1}
				/>
			);
		});
	}

	enviarDatosAlEstado(data, estado){
		this.setState({
			filterCriteria: data,
			filterBy: data.value,
			newFilterRequest: true,
			displayLoader: true,
			egresadesSeleccionados:[],
			deshabilitarFiltro: {			
				value: 'Todos',
				filterby: 'Todos',
				desactivarOpcion: estado
		}})
		this.cambiarCheckedDeCheckbox(true);
	}

	handleOnSelectOption = (data) => {
		this.enviarDatosAlEstado(data, true)
	}

	quitarFiltros (data){
		this.enviarDatosAlEstado(data, false)
	}

	loadingIcon() {
		return (
			this.state.displayLoader === true && (
				<Dimmer active inverted>
					<Loader inverted>Cargando</Loader>
				</Dimmer>
			)
		);
	}

	emptyList() {
		let messageHeader = "por el momento no tenemos egresades disponibles.";
		let messageContent = "Intenta mas tarde";
		if (this.state.filterBy !== "All") {
			messageHeader = "no existen datos relacionados con su busqueda.";
			messageContent = "Intenta con otro filtro";
		}
		return (
			this.state.graduates.length === 0 && (
				<Message
					icon="warning sign"
					warning
					header={`Lo sentimos, ${messageHeader}`}
					content={`${messageContent}. Gracias`}
				/>
			)
		);
	}

	removerFiltros(){
		return(
			this.state.deshabilitarFiltro.desactivarOpcion === true &&
			<Button color='red'
			onClick={()=>this.quitarFiltros(this.state.deshabilitarFiltro)}
			valor={this.state.deshabilitarFiltro}
			>Remover Filtros </Button>
		)
	}

	seleccionarTodosEgresades() {
		let checkboxes = this.cambiarCheckedDeCheckbox(false);
		checkboxes[0].checked
			? this.setState({ egresadesSeleccionados: this.state.graduates })
			: this.setState({ egresadesSeleccionados: [] });
	}

	seleccionarEgresades = (graduado, checked) => {
		if (checked) {
			this.setState({
				egresadesSeleccionados: this.state.egresadesSeleccionados.concat(
					graduado
				),
			});
		} else {
			this.state.egresadesSeleccionados.map(() => {
				return this.setState({
					egresadesSeleccionados: this.state.egresadesSeleccionados.filter(
						(e) => e.id !== graduado.id
					),
				});
			});
		}
	};
	cambiarCheckedDeCheckbox(filtro) {
		let checkboxes = Array.from(document.getElementsByName("checkbox"));
		 checkboxes.map((checkbox) => {
			return filtro
				? (checkbox.checked = false)
				: (checkbox.checked = checkboxes[0].checked);
		});
		return checkboxes;
	}
	render() {
		return (
			<div style={{ paddingBottom: "5%" }}>
				<img
					src={NahualLogo}
					width="150"
					style={{ marginTop: 20 }}
					alt="Nahual"
				/>
				<h1>Lista Egresades</h1>
				<div style={{ marginLeft: "150px", marginRight: "150px" }}>
					{this.loadingIcon()}
					<Table
						style={{
							borderCollapse: "collapse",
							border: "#81ce32 2px solid",
						}}
						inverted
						unstackable
						verticalAlign="middle"
						celled
					>
						<Table.Header style={{ backgroundColor: "#81ce32" }}>
							<Table.Row>
								<Table.HeaderCell colSpan="2">
									<FilterButton handleOnSelectOption={this.handleOnSelectOption} valor={this.state.deshabilitarFiltro}/>
									{this.removerFiltros()}
								</Table.HeaderCell>
								<Table.HeaderCell colSpan="4">
									{/* <Input icon="search" iconPosition="left" className="search"/> */}
								</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Header style={{ backgroundColor: "#81ce32" }}>
							<Table.Row style={{ textAlign: "left" }}>
								<Table.HeaderCell style={{ textAlign: "center" }}>
									<input
										type="checkbox"
										name="checkbox"
										onClick={() => this.seleccionarTodosEgresades()}
										style={{ transform: "scale(1.4)" }}
									/>
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
								textAlign: "left",
							}}
						>
							{
								(console.log(this.state.egresadesSeleccionados),
								this.listGraduates())
							}
						</Table.Body>
					</Table>
					{this.emptyList()}
				</div>
			</div>
		);
	}
}

export default GraduatesList;
