import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import FilterService from "../../Services/Services-FilterOptions/FilterService";

class OptionsModuleCompleted extends Component{
  constructor (props){
    super(props)
		this.state = {
      filterOptions: []
    };
  }

  async componentDidMount() {
    await FilterService.GetOptionsModulesCompleted()
    .then(response => {
      this.ConstructFilterOptions(response.data.resultSet);
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

  render(){
    return  (
      <Dropdown
        text='Modulo Cursado' 
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

export default OptionsModuleCompleted;