import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class FilterByModuleCompleted extends Component {
  state = {
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
  render () {
    return  (
      <Dropdown text='Modulo Cursado' pointing='left' className='link item'>
        <Dropdown.Menu>
           {this.state.optionsModuleCompleted.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default FilterByModuleCompleted;