import React from 'react'
import ReactExport from 'react-export-excel';

const ArchivoExcel = ReactExport.ExcelFile;
const HojaExcel = ReactExport.ExcelFile.ExcelSheet;

const BotonDescargar = ({ seleccionados }) => {
  return (
    <div>
      <ArchivoExcel filename = {`Graduades Exportados - ${Date.now()}`}>
        <HojaExcel data={seleccionados} name="Graduades">
        </HojaExcel>
      </ArchivoExcel>
    </div>
  )
}

export default BotonDescargar
