import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment";
import "moment/locale/es";
import { Button } from "semantic-ui-react";

const ArchivoExcel = ReactExport.ExcelFile;
const HojaExcel = ReactExport.ExcelFile.ExcelSheet;
const ColumnaExcel = ReactExport.ExcelFile.ExcelColumn;

const Boton = ({ cantidad }) => {
  return (
    <Button
      color="green"
      content="Exportar"
      icon="download"
      label={{
        basic: true,
        color: "green",
        pointing: "left",
        content: cantidad,
      }}
    />
  );
};
const BotonDescargar = ({ seleccionados }) => {
  moment.locale("es");
  const fecha_descarga = moment(Date.now()).format("LL");
  return (
    <div>
      <ArchivoExcel
        filename={`Graduades Exportados - ${fecha_descarga}`}
        element={<Boton cantidad={seleccionados.length} />}
      >
        <HojaExcel data={seleccionados} name="Graduades">
          <ColumnaExcel label="Nombre" value="fullName" />
          <ColumnaExcel label="Correo" value="mail" />
          <ColumnaExcel label="Teléfono" value="cellphone" />
          <ColumnaExcel label="Fecha de nacimiento" value="birthDate" />
          <ColumnaExcel label="Nivel de inglés" value="englishLevel" />
          <ColumnaExcel label="Nodo:" value="node" />
          <ColumnaExcel label="Sede" value="nodeName" />
          <ColumnaExcel label="Linkedin" value="linkedin" />
          <ColumnaExcel label="Curso Realizádo" value="finishedCourses" />
          <ColumnaExcel label="Año" value="graduationYear" />
        </HojaExcel>
      </ArchivoExcel>
    </div>
  );
};

export default BotonDescargar;
