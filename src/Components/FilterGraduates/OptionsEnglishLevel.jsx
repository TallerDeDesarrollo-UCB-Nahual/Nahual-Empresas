import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import servicioDeFiltrado from "../../Services/Services-FilterOptions/servicioDeFiltrado";

class OptionsEnglishLevel extends Component{
  constructor (props){
    super(props)
		this.state = {
      filterOptions: []
    };
  }

  async componentDidMount() {
    await servicioDeFiltrado.obtenerOpcionesDeNivelesDeIngles()
    .then(response => {
      this.ConstructFilterOptions(response.data.response);
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

  handleSelected(option){
    this.setState({ value: option.value });
    this.props.handleOnSelectOption(option)
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
            active={option.value === this.state.value}
            key={option.key}
            value={option.value}
            text={option.text}
            {... option}
            onClick={() => this.handleSelected(option)}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default OptionsEnglishLevel;