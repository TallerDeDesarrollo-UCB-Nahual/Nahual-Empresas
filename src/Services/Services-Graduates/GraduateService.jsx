import axios from "axios";

const DATA_SERVICE_API_NAHUAL = process.env.REACT_APP_API_URL;

const GraduateService = {
  GetGraduates(){
    return axios.get(`${DATA_SERVICE_API_NAHUAL}/egresades/desempleados`)
  }
}

export default GraduateService;