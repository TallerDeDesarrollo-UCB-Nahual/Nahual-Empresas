import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import FilterService from "../../Services/Services-FilterOptions/FilterService";

class OptionsNode extends Component{
  constructor (props){
    super(props)
		this.state = {
      valor: '',
      filterOptions: []
    };
  }

  async componentDidMount() {
    await FilterService.GetOptionsNodes()
    .then(response => {
      this.ConstructFilterOptions(response.data.response);
    })
    .catch(error => {
      alert("There is an error with the Data Base.")
    })
  }

  AddDefaultNode(){
    const OptionNodeAll={
      id:0,
      key:0,
      text: "Todos",
      value: "All",
      filterby: "Node"
    }
    return OptionNodeAll;
  }

  ConstructFilterOptions(response) {
    const ListOptionNode = []
    ListOptionNode.push(this.AddDefaultNode());
    response.forEach(OptionNode => {
      OptionNode={
        key: OptionNode.id,
        text: OptionNode.name,
        value: OptionNode.name,
        filterby: "Node"
      }
      ListOptionNode.push(OptionNode);
    });
    this.setState({filterOptions:ListOptionNode})
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
        text='Nodo' 
        pointing='left' 
        className='link item'
      >
        {this.opcionesDeFiltro()}
      </Dropdown>
    );
  }
}

export default OptionsNode;