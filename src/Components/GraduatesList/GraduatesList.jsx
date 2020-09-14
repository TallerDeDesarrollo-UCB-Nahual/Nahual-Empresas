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
    return this.state.graduates.map((currentList, index) => {
      return <Graduated item={currentList} key={index} />;
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ marginTop: 40 }}>Lista Egresades</h2>
        <div style={{ marginRight: 80, marginLeft: 80 }}>
          <Table celled>
            <Table.Header>
              <tr>
                <Table.HeaderCell colSpan="2">
                  <FilterButton />
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="4">
                  <Input icon="search" iconPosition="left" className="search" />
                </Table.HeaderCell>
              </tr>
            </Table.Header>
            <Table.Header>
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
            <Table.Body>{this.listGraduates()}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
export default GraduatesList;
