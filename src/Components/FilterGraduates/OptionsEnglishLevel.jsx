import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import FilterService from "../../Services/Services-FilterOptions/FilterService";

class OptionsEnglishLevel extends Component{
  constructor (props){
    super(props)
		this.state = {
      valor: '',
      filterOptions: []
    };
  }

  async componentDidMount() {
    await FilterService.GetOptionsEnglishLevel()
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
        text: EnglishLevelOption.nombre,
        value: EnglishLevelOption.nombre,
        filterby: "EnglishLevel"
      }
      EnglishLevelOptions.push(EnglishLevelOption);
    });
    this.setState({filterOptions:EnglishLevelOptions})
  }

  handleSelected(option){
    this.setState({ valor: option.value });
    this.props.handleOnSelectOption(option)
  }

  opcionesDeFiltro(){
     return (
      <Dropdown.Menu >
        {this.state.filterOptions.map((option) => (
          <Dropdown.Item 
            active={option.value === this.state.valor} 
            key={option.key}
            value={option.value}
            text={option.text}
            {... option}
            onClick={() => this.handleSelected(option)}
          />
        ))}
      </Dropdown.Menu>
      )
  }

  componentWillReceiveProps(newProps){
    if (newProps.valor.desactivarOpcion === false)
      this.setState({valor:'All'})
  }
  
  render(){
    return  (
      <Dropdown
        text='Nivel de Ingles' 
        pointing='left'
        className='link item'
      >
        {this.opcionesDeFiltro()}
      </Dropdown>
    );
  }
}

export default OptionsEnglishLevel;