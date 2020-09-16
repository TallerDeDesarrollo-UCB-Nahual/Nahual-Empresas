import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class FilterByEnglishLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsEnglishLevel: [
        {
          key: "All",
          text: "Todos",
          value: "All",
          label: { color: "red", empty: true, circular: true },
        },
        {
          key: "Basic",
          text: "Basico",
          value: "Basico",
          label: { color: "blue", empty: true, circular: true },
        },
        {
            key: "Intermediate",
            text: "Intermedio",
            value: "Intermedio",
            label: { color: "green", empty: true, circular: true },
        },
        {
            key: "Advanced",
            text: "Avanzado",
            value: "Avanzado",
            label: { color: "yellow", empty: true, circular: true },
        }
      ]
    }
  }

  render () {
    return  (
      <Dropdown 
        text='Nivel de Ingles' 
        pointing='left' 
        additionLabel='EnglishLevel'
        className='link item'
        options={this.state.optionsEnglishLevel}
        onChange={this.props.handleOnSelected}>
      </Dropdown>
    );
  }
}


export default FilterByEnglishLevel;