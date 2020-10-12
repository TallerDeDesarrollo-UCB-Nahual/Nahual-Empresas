import React, { Component } from "react";
import {
  Table,
  Loader,
  Dimmer,
  Message,
  Label,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import FilterButton from "./FilterButton";
import Graduated from "./Graduated";
import FactoryFilter from "../FilterGraduates/FactoryFilter/FactoryFilter";
import GraduateService from "../../Services/Services-Graduates/GraduateService";
import BotonExportar from "./BotonExportar";
import OpcionesDeQuitarFiltro from "../FilterGraduates/OpcionesDeQuitarFiltro";

class GraduatesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graduates: [],
			filterBy: "All",
			filterCriteria: "",
			newFilterRequest: false,
			displayLoader: true,
			quitarUnFiltro: '',
			deshabilitarFiltro:{				
				value: 'Todos',
				filterby: 'Todos',
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
		alert("Parece haber un error con la base de datos." + error.status);
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
			quitarUnFiltro: '',
			deshabilitarFiltro: {			
				value: 'Todos',
				filterby: 'Todos',
				desactivarOpcion: estado
		}})
		this.cambiarEstadoDeCheckbox(true);
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
		return this.state.graduates.length === 0 ? (
      <Message
        icon="warning sign"
        warning
        header={`Lo sentimos, ${messageHeader}`}
        content={`${messageContent}. Gracias`}
      />
    ) : (
      <BotonExportar
        seleccionados={this.state.egresadesSeleccionados}
        deseleccionarEgresades={() => {
          this.cambiarEstadoDeCheckbox(true);
          this.setState({ egresadesSeleccionados: [] });
        }}
      />
    );
  }

  removerFiltros() {
    return (
      this.state.deshabilitarFiltro.desactivarOpcion === true && (
        <Label
          pointing="left"
          as="a"
          onClick={() => this.quitarFiltros(this.state.deshabilitarFiltro)}
          valor={this.state.deshabilitarFiltro}
        >
          Quitar Todos
          <Icon name="delete" />
        </Label>
      )
    );
  }

  seleccionarTodosEgresades() {
    let checkboxes = this.cambiarEstadoDeCheckbox(false);
    checkboxes[0].checked
      ? this.setState({ egresadesSeleccionados: this.state.graduates })
      : this.setState({ egresadesSeleccionados: [] });
  }

  seleccionarEgresades = (egresade, checked) => {
    if (checked) {
      this.setState({
        egresadesSeleccionados: this.state.egresadesSeleccionados.concat(
          egresade
        )
      });
    } else {
      this.state.egresadesSeleccionados.map(() => {
        return this.setState({
          egresadesSeleccionados: this.state.egresadesSeleccionados.filter(
            (e) => e.id !== egresade.id
          )
        });
      });
    }
  };
  cambiarEstadoDeCheckbox(filtro) {
    let checkboxes = Array.from(document.getElementsByName("checkbox"));
    checkboxes.map((checkbox) => {
      return filtro
        ? (checkbox.checked = false)
        : (checkbox.checked = checkboxes[0].checked);
    });
    return checkboxes;
	}
	
	quitarUnFiltro = (data) => {
		this.setState({
			filterCriteria: {			
				value: data.filterby,
				filterby: 'SinFiltros',
			},
			quitarUnFiltro:data,
			newFilterRequest: true,
			displayLoader: true,
		})
	}
	
	verificarSiEraUltimoBoton=(data)=>{
		if (data===false)
			this.quitarFiltros(this.state.deshabilitarFiltro)
	}

  render() {
    return (
      <>
        <Header as="h1" icon textAlign="center" color="green">
          <Icon name="graduation" />
          <Header.Content>Lista Egresades</Header.Content>
        </Header>
        {this.loadingIcon()}
        <Segment color="green">
          <FilterButton
            handleOnSelectOption={this.handleOnSelectOption}
						valor={this.state.deshabilitarFiltro}
						quitarUnFiltro={this.state.quitarUnFiltro} 
          />
					<OpcionesDeQuitarFiltro  
						quitarFiltro={this.quitarUnFiltro} 
						esUltimoFiltro={this.verificarSiEraUltimoBoton}
						opcion={this.state.filterCriteria}
					/>
          {this.removerFiltros()}
        </Segment>
        <div style={{ overflowX: "auto" }}>
          <Table singleLine selectable striped unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onClick={() => this.seleccionarTodosEgresades()}
                    style={{ transform: "scale(1.4)" }}
                  />
                </Table.HeaderCell>
                <Table.HeaderCell>NOMBRE Y APELLIDO</Table.HeaderCell>
                <Table.HeaderCell>NODO</Table.HeaderCell>
                <Table.HeaderCell>MÓDULOS CURSADOS</Table.HeaderCell>
                <Table.HeaderCell>NIVEL DE INGLES</Table.HeaderCell>
                <Table.HeaderCell textAlign="center"></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.listGraduates()}</Table.Body>
          </Table>
        </div>

        {this.emptyList()}
      </>
    );
  }
}

export default GraduatesList;
