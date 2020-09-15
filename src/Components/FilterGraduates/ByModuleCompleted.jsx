import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

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
          value: "Testing Funcional",
          label: { color: "red", empty: true, circular: true },
        }
      ]
    }
  }

  render () {
    return  (
      <Dropdown 
        text='Modulo Cursado' 
        pointing='left' 
        additionLabel='ModuleCompleted'
        className='link item'
        options={this.state.optionsModuleCompleted}
        onChange={this.props.handleOnSelected}>
      </Dropdown>
    );
  }
}


export default FilterByModuleCompleted;