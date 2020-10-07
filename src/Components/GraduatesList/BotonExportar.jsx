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
const conjuntoDeDatos = [
  {
    columns: [
      {
        title: "Nro.",
        width: { wpx: 40 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Nombre",
        width: { wpx: 200 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Correo",
        width: { wpx: 200 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Teléfono",
        width: { wpx: 110 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Fecha de nacimiento",
        width: { wpx: 180 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Nivel de Inglés",
        width: { wpx: 130 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Nodo",
        width: { wpx: 90 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Sede",
        width: { wpx: 90 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Linkedin",
        width: { wpx: 200 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Curso",
        width: { wpx: 200 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
      {
        title: "Año",
        width: { wpx: 90 },
        style: {
          fill: { fgColor: { rgb: "81ce32" } },
          font: { bold: true, sz: 14, color: { rgb: "ffffff" } },
          alignment: { vertical: "center", horizontal: "center" },
          border: {
            top: { style: "medium", color: { rgb: "66a527" } },
            bottom: { style: "medium", color: { rgb: "66a527" } },
            left: { style: "medium", color: { rgb: "66a527" } },
            right: { style: "medium", color: { rgb: "66a527" } },
          },
        },
      },
    ],
    data: [],
  },
];

const generarFila = (egresade, numero) => {
  const fechaDeNacimiento = egresade.birthDate
    ? moment(egresade.birthDate).format("L")
    : "";
  return [
    numero + 1,
    egresade.fullName,
    egresade.mail,
    egresade.cellphone,
    fechaDeNacimiento,
    egresade.englishLevel,
    egresade.node,
    egresade.sede,
    egresade.linkedin,
    egresade.finishedCourses,
    egresade.graduationYear,
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
