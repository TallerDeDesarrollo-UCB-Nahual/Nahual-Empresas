import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import FilterService from "../../Services/Services-FilterOptions/FilterService";

class OptionsModuleCompleted extends Component{
  constructor (props){
    super(props)
		this.state = {
      valor: '',
      filterOptions: []
    };
  }

  async componentDidMount() {
    await FilterService.GetOptionsModulesCompleted()
    .then(response => {
      this.ConstructFilterOptions(response.data.response);
    })
    .catch(error => {
      alert("There is an error with the Data Base.")
    })
  }

  AddDefaultModuleCompleted(){
    const OptionModuleCompletedAll={
      id:0,
      key:0,
      text: "Todos",
      value: "All",
      filterby: "ModuleCompleted"
    }
    return OptionModuleCompletedAll;
  }

  ConstructFilterOptions(response) {
    const ListOptionModulesCompleted = []
    ListOptionModulesCompleted.push(this.AddDefaultModuleCompleted());
    response.forEach(OptionModuleCompleted => {
      OptionModuleCompleted={
        key: OptionModuleCompleted.id,
        text: OptionModuleCompleted.name,
        value: OptionModuleCompleted.name,
        filterby: "ModuleCompleted"
      }
      ListOptionModulesCompleted.push(OptionModuleCompleted);
    });
    this.setState({filterOptions:ListOptionModulesCompleted})
  }

  handleSelected(option){
    this.setState({ valor: option.value });
    this.props.handleOnSelectOption(option)
  }  

  opcionesDeFiltro(opcionSeleccionada){
     return (
      <Dropdown.Menu >
        {this.state.filterOptions.map((option) => (
          <Dropdown.Item 
            active={option.value === this.activarBoton(opcionSeleccionada)} 
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

  activarBoton(opcionSeleccionada) {
    let respuesta;
    if (opcionSeleccionada.desactivarOpcion === true)
      respuesta = this.state.valor;
    else
      respuesta = opcionSeleccionada.value;
    return respuesta;
  }

  render(){
    return  (
      <Dropdown
        text='Modulo Cursado' 
        pointing='left' 
        className='link item'
      >
         {this.opcionesDeFiltro(this.props.valor)}
       </Dropdown>
    );
  }
}

export default OptionsModuleCompleted;