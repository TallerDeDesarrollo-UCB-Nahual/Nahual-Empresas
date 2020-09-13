import React, { Component } from "react";
import { Checkbox, Input, Table } from "semantic-ui-react";
import FilterButton from "./FilterButton";
import Graduated from "./Graduated";
import axios from "axios";

class GraduatesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  listaEgresade() {
    return this.state.users.map(function(currentList, i) {
      return <Graduated item={currentList} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h2 style={{ marginTop: 40 }}>Lista Egresades</h2>
        <div style={{ marginRight: 80, marginLeft: 80 }}>
          <Table celled>
            <Table.Header>
              <Table.HeaderCell colSpan="2">
                <FilterButton />
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="4">
                <Input icon="search" iconPosition="center" className="search" />
              </Table.HeaderCell>
            </Table.Header>
            <Table.Header>
              <Table.Row style={{ textAlign: "center" }}>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>UserName</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Ciudad</Table.HeaderCell>
                <Table.HeaderCell icon="ellipsis vertical"></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.listaEgresade()}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
export default GraduatesList;
