import axios from "axios";

const GraduateService = {
  GetGraduates(){
    return axios.get('https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes')
  }
}

export default GraduateService;