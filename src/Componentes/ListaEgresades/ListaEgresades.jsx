import React, { Component } from "react";
import { Checkbox, Input, Table, Loader, Dimmer, Message } from "semantic-ui-react";
import FilterButton from "./BotonDeFiltrado";
import Egresade from "./Egresade";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";
import FabricaDeFiltros from "../FiltradoEgresades/FabricaDeFiltros/FabricaDeFiltros";
import ServicioDeEgresades from "../../Servicios/Servicios-Egresades/servicioDeEgresades";


class ListaEgresades extends Component {
	constructor(props) {
		super(props);
		this.state = {
			egresades: [],
			filtrarPor: 'Todos',
			criterioDeFiltrado: '',
			nuevaPeticionDeFiltrado: false,
			mostrarBotonDeCarga: true
		};
	}

	componentDidMount() {
		this.obtenerTodesLosEgresades();
	}

	obtenerRespuesta(respuesta) {
		this.setState({
			egresades: respuesta.data.response,
			nuevaPeticionDeFiltrado: false,
			mostrarBotonDeCarga: false
		});
	}

	errorDeCaptura(error) {
		this.setState({
			nuevaPeticionDeFiltrado: false,
			mostrarBotonDeCarga: false
		})
		alert("Hay un error en la base de datos, status: " + error.status)
	}

	async obtenerTodesLosEgresades() {
		await ServicioDeEgresades.obtenerEgresades()
			.then(respuesta => {
				this.obtenerRespuesta(respuesta);
			})
			.catch(error => {
				this.errorDeCaptura(error);
			});
	}

	async obtenerEgresadesFiltrados() {
		await FabricaDeFiltros(this.state.criterioDeFiltrado)
			.then(respuesta => {
				this.obtenerRespuesta(respuesta);
			})
			.catch(error => {
				this.errorDeCaptura(error);
			});
	}

	listaEgresades() {
		if (this.state.nuevaPeticionDeFiltrado) {
			this.obtenerEgresadesFiltrados();
		}
		return this.mapeoListaEgresades(this.state.egresades);
	}

	mapeoListaEgresades(listaEgresades) {
		return (
			listaEgresades.map((egresade, indice) => {
				return <Egresade item={egresade} key={indice} />
			}));
	}

	manejar = (opcionSeleccionada) => {
		this.setState({
			criterioDeFiltrado: opcionSeleccionada,
			filtrarPor: opcionSeleccionada.value,
			nuevaPeticionDeFiltrado: true,
			mostrarBotonDeCarga: true
		})
	}

	iconoDeCarga() {
		return (
			this.state.mostrarBotonDeCarga === true &&
			<Dimmer active inverted>
				<Loader inverted>Cargando</Loader>
			</Dimmer>
		)
	}

	listaVacia() {
		let cabeceraDelMensaje = "por el momento no tenemos egresades disponibles."
		let contenidoDelMensaje = "Intenta mas tarde"
		if (this.state.filtrarPor !== 'Todos') {
			cabeceraDelMensaje = "no existen datos relacionados con su busqueda."
			contenidoDelMensaje = "Intenta con otro filtro"
		}
		return (
			this.state.egresades.length === 0 &&
			<Message
				icon='warning sign'
				warning
				header={`Lo sentimos, ${cabeceraDelMensaje}`}
				content={`${contenidoDelMensaje}. Gracias`}
			/>
		)
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
					{this.iconoDeCarga()}
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
									<FilterButton manejar={this.manejar} />
								</Table.HeaderCell>
								<Table.HeaderCell colSpan="4">
									{/* <Input icon="search" iconPosition="left" className="search"/> */}
								</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Header style={{ backgroundColor: "#81ce32" }}>
							<Table.Row style={{ textAlign: "left" }}>
								<Table.HeaderCell style={{ textAlign: "center" }}>
									{/* <Checkbox /> */}
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
							{this.listaEgresades()}
						</Table.Body>
					</Table>
					{this.listaVacia()}
				</div>
			</div>
		);
	}
}

export default ListaEgresades;
