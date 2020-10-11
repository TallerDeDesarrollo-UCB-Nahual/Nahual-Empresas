import axios from "axios";

const DATA_SERVICE_API_NAHUAL = process.env.REACT_APP_API_URL;

const FilterService = {
   GetOptionsModulesCompleted(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/modulos`)
  },
  GetOptionsEnglishLevel(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/nivel-ingles`)
  },
  GetOptionsNodes(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/nodos`)
  }
}

export default FilterService;