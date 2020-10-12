import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ServicioDeFiltrado from "../../Servicios/Servicios-OpcionesDeFiltrado/ServicioDeFiltrado";

class OptionsEnglishLevel extends Component{
  constructor (props){
    super(props)
		this.state = {
      valor: '',
      filterOptions: []
    };
  }

  async componentDidMount() {
    await ServicioDeFiltrado.obtenerOpcionesDeNivelDeIngles()
    .then(response => {
      this.ConstructFilterOptions(response.data.response);
    })
    .catch(error => {
      alert("Error con la base de datos.");
    })
  }

  ConstructFilterOptions(response) {
    const EnglishLevelOptions = [];
    response.forEach(EnglishLevelOption => {
        EnglishLevelOption={
        key: EnglishLevelOption.id,
        text: EnglishLevelOption.nombre,
        value: EnglishLevelOption.nombre,
        filterby: "EnglishLevel"
      }
      EnglishLevelOptions.push(EnglishLevelOption);
    });
    this.setState({filterOptions:EnglishLevelOptions});
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
    if (newProps.valor.desactivarOpcion === false || newProps.quitarUnFiltro.filterby === 'EnglishLevel')
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