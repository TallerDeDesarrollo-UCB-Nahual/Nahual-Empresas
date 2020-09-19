import axios from "axios";

const GraduateService = {
  async GetGraduates(){
    return await axios.get('https://shielded-sands-50510.herokuapp.com/api/graduates/unemployes')
  }
}

export default GraduateService;