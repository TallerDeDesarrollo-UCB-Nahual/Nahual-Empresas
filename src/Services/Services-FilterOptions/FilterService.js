import axios from "axios";

const FilterService = {
  GetOptionsModulesCompleted(){
    return axios.get('https://shielded-sands-50510.herokuapp.com/api/modules')
  },
  GetOptionsEnglishLevel(){
    return axios.get('https://shielded-sands-50510.herokuapp.com/api/english-levels')
  },
  GetOptionsNodes(){
    return axios.get('https://shielded-sands-50510.herokuapp.com/api/nodes')
  }
}

export default FilterService;