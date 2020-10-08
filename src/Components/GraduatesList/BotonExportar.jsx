import React from "react";
import ReactExport from "react-data-export";
import moment from "moment";
import "moment/locale/es";
import { Button } from "semantic-ui-react";

const Boton = ({ cantidad }) => {
  let desHabilitado = false;
  if (cantidad === 0) desHabilitado = true;
  return (
    <Button
      floated="left"
      color="green"
      content="Exportar"
      icon="download"
      disabled={desHabilitado}
      label={{
        basic: true,
        color: "green",
        pointing: "left",
        content: cantidad,
      }}
    />
  );
};
const estilos = {
  fill: { fgColor: { rgb: "81ce32" } },
  font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
  alignment: { vertical: "center", horizontal: "center" },
  border: {
    top: { style: "medium", color: { rgb: "66a527" } },
    bottom: { style: "medium", color: { rgb: "66a527" } },
    left: { style: "medium", color: { rgb: "66a527" } },
    right: { style: "medium", color: { rgb: "66a527" } },
  },
};

const conjuntoDeDatos = [
  {
    columns: [
      {
        title: "Nro.",
        width: { wpx: 40 },
        style: estilos,
      },
      {
        title: "Nombre",
        width: { wpx: 200 },
        style: estilos,
      },
      {
        title: "Correo",
        width: { wpx: 200 },
        style: estilos,
      },
      {
        title: "Teléfono",
        width: { wpx: 110 },
        style: estilos,
      },
      {
        title: "Fecha de nacimiento",
        width: { wpx: 180 },
        style: estilos,
      },
      {
        title: "Nivel de Inglés",
        width: { wpx: 130 },
        style: estilos,
      },
      {
        title: "Nodo",
        width: { wpx: 90 },
        style: estilos,
      },
      {
        title: "Sede",
        width: { wpx: 90 },
        style: estilos,
      },
      {
        title: "Linkedin",
        width: { wpx: 200 },
        style: estilos,
      },
      {
        title: "Curso",
        width: { wpx: 200 },
        style: estilos,
      },
      {
        title: "Año",
        width: { wpx: 90 },
        style: estilos,
      },
    ],
    data: [],
  },
];

const generarFila = (egresade, numero) => {
  const fechaDeNacimiento = egresade.fechaNacimiento
    ? moment(egresade.fechaNacimiento).format("L")
    : "";
  return [
    numero + 1,
    egresade.nombreCompleto,
    egresade.correo,
    egresade.celular,
    fechaDeNacimiento,
    egresade.nivelIngles,
    egresade.nombreNodo,
    egresade.sede,
    egresade.linkedin,
    egresade.modulo,
    egresade.añoGraduacion,
  ];
};

const BotonDescargar = ({ seleccionados }) => {
  moment.locale("es");
  const fecha_descarga = moment(Date.now()).format("LL");
  const filas = seleccionados.map((egresade, index) => {
    return generarFila(egresade, index);
  });
  conjuntoDeDatos[0].data = filas;
  const ArchivoExcel = ReactExport.ExcelFile;
  const HojaExcel = ReactExport.ExcelFile.ExcelSheet;

  return (
    <div>
      {seleccionados.length ? (
        <ArchivoExcel
          filename={`Egresades Exportados - ${fecha_descarga}`}
          element={<Boton cantidad={seleccionados.length} />}
        >
          <HojaExcel dataSet={conjuntoDeDatos} name="Egresades"></HojaExcel>
        </ArchivoExcel>
      ) : (
        <Boton cantidad={seleccionados.length} />
      )}
    </div>
  );
};

export default BotonDescargar;
