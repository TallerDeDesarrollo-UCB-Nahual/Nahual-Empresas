import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import FilterService from "../../Services/Services-FilterOptions/FilterService";

class OptionsEnglishLevel extends Component{
  constructor (props){
    super(props)
		this.state = {
      filterOptions: []
    };
  }

  async componentDidMount() {
    await FilterService.GetOptionsEnglishLevel()
    .then(response => {
      this.ConstructFilterOptions(response.data.resultSet);
    })
    .catch(error => {
      alert("Data base error")
    })
  }

  AddDefaultEnglishLevel(){
    const AllEnglishLevelOption={
      id:0,
      key:0,
      text: "Todos",
      value: "All",
      filterby: "EnglishLevel"
    }
    return AllEnglishLevelOption;
  }

  ConstructFilterOptions(response) {
    const EnglishLevelOptions = []
    EnglishLevelOptions.push(this.AddDefaultEnglishLevel());
    response.forEach(EnglishLevelOption => {
        EnglishLevelOption={
        key: EnglishLevelOption.id,
        text: EnglishLevelOption.name,
        value: EnglishLevelOption.name,
        filterby: "EnglishLevel"
      }
      EnglishLevelOptions.push(EnglishLevelOption);
    });
    this.setState({filterOptions:EnglishLevelOptions})
  }

  render(){
    return  (
      <Dropdown
        text='Nivel de Ingles' 
        pointing='left'
        className='link item'
      >
        <Dropdown.Menu >
          {this.state.filterOptions.map((option) => (
            <Dropdown.Item 
              key={option.key}
              value={option.value}
              text={option.text}
              {... option}
              onClick={this.props.handleOnSelectOption}  
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default OptionsEnglishLevel;