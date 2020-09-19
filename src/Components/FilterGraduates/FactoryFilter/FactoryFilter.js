import axios from "axios";
import GraduateService from "../../../Services/Services-Graduates/GraduateService";

function FactoryFilter(filterCriteria){
  switch (filterCriteria.filterby) {
    case 'ModuleCompleted':
      return axios.get(`https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes?module=${filterCriteria.value}`)
    case 'EnglishLevel':
      return axios.get(`https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes?english-levels=${filterCriteria.value}`)
    case 'Node':
      return axios.get(`https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes?nodes=${filterCriteria.value}`)
    default:
      return GraduateService.GetGraduates();
  }
}

export default FactoryFilter;