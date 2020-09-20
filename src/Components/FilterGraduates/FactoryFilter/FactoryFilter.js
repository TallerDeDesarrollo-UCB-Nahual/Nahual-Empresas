import axios from "axios";
import GraduateService from "../../../Services/Services-Graduates/GraduateService";

const DATA_SERVICE_API_NAHUAL = process.env.REACT_APP_API_URL;

function FactoryFilter(filterCriteria) {
  switch (filterCriteria.filterby) {
    case 'ModuleCompleted':
      return axios.get(`${DATA_SERVICE_API_NAHUAL}/graduates/unemployes?module=${filterCriteria.value}`)
    case 'EnglishLevel':
      return axios.get(`${DATA_SERVICE_API_NAHUAL}/graduates/unemployes?englishLevel=${filterCriteria.value}`)
    case 'Node':
      return axios.get(`${DATA_SERVICE_API_NAHUAL}/graduates/unemployes?nodes=${filterCriteria.value}`)
    default:
      return GraduateService.GetGraduates();
  }
}

export default FactoryFilter;