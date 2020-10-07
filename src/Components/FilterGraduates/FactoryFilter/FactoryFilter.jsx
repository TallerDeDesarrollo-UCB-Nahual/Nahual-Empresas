import axios from "axios";

const DATA_SERVICE_API_NAHUAL = process.env.REACT_APP_API_URL;
let [FilterByModuleCompleted,FilterByEnglishLevel,FilterByNodeName,QueryFilter] = ['','','','']

function FactoryFilter(filterCriteria) {
  SetLocalFilterVariables(filterCriteria)
  QueryFilter = BuildFilterQuery() 
  return axios.get(`${DATA_SERVICE_API_NAHUAL}/egresades/desempleados?${QueryFilter}`)
} 

function removerUnFiltro(filtro){
  switch (filtro.value) {
    case 'ModuleCompleted':
        FilterByModuleCompleted = ''
      break
    case 'EnglishLevel':
        FilterByEnglishLevel = ''
      break
    case 'Node':
        FilterByNodeName = ''
      break
    default:
        FilterByEnglishLevel = ''
        FilterByNodeName = ''
        FilterByModuleCompleted = ''
      break
  }
}

function SetLocalFilterVariables(filterCriteria){
  switch (filterCriteria.filterby) {
    case 'ModuleCompleted':
      if (filterCriteria.value==='All')
        FilterByModuleCompleted = ''
      else
        FilterByModuleCompleted =`modulo=${filterCriteria.value}&`;
      break
    case 'EnglishLevel':
      if (filterCriteria.value==='All')
        FilterByEnglishLevel = ''
      else
        FilterByEnglishLevel =`nivelIngles=${filterCriteria.value}&`;
      break
    case 'Node':
      if (filterCriteria.value==='All')
        FilterByNodeName = ''
      else
        FilterByNodeName =`nombreNodo=${filterCriteria.value}&`;
      break
    case 'Todos':
        FilterByEnglishLevel = ''
        FilterByNodeName = ''
        FilterByModuleCompleted = ''
      break
    case 'SinFiltros':
        removerUnFiltro(filterCriteria);
      break
    default:
      break
  }
}

function BuildFilterQuery(){
  let Query = '';
  return Query.concat(FilterByModuleCompleted,FilterByEnglishLevel,FilterByNodeName)
}

export default FactoryFilter;