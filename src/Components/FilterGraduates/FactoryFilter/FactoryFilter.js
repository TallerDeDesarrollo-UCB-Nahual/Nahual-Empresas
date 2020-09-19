import axios from "axios";
import GraduateService from "../../../Services/Services-Graduates/GraduateService";

async function FactoryFilter(filterCriteria) {
  switch (filterCriteria.filterby) {
    case 'ModuleCompleted':
      return await axios.get(`https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes?module=${filterCriteria.value}`)
    case 'EnglishLevel':
      return await axios.get(`https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes?englishLevel=${filterCriteria.value}`)
    case 'Node':
      return await axios.get(`https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes?nodes=${filterCriteria.value}`)
    default:
      return GraduateService.GetGraduates();
  }
}

export default FactoryFilter;