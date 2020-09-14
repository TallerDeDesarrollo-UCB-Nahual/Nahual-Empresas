import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import GraduatesList from "../GraduatesList/GraduatesList";


class FilterByModuleCompleted extends Component {

  constructor(props) {
		super(props);
		this.state = {
      optionsModuleCompleted: [
        {
          key: "All",
          text: "Todos",
          value: "All",
          label: { color: "red", empty: true, circular: true },
        },
        {
          key: "Functional Testing",
          text: "Testing Funcional",
          value: "Functional_Testing",
          label: { color: "red", empty: true, circular: true },
        }
      ]
    }
	}


  _handleOnSelected = (event,data) => {
    new GraduatesList().filteredList(data.value);
  }

  render () {
    return  (
      <Dropdown 
        text='Modulo Cursado' 
        pointing='left' 
        className='link item'
        options={this.state.optionsModuleCompleted}
        onChange={this._handleOnSelected}>
      </Dropdown>
    );
  }
}

export default FilterByModuleCompleted;