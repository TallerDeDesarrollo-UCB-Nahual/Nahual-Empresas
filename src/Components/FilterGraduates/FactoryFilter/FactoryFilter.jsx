import axios from "axios";

const DATA_SERVICE_API_NAHUAL = process.env.REACT_APP_API_URL;
let [FilterByModuleCompleted,FilterByEnglishLevel,FilterByNodeName,QueryFilter] = ['','','','']

function FactoryFilter(filterCriteria) {
  SetLocalFilterVariables(filterCriteria)
  QueryFilter = BuildFilterQuery()  
  return axios.get(`${DATA_SERVICE_API_NAHUAL}/graduates/unemployes?${QueryFilter}`)
} 

function SetLocalFilterVariables(filterCriteria){
  switch (filterCriteria.filterby) {
    case 'ModuleCompleted':
      if (filterCriteria.value==='All')
        FilterByModuleCompleted = ''
      else
        FilterByModuleCompleted =`module=${filterCriteria.value}&`;
      break
    case 'EnglishLevel':
      if (filterCriteria.value==='All')
        FilterByEnglishLevel = ''
      else
        FilterByEnglishLevel =`englishLevel=${filterCriteria.value}&`;
      break
    case 'Node':
<<<<<<< HEAD
      return axios.get(`${DATA_SERVICE_API_NAHUAL}/graduates/unemployes?nodeName=${filterCriteria.value}`)
=======
      if (filterCriteria.value==='All')
        FilterByNodeName = ''
      else
        FilterByNodeName =`nodeName=${filterCriteria.value}&`;
      break
>>>>>>> Added MultiFilter just for test
    default:
  }
}

function BuildFilterQuery(){
  let Query = '';
  return Query.concat(FilterByModuleCompleted,FilterByEnglishLevel,FilterByNodeName)
}

export default FactoryFilter;