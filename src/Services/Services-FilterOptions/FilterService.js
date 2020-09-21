import axios from "axios";

const DATA_SERVICE_API_NAHUAL = process.env.REACT_APP_API_URL;

const FilterService = {
   GetOptionsModulesCompleted(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/modules`)
  },
  GetOptionsEnglishLevel(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/english-levels`)
  },
  GetOptionsNodes(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/nodes`)
  }
}

export default FilterService;
